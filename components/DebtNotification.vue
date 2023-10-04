<template>
  <div>
    <!-- Open the modal using ID.showModal() method -->
    <button class="btn btn-link" @click="showDebtRequestDetails()">
      See More
    </button>
    <dialog id="debt_modal" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Debt Request Details</h3>
        <div class="py-4">
          <p><strong>Name:</strong> {{ debtRequest.name }}</p>
          <p><strong>Ammount:</strong> {{ debtRequest.ammount }}</p>
        </div>
        <div class="flex gap-2">
          <button class="btn" @click="acceptDebtRequest()">Accept</button>
          <button class="btn" @click="ignoreDebtRequest()">Ignore</button>
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
      debtRequest: {
        name: "John Doe", // Gantilah dengan data friend request yang sesuai
        ammount: 10.0, // Gantilah dengan data friend request yang sesuai
      },
    };
  },
  methods: {
    showDebtRequestDetails() {
      // Implementasikan logika untuk menampilkan detail permintaan teman
      // Misalnya, ambil data dari server atau tampilkan data yang ada di komponen
      debt_modal.showModal();
    },
    acceptDebtRequest() {
      // Implementasikan logika untuk menerima permintaan teman
      // Misalnya, kirim permintaan ke server
      this.closeModal();
    },
    ignoreDebtRequest() {
      // Implementasikan logika untuk mengabaikan permintaan teman
      // Misalnya, hapus permintaan dari daftar atau kirim permintaan ke server
      this.closeModal();
    },
    closeModal() {
      debt_modal.close();
    },
  },
};
</script>
