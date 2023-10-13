<template>
  <div>
    <div class="container mx-auto py-8">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h1 class="text-2xl font-semibold mb-4">Profil Pengguna</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 class="text-lg font-semibold">Informasi Umum</h2>
            <p>Nama: {{ userNow.name }}</p>
            <p>Email: {{ userNow.email }}</p>
          </div>
          <div>
            <h2 class="text-lg font-semibold">Edit Profil</h2>
            <form @submit.prevent="editProfile">
              <div class="mb-4">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                  >Nama:</label
                >
                <input
                  v-model="editedUser.name"
                  type="text"
                  id="name"
                  name="name"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Email:</label
                >
                <input
                  v-model="editedUser.email"
                  type="email"
                  id="email"
                  name="email"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                Simpan Perubahan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Copyright />
    <NotificationSuccess
      v-if="showSuccessNotification"
      :message="successMessage"
      @close="showSuccessNotification = false"
    />
    <NotificationFailed
      v-if="showFailedNotification"
      :message="failedMessage"
      @close="showFailedNotification = false"
    />
  </div>
</template>

<script>
import NotificationSuccess from "@/components/NotificationSuccess.vue";
import NotificationFailed from "@/components/NotificationFailed.vue";
import Copyright from "~/components/Copyright.vue";
import { supabase } from "~/plugins/supabase";

export default {
  middleware: "checkSession",
  layout: "navbar",
  components: { NotificationSuccess, NotificationFailed, Copyright },
  methods: {
    async getUser() {
      try {
        const key = process.env.apiKey;
        const id = localStorage.getItem("id");

        const response = await this.$axios.get(
          `/v1/users?select=*&&id=eq.${id}`,
          {
            headers: {
              apikey: key,
              Authorization: `Bearer ${key}`,
            },
          }
        );

        if (response.status === 200) {
          this.userNow.name = response.data[0].username;
          this.userNow.email = response.data[0].email;
        } else {
          console.error("error", response.error);
        }
      } catch (error) {
        console.error("error", error);
      }
    },
    async editProfile() {
      try {
        const key = process.env.apiKey;
        const id = localStorage.getItem("id");

        const response = await this.$axios.patch(
          `/v1/users?id=eq.${id}`,
          {
            username: this.editedUser.name,
            email: this.editedUser.email,
          },
          {
            headers: {
              apikey: key,
              Authorization: `Bearer ${key}`,
              "Content-Type": "application/json",
              Prefer: "return=minimal",
            },
          }
        );

        const { data } = await supabase.auth.updateUser({
          email: this.editedUser.email,
        });

        if (response.status === 204) {
          await this.getUser();
          this.showSuccess("Profil berhasil diubah.");
        } else {
          this.showFailed("Gagal mengubah profil.");
          console.error("error", response.error);
        }
      } catch (error) {
        this.showFailed("Gagal mengubah profil.");
        console.error("error", error);
      }
    },
    showSuccess(message) {
      this.successMessage = message;
      this.showSuccessNotification = true;
    },
    showFailed(message) {
      this.failedMessage = message;
      this.showFailedNotification = true;
    },
  },
  async mounted() {
    await this.getUser();
  },
  data() {
    return {
      userNow: {
        name: "",
        email: "",
      },
      editedUser: {
        name: "",
        email: "",
      },
      showSuccessNotification: false,
      successMessage: "",
      showFailedNotification: false,
      failedMessage: "",
    };
  },
};
</script>
