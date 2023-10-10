<template>
  <div class="bg-white p-4 shadow-lg rounded-xl">
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(friend, index) in friends" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ friend.name }}</td>
            <td>{{ formatCurrency(friend.debit) }}</td>
            <td>{{ formatCurrency(friend.credit) }}</td>
            <td>{{ calculateStatus(friend) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [],
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

      const uniqueFriendIds = [...new Set(data.map((item) => item.friend_id))];

      this.friends = [];

      for (const friendId of uniqueFriendIds) {
        const friendTransactions = data.filter(
          (item) => item.friend_id === friendId
        );
        const friendName = await this.getFriendName(friendId);
        const friendDebit = friendTransactions
          .filter((item) => item.type === "debit")
          .reduce((total, item) => total + item.amount, 0);
        const friendCredit = friendTransactions
          .filter((item) => item.type === "credit")
          .reduce((total, item) => total + item.amount, 0);

        this.friends.push({
          name: friendName,
          debit: friendDebit,
          credit: friendCredit,
        });
      }
    },
    async getFriendName(friend_id) {
      const key = process.env.apiKey;
      const response = await this.$axios.get(`/v1/users?id=eq.${friend_id}`, {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
      });

      return response.data[0].username;
    },
    calculateStatus(friend) {
      const balance = friend.credit - friend.debit;
      if (balance === 0) {
        return "Lunas";
      } else if (balance > 0) {
        return `+${this.formatCurrency(balance)}`;
      } else {
        return `${this.formatCurrency(balance)}`;
      }
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
