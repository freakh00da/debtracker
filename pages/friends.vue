<template>
  <div>
    <div class="flex justify-center my-6">
      <Sidebar />
    </div>
    <div class="flex justify-center">
      <div
        class="border-solid border-2 rounded-xl my-10 bg-sky-50 shadow w-3/5"
      >
        <div class="p-5">
          <Friends />
        </div>
        <div class="m-5">
          <AddFriend />
        </div>
        <Copyright />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "~/components/Sidebar.vue";
import Friends from "~/components/Friends.vue";

export default {
  components: { Sidebar, Friends },
  middleware: "checkSession",
  layout: "navbar",
};
</script>
