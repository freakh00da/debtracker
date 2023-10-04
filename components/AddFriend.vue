<template>
  <div>
    <!-- Open the modal using ID.showModal() method -->
    <button class="btn" @click="openModal">Add Friend</button>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Add Friend</h3>
        <form @submit.prevent="sendRequest">
          <div class="py-4">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email:</label
            >
            <input
              type="email"
              v-model="email"
              id="email"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div class="py-4">
            <label for="message" class="block text-sm font-medium text-gray-700"
              >Message:</label
            >
            <textarea
              v-model="message"
              id="message"
              rows="4"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>
          <div class="modal-action">
            <button type="submit" class="btn">Send</button>
            <button @click="closeModal" class="btn">Close</button>
          </div>
        </form>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
    };
  },
  methods: {
    openModal() {
      const modal = document.getElementById("my_modal_1");
      modal.showModal();
    },
    closeModal() {
      const modal = document.getElementById("my_modal_1");
      modal.close();
    },
    sendRequest() {
      console.log("Email:", this.email);
      console.log("Message:", this.message);
      this.closeModal();
    },
  },
};
</script>
