<template>
  <div class="stats shadow-lg">
    <div class="stat place-items-center">
      <div class="stat-title">Total Debit</div>
      <div class="stat-value text-blue-500">Rp 70k</div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">Total Credit</div>
      <div class="stat-value text-red-500">Rp 150k</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalCredit: 50000,
      totalDebit: 100000,
    };
  },
};
</script>

<style scoped></style>
