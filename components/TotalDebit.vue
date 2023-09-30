<template>
  <div class="bg-cyan-500 shadow-lg rounded-md max w-1/5 p-4">
    <div class="flex items-center">
      <h2 class="text-lg font-medium">Total Debit</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 ml-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    </div>
    <h1 class="text-4xl font-bold py-2">Rp {{ totalDebit.toString() }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalDebit: 50000,
    };
  },
};
</script>

<style scoped></style>
