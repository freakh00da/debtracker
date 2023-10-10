<template>
  <div>
    <!-- Open the modal using ID.showModal() method -->
    <button class="btn" onclick="my_modal_1.showModal()">ADD REQUEST</button>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <div class="max-w-lg mx-auto p-6">
          <form @submit.prevent="submitForm">
            <div class="space-y-4">
              <div>
                <label for="type" class="block text-gray-600 font-medium"
                  >Jenis:</label
                >
                <select
                  v-model="form.type"
                  id="type"
                  name="type"
                  class="select select-bordered w-full"
                >
                  <option value="debt">Debit</option>
                  <option value="pay">Kredit</option>
                </select>
              </div>
              <div>
                <label for="amount" class="block text-gray-600 font-medium"
                  >Jumlah:</label
                >
                <input
                  v-model.number="form.amount"
                  type="number"
                  id="amount"
                  name="amount"
                  class="input input-bordered w-full"
                  placeholder="Masukkan jumlah"
                  required
                />
              </div>
              <div>
                <label for="message" class="block text-gray-600 font-medium"
                  >Pesan:</label
                >
                <textarea
                  v-model="form.message"
                  id="message"
                  name="message"
                  class="textarea textarea-bordered w-full"
                  placeholder="Masukkan pesan"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-action">
          <form method="dialog" @submit.prevent="submitForm">
            <!-- if there is a button in form, it will close the modal -->
            <button type="submit" class="btn btn-primary">send</button>
            <button class="btn mx-1" @click="closeModal">cancel</button>
          </form>
        </div>
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
      form: {
        type: "debt",
        amount: null,
        message: null,
      },
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
    async submitForm() {
      const userId = localStorage.getItem("id");
      const key = process.env.apiKey;
      const sender = await this.getSender(userId, key);
      const id = this.$route.params.id;

      try {
        const response = await this.$axios.post(
          "/v1/notifications",
          {
            email: sender.email,
            message: this.form.message,
            type: this.form.type,
            id: id,
            status: "accepted",
            name: sender.username,
            friend_id: userId,
            amount: this.form.amount,
          },
          {
            headers: {
              apikey: key,
              Authorization: `Bearer ${key}`,
              "Content-Type": "application/json",
              Prefer: "return=minimal",
            },
          }
        );
        if (response.status === 201) {
          this.closeModal();

          this.showSuccess("Notifikasi berhasil dikirim.");
        } else {
          this.showFailed("Gagal mengirim notifikasi.");
          console.error("error", error);
        }
      } catch (error) {
        this.showFailed("Gagal mengirim notifikasi.");
        console.error("error", error);
      }
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
