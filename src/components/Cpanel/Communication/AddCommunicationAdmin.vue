<template>
  <div>
    <v-btn @click="AddAdminCommunication()" color="blue-grey darken-4">
      <div style="color:white;">
        Add Admin
      </div>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    AddAdminCommunication() {
      this.$router.push('communication-admin')
    }
  }
}
</script>

<style lang="scss" scoped></style>
