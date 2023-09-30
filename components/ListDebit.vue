<template>
  <div class="bg-cyan-500 shadow-lg hover:bg-cyan-600 rounded-md max w-1/5 p-4">
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
      debitItems: ["Debit Item 1", "Debit Item 2", "Debit Item 3"],
    };
  },
};
</script>
