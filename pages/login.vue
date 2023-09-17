<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center mb-6">
        <img src="../assets/logo-ext.png" alt="Debtracker Logo" class="logo" />
      </div>
      <form @submit.prevent="login">
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
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Masuk
          </button>
        </div>
      </form>
      <div class="text-center">
        <p class="text-gray-600 text-sm">
          Belum punya akun?
          <nuxt-link to="/signup" class="text-blue-500 hover:underline"
            >Daftar di sini</nuxt-link
          >
        </p>
      </div>
      <Copyright />
    </div>
  </div>
</template>

<script>
import Copyright from "~/components/Copyright.vue";
export default {
  components: { Copyright },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(
        "Login dengan email:",
        this.email,
        "dan password:",
        this.password
      );
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
