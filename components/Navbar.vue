<template>
  <nav class="bg-blue-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="logo">
        <nuxt-link to="/dashboard">
          <img src="../assets/logo-ext.png" alt="Debtracker Logo" />
        </nuxt-link>
      </div>
      <div class="profile">
        <nuxt-link to="/profile">
          <i class="text-white mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </i>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.profile {
  height: 40px;
  width: 40px;
}

.logo {
  max-width: 150px;
  height: auto;
}
</style>
