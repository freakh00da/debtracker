<template>
  <div class="bg-cyan-500 shadow-lg rounded-md max w-1/5 p-4">
    <div class="flex items-center">
      <h2 class="text-lg font-medium">Total Credit</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
        />
      </svg>
    </div>
    <h1 class="text-4xl font-bold py-2">Rp {{ totalCredit.toString() }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalCredit: 50000,
    };
  },
};
</script>

<style scoped></style>
