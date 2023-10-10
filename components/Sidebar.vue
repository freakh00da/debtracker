<template>
  <div class="tabs">
    <nuxt-link
      to="/friends"
      class="tab tab-bordered"
      :class="{ 'tab-active': $route.path === '/friends' }"
      >Friends</nuxt-link
    >
    <nuxt-link
      to="/dashboard"
      class="tab tab-bordered"
      :class="{ 'tab-active': $route.path === '/dashboard' }"
      >Dashboard</nuxt-link
    >
  </div>
</template>
<script>
export default {};
</script>
