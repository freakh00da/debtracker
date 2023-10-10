<template>
  <div class="flex justify-center">
    <div
      class="border-solid border-2 rounded-xl my-10 bg-sky-50 shadow w-1/2 justify-center"
    >
      <h2 class="font-bold m-2">{{ name }}'s detail</h2>
      <div class="m-4">
        <div class="bg-white p-4 shadow-lg rounded-xl">
          <div class="overflow-x-auto">
            <table class="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in filteredTableData"
                  :key="index"
                  :class="{ 'bg-base-200': index % 2 === 0 }"
                >
                  <th>{{ index + 1 }}</th>
                  <td>{{ formatDateTime(item.created_at) }}</td>
                  <td>{{ item.type }}</td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.message }}</td>
                  <td>{{ item.status }}</td>
                  <td><UpdateDialog :tid="item.tid" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="m-2">
            <RequestDialog />
          </div>
          <nuxt-link to="/friends">
            <button class="btn-sm text-blue-500 font-semibold m-2">
              go back
            </button></nuxt-link
          >
        </div>
        <Copyright />
      </div>
    </div>
  </div>
</template>

<script>
import RequestDialog from "~/components/RequestDialog.vue";
import UpdateDialog from "~/components/UpdateDialog.vue";

export default {
  components: { RequestDialog, UpdateDialog },
  layout: "navbar",
  middleware: "checkSession",
  data() {
    return {
      tableData: [],
      name: "",
    };
  },
  computed: {
    filteredTableData() {
      const friendId = this.$route.params.id;
      return this.tableData.filter((item) => item.id == friendId);
    },
  },
  methods: {
    async fetchTransactions() {
      try {
        const id = this.$route.params.id;
        const key = process.env.apiKey;

        const response = await this.$axios.get(`/v1/transactions?id=eq.${id}`, {
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
          },
        });
        const name = await this.friendName(id, key);

        if (response.status === 200) {
          this.tableData = response.data.map((item) => {
            return item;
          });
          this.name = name;
        } else {
          console.error("Error fetching transactions:", response.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    async friendName(id, key) {
      const response = await this.$axios.get(`/v1/users?id=eq.${id}`, {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
      });
      return response.data[0].username;
    },
    formatDateTime(dateTimeString) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };

      const dateTime = new Date(dateTimeString);
      return dateTime.toLocaleDateString(undefined, options);
    },
  },
  async mounted() {
    this.fetchTransactions();
  },
};
</script>
