<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from '@/components/Cpanel/NavbarAdmin.vue'

export default {
  data () {
    return {}
  },
  components: {
    navbar
  }
}
</script>

<style scoped></style>
