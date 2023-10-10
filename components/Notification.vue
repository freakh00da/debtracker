<template>
  <div>
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="my-1"
    >
      <div class="collapse collapse-arrow bg-base-200 border-2 border-solid">
        <input type="radio" :name="'my-accordion-2-' + index" />
        <div class="collapse-title text-xl font-medium">
          {{ getNotificationTitle(notification) }}
        </div>
        <div class="collapse-content">
          <component
            :is="getNotificationComponent(notification)"
            :data="notification"
            @ignore-notification="ignoreNotification"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    async getNotification() {
      try {
        const key = process.env.apiKey;
        const id = localStorage.getItem("id");

        const response = await this.$axios.get(
          `/v1/notifications?select=*&&id=eq.${id}`,
          {
            headers: {
              apikey: key,
              Authorization: `Bearer ${key}`,
            },
          }
        );

        if (response.status === 200) {
          this.notifications = response.data;
        } else {
          console.error("error", response.error);
        }
      } catch (error) {
        console.error("error", error);
      }
    },

    getNotificationTitle(notification) {
      switch (notification.type) {
        case "debt":
          return `a new debit request from ${notification.name}`;
        case "pay":
          return `a new credit request from ${notification.name}`;
        case "friend-request":
          return `a new friend request from ${notification.name}`;
        default:
          return "Unknown Notification";
      }
    },

    getNotificationComponent(notification) {
      switch (notification.type) {
        case "debt":
          return "DebtNotification";
        case "pay":
          return "PayNotification";
        case "friend-request":
          return "FriendNotification";
        default:
          return "UnknownNotification";
      }
    },

    ignoreNotification(ignoredNotification) {
      this.notifications = this.notifications.filter(
        (notification) => notification.nid !== ignoredNotification.nid
      );
    },
  },
  async mounted() {
    this.getNotification();
  },
};
</script>
