<template>
  <div>
    <!-- Open the modal using ID.showModal() method -->
    <button class="btn btn-link" @click="showPayRequestDetails()">
      See More
    </button>
    <dialog id="pay_modal" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Pay Request Details</h3>
        <div class="py-4">
          <p><strong>Name:</strong> {{ payRequest.name }}</p>
          <p><strong>Ammount:</strong> {{ payRequest.ammount }}</p>
        </div>
        <div class="flex gap-2">
          <button class="btn" @click="acceptPayRequest()">Accept</button>
          <button class="btn" @click="ignorePayRequest()">Ignore</button>
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
      payRequest: {
        name: "Jose", // Gantilah dengan data friend request yang sesuai
        ammount: 10.0, // Gantilah dengan data friend request yang sesuai
      },
    };
  },
  methods: {
    showPayRequestDetails() {
      // Implementasikan logika untuk menampilkan detail permintaan teman
      // Misalnya, ambil data dari server atau tampilkan data yang ada di komponen
      pay_modal.showModal();
    },
    acceptPayRequest() {
      // Implementasikan logika untuk menerima permintaan teman
      // Misalnya, kirim permintaan ke server
      this.closeModal();
    },
    ignorePayRequest() {
      // Implementasikan logika untuk mengabaikan permintaan teman
      // Misalnya, hapus permintaan dari daftar atau kirim permintaan ke server
      this.closeModal();
    },
    closeModal() {
      pay_modal.close();
    },
  },
};
</script>
