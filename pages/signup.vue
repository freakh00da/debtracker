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
            v-model="name"
            type="text"
            id="name"
            name="name"
            placeholder="Masukkan nama Anda"
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
      <Copyright />
    </div>
  </div>
</template>

<script>
import { supabase } from "~/plugins/supabase";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      try {
        const { user, error } = await supabase.auth.signUp({
          email: this.email,
          password: this.password,
        });

        if (error) {
          console.error("Pendaftaran error:", error.message);
        } else {
          this.$router.push("/login");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
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

<style scoped>
.logo {
  max-width: 150px;
  height: auto;
}
</style>
