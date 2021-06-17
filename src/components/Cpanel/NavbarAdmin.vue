<template>
  <div>
    <v-app-bar app color="blue-grey darken-4 " flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="50">
          <img src="@/assets/img/logo.jpg" />
        </v-avatar>
        <v-spacer></v-spacer>
        <v-btn @click="LogOut()" class="red mr-3" style="left:0" text>
          LogOut
        </v-btn>
        <v-btn @click="goback()" class="white mr-3" style="left:0" text>
          go back
        </v-btn>
        <v-btn class="white" style="left:0" to="/eng-admin" text>
          Home
        </v-btn>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
    LogOut() {
      localStorage.removeItem('access_token')
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped></style>
