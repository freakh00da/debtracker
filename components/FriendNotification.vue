<template>
  <div v-show="!data.ignored">
    <h3 class="font-bold text-lg">Friend Request Details</h3>
    <div class="py-4">
      <p><strong>Name:</strong> {{ data.name }}</p>
      <p><strong>Email:</strong> {{ data.email }}</p>
      <p><strong>Message:</strong> {{ data.message }}</p>
    </div>
    <div class="flex gap-2">
      <button class="btn" @click="acceptFriendRequest()">Accept</button>
      <button class="btn" @click="ignoreFriendRequest()">Ignore</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    async acceptFriendRequest() {
      const key = process.env.apiKey;
      const id = localStorage.getItem("id");
      const myData = await this.getUserData(this.data.friend_id, key);
      const otherData = await this.getUserData(id, key);

      try {
        const addFriendToMe = await this.$axios.post(
          "/v1/friends",
          {
            id: id,
            friend_id: this.data.friend_id,
            email: this.data.email,
            username: myData.username,
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
        const addMeToFriend = await this.$axios.post(
          "/v1/friends",
          {
            id: this.data.friend_id,
            friend_id: id,
            email: otherData.email,
            username: otherData.username,
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

        if (addFriendToMe.status === 201 && addMeToFriend.status === 201) {
          await this.ignoreFriendRequest();
        }
      } catch (error) {}
    },
    async getUserData(friendId, key) {
      const response = await this.$axios.get(`/v1/users?id=eq.${friendId}`, {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
      });
      return response.data[0];
    },

    async ignoreFriendRequest() {
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
  },
};
</script>
