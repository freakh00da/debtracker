<!-- components/ListCredit.vue -->
<template>
  <div class="border p-4">
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
      creditItems: ["Credit Item 1", "Credit Item 2", "Credit Item 3"], // Data sementara untuk list kredit
    };
  },
};
</script>

<style scoped>
/* Gaya khusus untuk komponen ListCredit.vue */
</style>
