<!-- bismillahirrahmanirrahim -->
<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center mb-5">
        <img src="../assets/logo-ext.png" alt="Debtracker Logo" class="logo" />
      </div>
      <h1 class="text-3xl font-semibold text-center mb-5">
        Selamat Datang di Debtracker
      </h1>
      <p class="text-gray-700 text-sm text-center mb-5">
        Debtracker adalah aplikasi pencatat hutang yang memudahkan Anda untuk
        mengelola hutang dengan teman-teman Anda.
      </p>
      <div class="text-center">
        <nuxt-link
          to="/login"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >Masuk</nuxt-link
        >
        <nuxt-link
          to="/signup"
          class="ml-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
          >Daftar</nuxt-link
        >
      </div>
      <br />
      <Copyright />
    </div>
  </div>
</template>

<script>
import Copyright from "~/components/Copyright.vue";
export default {
  components: { Copyright },
  // middleware: "loggedIn",
  data() {
    return {};
  },
  mounted() {
    localStorage.clear();
  },
};
</script>

<style scoped>
.logo {
  max-width: 150px;
  height: auto;
}
</style>
