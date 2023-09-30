<template>
  <div class="text-center text-gray-500 text-sm my-4">
    &copy; {{ currentYear }}
    <a
      href="https://github.com/freakh00da"
      class="text-blue-500 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      >freakh00da</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped></style>
