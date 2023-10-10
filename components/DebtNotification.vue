<template>
  <div v-show="!data.ignored">
    <h3 class="font-bold text-lg">Debit Request Details</h3>
    <div class="py-4">
      <p><strong>Name:</strong> {{ data.name }}</p>
      <p><strong>Email:</strong> {{ data.email }}</p>
      <p><strong>Message:</strong> {{ data.message }}</p>
      <p><strong>Amount:</strong> {{ data.amount }}</p>
    </div>
    <div class="flex gap-2">
      <button class="btn" @click="acceptDebtRequest()">Accept</button>
      <button class="btn" @click="ignoreDebtRequest()">Ignore</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    showDebtRequestDetails() {
      debt_modal.showModal();
    },
    async acceptDebtRequest() {
      const key = process.env.apiKey;

      try {
        const meToOtherResponse = await this.$axios.post(
          "/v1/transactions",
          {
            type: "credit",
            amount: this.data.amount,
            message: this.data.message,
            id: this.data.friend_id,
            friend_id: this.data.id,
          },
          {
            headers: {
              apikey: key,
              Authorization: `Bearer ${key}`,
            },
          }
        );

        const otherToMeResponse = await this.$axios.post(
          "/v1/transactions",
          {
            type: "debit",
            amount: this.data.amount,
            message: this.data.message,
            id: this.data.id,
            friend_id: this.data.friend_id,
            status: "accepted",
          },
          {
            headers: {
              apikey: key,
              Authorization: `Bearer ${key}`,
            },
          }
        );

        if (
          meToOtherResponse.status === 201 &&
          otherToMeResponse.status === 201
        ) {
          await this.ignoreDebtRequest();
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    async ignoreDebtRequest() {
      const key = process.env.apiKey;

      try {
        const response = await this.$axios.delete(
          `/v1/notifications?nid=eq.${this.data.nid}`,
          {
            headers: { apikey: key, Authorization: `Bearer ${key}` },
          }
        );

        if (response.status === 204) {
          this.$emit("ignore-notification", this.data);
        } else {
          console.error("Error:", response.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    closeModal() {
      debt_modal.close();
    },
  },
};
</script>
