<template>
  <b-modal centered id="modalConfirmation" hide-header align="center">
    <template #modal-footer>
      <b-button
        variant="outline"
        class="bg-indigo-500 text-white"
        @click="$emit('delForm')"
        >Yakin</b-button
      >
      <b-button variant="secondary" @click="$bvModal.hide('modalConfirmation')"
        >Batal</b-button
      >
    </template>

    <b-card-text class="mt-4 mb-4">
      <h1 class="font-semibold text-3xl">Apakah Anda Yakin Ingin Menghapus?</h1>
    </b-card-text>
  </b-modal>
</template>
