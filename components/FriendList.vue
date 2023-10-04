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
      friends: [
        { name: "Teman 1", debit: 100, credit: 50 },
        { name: "Teman 2", debit: 30, credit: 60 },
        { name: "Teman 3", debit: 0, credit: 0 },
        { name: "Teman 4", debit: 0, credit: 0 },
        { name: "Teman 5", debit: 0, credit: 0 },
        { name: "Teman 6", debit: 0, credit: 0 },
        { name: "Teman 7", debit: 0, credit: 0 },
        { name: "Teman 8", debit: 0, credit: 0 },
        { name: "Teman 9", debit: 0, credit: 0 },
      ],
    };
  },
  methods: {
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
};
</script>
