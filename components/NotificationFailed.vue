<template>
  <div class="bg-red-500 text-white p-4 rounded shadow-lg">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <svg
          class="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        <span class="font-semibold">Gagal!</span>
      </div>
      <button
        @click="closeNotification"
        class="text-white hover:text-gray-200 focus:outline-none"
      >
        <svg
          class="w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          ></path>
        </svg>
      </button>
    </div>
    <p class="mt-2">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  methods: {
    closeNotification() {
      this.$emit("close");
    },
  },
};
</script>
