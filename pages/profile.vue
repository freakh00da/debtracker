<template>
  <div>
    <div class="container mx-auto py-8">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h1 class="text-2xl font-semibold mb-4">Profil Pengguna</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 class="text-lg font-semibold">Informasi Umum</h2>
            <p>Nama: {{ user.name }}</p>
            <p>Email: {{ user.email }}</p>
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
  </div>
</template>

<script>
import Copyright from "~/components/Copyright.vue";
export default {
  // middleware: "checkSession",
  layout: "navbar",
  components: Copyright,
  data() {
    return {
      user: {
        name: "Nama Pengguna",
        email: "contoh@example.com",
      },
      editedUser: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    editProfile() {
      console.log("Profil diubah menjadi:", this.editedUser);
    },
  },
};
</script>
