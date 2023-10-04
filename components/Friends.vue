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
        <tr v-for="(friend, index) in friends" :key="index">
          <td>
            <div class="font-bold">{{ friend.name }}</div>
          </td>
          <td>{{ friend.email }}</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      friends: [
        { name: "Hart Hagerty", email: "hart@example.com" },
        { name: "Brice Swyre", email: "brice@example.com" },
        { name: "Marjy Ferencz", email: "marjy@example.com" },
        { name: "Yancy Tear", email: "yancy@example.com" },
      ],
    };
  },
};
</script>
