<template>
  <div class="center">
    <v-row>
      <v-col cols="12" md="12">
        <v-text-field
          name="username"
          label="username"
          v-model="admin.username"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="12">
        <v-text-field
          label="Password"
          v-model="admin.password"
          :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        ></v-text-field>
      </v-col>
      <v-btn @click="addAdmin()" color="info">Add Admin</v-btn>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      show: false,
      admin: {}
    }
  },
  methods: {
    addAdmin() {
      const accesToken = localStorage.getItem('access_token')
      const fd = new FormData()
      fd.append('username', this.admin.username)
      fd.append('password', this.admin.password)
      axios
        .post('communication-admin/', fd, {
          headers: { Authorization: 'Bearer ' + accesToken }
        })
        .then(response => {
          this.$router.go(-1)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  }
}
</script>

<style scoped>
.center {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
