<template>
  <div class="bg-cyan-500 shadow-lg hover:bg-cyan-600 rounded-md max w-1/5 p-4">
    <h2 class="text-xl font-semibold">List Credit</h2>
    <ul>
      <li v-for="(item, index) in creditItems" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creditItems: ["Credit Item 1", "Credit Item 2", "Credit Item 3"],
    };
  },
};
</script>

<style scoped></style>
