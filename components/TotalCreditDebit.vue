<template>
  <div class="stats shadow-lg">
    <div class="stat place-items-center">
      <div class="stat-title">Total</div>
      <div class="stat-value text-blue-500">{{ formatCurrency(total) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
    };
  },
  methods: {
    async getData() {
      const id = localStorage.getItem("id");
      const key = process.env.apiKey;

      const response = await this.$axios.get(`/v1/transactions?id=eq.${id}`, {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
      });

      const data = response.data;

      if (data.length === 0) {
        console.warn("Tidak ada data yang ditemukan.");
        return;
      }

      const totalCredit = data
        .filter((item) => item.type === "credit")
        .reduce((total, item) => total + item.amount, 0);
      const totalDebit = data
        .filter((item) => item.type === "debit")
        .reduce((total, item) => total + item.amount, 0);

      this.total = totalCredit - totalDebit;
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(value);
    },
  },
  async mounted() {
    await this.getData();
  },
};
</script>

<style scoped></style>
