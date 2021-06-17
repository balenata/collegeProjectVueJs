<template>
  <div>
    <v-row>
      <v-col
        v-for="(bolonya, i) in currentUser.bolonya_system"
        :key="i"
        cols="12"
        sm="12"
        md="12"
      >
        <img  width="100%" :src="`http://127.0.0.1:8000${bolonya.img_card}`" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(years, i) in currentUser.years_system"
        :key="i"
        cols="12"
        sm="12"
        md="12"
      >
        <img  width="100%" :src="`http://127.0.0.1:8000${years.img_card}`" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      currentUser: {}
    }
  },
  mounted() {
    this.getCurrentUserData()
  },

  methods: {
    getCurrentUserData() {
      const accesToken = localStorage.getItem('access_token')
      axios
        .get('current-user/', {
          headers: { Authorization: 'Bearer ' + accesToken }
        })
        .then(res => {
          this.currentUser = res.data
          console.log(this.currentUser)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
