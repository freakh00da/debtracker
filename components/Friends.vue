<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="friend in friends" :key="friend.id">
          <td>
            <div class="font-bold">{{ friend.username }}</div>
          </td>
          <td>{{ friend.email }}</td>
          <td>
            <nuxt-link
              :to="`/friend/${friend.friend_id}`"
              class="btn btn-ghost btn-xs"
            >
              details
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
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
    async getFriends() {
      const id = localStorage.getItem("id");
      const key = process.env.apiKey;

      try {
        const response = await this.$axios.get(`/v1/friends?id=eq.${id}`, {
          headers: { apikey: key, Authorization: `Bearer ${key}` },
        });

        if (response.status === 200) {
          this.friends = response.data;
        } else {
          console.error("Error:", response.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },

  async mounted() {
    await this.getFriends();
  },
};
</script>
