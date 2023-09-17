<template>
  <div>
    <br />
    <div class="flex justify-between">
      <ListCredit />
      <ListDebit />
    </div>
  </div>
</template>

<script>
import ListCredit from "~/components/ListCredit.vue";
import ListDebit from "~/components/ListDebit.vue";
export default {
  layout: "navbar",
  components: {
    ListCredit,
    ListDebit,
  },
};
</script>

<style scoped></style>
