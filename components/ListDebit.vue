<!-- components/ListDebit.vue -->
<template>
  <div class="border p-4">
    <h2 class="text-xl font-semibold">List Debit</h2>
    <ul>
      <li v-for="(item, index) in debitItems" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      debitItems: ["Debit Item 1", "Debit Item 2", "Debit Item 3"], // Data sementara untuk list debit
    };
  },
};
</script>

<style scoped>
/* Gaya khusus untuk komponen ListDebit.vue */
</style>
