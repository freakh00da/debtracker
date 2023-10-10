<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center mb-6">
        <img src="../assets/logo-ext.png" alt="Debtracker Logo" class="logo" />
      </div>
      <form @submit.prevent="signup">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2"
            >Nama:</label
          >
          <input
            v-model="username"
            type="text"
            id="name"
            name="name"
            placeholder="Masukkan username Anda"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
            >Email:</label
          >
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            placeholder="Masukkan email Anda"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div class="mb-4">
          <label
            for="password"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Password:</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            placeholder="Masukkan password Anda"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div class="mb-6">
          <button
            type="submit"
            class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Daftar
          </button>
        </div>
      </form>
      <div class="text-center">
        <p class="text-gray-600 text-sm">
          Sudah punya akun?
          <nuxt-link to="/login" class="text-blue-500 hover:underline"
            >Masuk di sini</nuxt-link
          >
        </p>
      </div>

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
  </div>
</template>

<script>
import { supabase } from "~/plugins/supabase";
import NotificationSuccess from "@/components/NotificationSuccess.vue";
import NotificationFailed from "@/components/NotificationFailed.vue";

export default {
  data() {
    return {
      apiKey: process.env.apiKey,
      username: "",
      email: "",
      password: "",
      showSuccessNotification: false,
      successMessage: "",
      showFailedNotification: false,
      failedMessage: "",
    };
  },
  middleware: "loggedIn",
  components: {
    NotificationSuccess,
    NotificationFailed,
  },
  methods: {
    async signup() {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: this.email,
          password: this.password,
        });

        if (error) {
          this.showFailed("Pendaftaran gagal: " + error.message);
        } else {
          const userId = data.user.id;
          await this.addDatabase(userId);

          this.showSuccess(
            "Pendaftaran berhasil. Anda akan dialihkan ke halaman login dalam beberapa detik."
          );

          setTimeout(() => {
            this.$router.push("/login");
          }, 3000);
        }
      } catch (error) {
        console.error("error", error.message);
      }
    },
    async addDatabase(userId) {
      try {
        const key = this.apiKey;

        const response = await this.$axios.post(
          "/v1/users",
          {
            username: this.username,
            email: this.email,
            id: userId,
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

        if (response.status === 201) {
          console.log("sucess", response.data);
        } else {
          console.error("error", response.data);
        }
      } catch (error) {
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
};
</script>

<style scoped>
.logo {
  max-width: 150px;
  height: auto;
}
</style>
