<template>
  <div>
    <div class="flex justify-center my-6">
      <Sidebar />
    </div>
    <div class="flex justify-center">
      <div
        class="border-solid border-2 rounded-xl my-10 bg-sky-50 shadow w-3/5"
      >
        <div>
          <div class="flex justify-between">
            <div class="w-4/5 m-4">
              <FriendList />
            </div>
            <div>
              <div class="m-4">
                <TotalCreditDebit />
              </div>
              <div
                class="m-4 bg-white p-3 shadow-lg rounded-xl border-2 border-solid"
              >
                <h2 class="p-2">Notification</h2>
                <Notification />
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </div>
  </div>
</template>

<script>
import FriendList from "~/components/FriendList.vue";
import Copyright from "~/components/Copyright.vue";
import TotalCreditDebit from "~/components/TotalCreditDebit.vue";
import Sidebar from "~/components/Sidebar.vue";
import Notification from "~/components/Notification.vue";

export default {
  // middleware: "checkSession",
  layout: "navbar",
  components: {
    FriendList,
    Copyright,
    TotalCreditDebit,
    Sidebar,
    Notification,
  },
};
</script>

<style scoped></style>
