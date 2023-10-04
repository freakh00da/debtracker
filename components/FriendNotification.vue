<template>
  <div>
    <!-- Open the modal using ID.showModal() method -->
    <button class="btn btn-link" @click="showFriendRequestDetails()">
      See More
    </button>
    <dialog id="friend_modal" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Friend Request Details</h3>
        <div class="py-4">
          <p><strong>Name:</strong> {{ friendRequest.name }}</p>
          <p><strong>email:</strong> {{ friendRequest.email }}</p>
          <p><strong>message:</strong> {{ friendRequest.message }}</p>
        </div>
        <div class="flex gap-2">
          <button class="btn" @click="acceptFriendRequest()">Accept</button>
          <button class="btn" @click="ignoreFriendRequest()">Ignore</button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button @click="closeModal()">Close</button>
      </form>
    </dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friendRequest: {
        name: "John Doe", // Gantilah dengan data friend request yang sesuai
        email: "john@email.com",
        message: "lorem ipsum dolor sit amet", // Gantilah dengan data friend request yang sesuai
      },
    };
  },
  methods: {
    showFriendRequestDetails() {
      // Implementasikan logika untuk menampilkan detail permintaan teman
      // Misalnya, ambil data dari server atau tampilkan data yang ada di komponen
      friend_modal.showModal();
    },
    acceptFriendRequest() {
      // Implementasikan logika untuk menerima permintaan teman
      // Misalnya, kirim permintaan ke server
      this.closeModal();
    },
    ignoreFriendRequest() {
      // Implementasikan logika untuk mengabaikan permintaan teman
      // Misalnya, hapus permintaan dari daftar atau kirim permintaan ke server
      this.closeModal();
    },
    closeModal() {
      friend_modal.close();
    },
  },
};
</script>
