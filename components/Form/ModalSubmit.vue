<template>
  <b-modal id="modalSubmit" centered>
    <b-card-text>
      <b-row>
        <b-col>
          {{ participants }}
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          {{ tambahan }}
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div v-if="picked === 0">
            {{ picked == 0 ? "Paket pertama" : null }}
          </div>
          <div v-else-if="picked === 1">
            {{ picked == 1 ? "Paket kedua" : null }}
          </div>
          <div v-else>{{ picked == 2 ? "Paket ketiga" : null }}</div>
        </b-col>
      </b-row>
    </b-card-text>
  </b-modal>
</template>

<script>
export default {
  props: {
    participants: {
      type: Object,
    },
    tambahan: {
      type: Array,
    },
    picked: {
      type: Number,
    },
  },
};
</script>

<style></style>
