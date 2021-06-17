<template>
  <div>
    <v-btn  @click="gotoArchive()" color="light-blue darken-4">Archive</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    gotoArchive() {
      this.$router.push('communication-archive')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
