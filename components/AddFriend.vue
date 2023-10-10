<template>
  <div>
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

    <NotificationSuccess
      v-if="showSuccessNotification"
      :message="successMessage"
      @close="showSuccessNotification = false"
    />

    <NotificationFailed
      v-if="showFailedNotification"
      :message="failedMessage"
      @close="showFailedNotification = false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      showSuccessNotification: false,
      successMessage: "",
      showFailedNotification: false,
      failedMessage: "",
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
    async sendRequest() {
      const message = this.message;

      const userId = localStorage.getItem("id");
      const key = process.env.apiKey;
      const sender = await this.getSender(userId, key);
      const id = await this.getId(this.email, key);

      this.$axios
        .post(
          "/v1/notifications",
          {
            email: sender.email,
            message: message,
            type: "friend-request",
            id: id,
            status: "pending",
            name: sender.username,
            friend_id: userId,
          },
          {
            headers: {
              apikey: key,
              Authorization: `Bearer ${key}`,
              "Content-Type": "application/json",
              Prefer: "return=minimal",
            },
          }
        )
        .then((response) => {
          console.log("Response:", response.data);
          this.closeModal();

          this.showSuccess("Permintaan pertemanan berhasil dikirim.");
        })
        .catch((error) => {
          console.error("Error:", error);

          this.showFailed("Gagal mengirim permintaan pertemanan.");
        });
    },
    async getSender(id, key) {
      const response = await this.$axios.get(`/v1/users?id=eq.${id}`, {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
      });
      return response.data[0];
    },
    async getId(email, key) {
      const response = await this.$axios.get(`v1/users?email=eq.${email}`, {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
      });
      return response.data[0].id;
    },

    showSuccess(message) {
      this.successMessage = message;
      this.showSuccessNotification = true;
    },

    showFailed(message) {
      this.failedMessage = message;
      this.showFailedNotification = true;
    },
  },
};
</script>
