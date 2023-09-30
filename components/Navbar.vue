<template>
  <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="w-56 h-auto">
        <nuxt-link to="/dashboard" class="text-white text-lg font-semibold">
          <img src="../assets/logo-ext.png" alt="Debtracker Logo" />
        </nuxt-link>
      </div>
      <div>
        <nuxt-link :to="profileLink" class="text-white text-xl">
          {{ linkText }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    if (this.$route.path === "/profile") {
      return {
        linkText: "to dashboard",
      };
    } else {
      return {
        linkText: "to profile",
      };
    }
  },
  computed: {
    dashboardLink() {
      return this.linkText === "to profile" ? "/dashboard" : "/profile";
    },
    profileLink() {
      return this.linkText === "to profile" ? "/profile" : "/dashboard";
    },
  },
  watch: {
    $route(to, from) {
      if (to.path === "/dashboard") {
        this.linkText = "to profile";
      } else if (to.path === "/profile") {
        this.linkText = "to dashboard";
      }
    },
  },
};
</script>
