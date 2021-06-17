<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400" elevation="23" class="rounded-xl">
        <div class="blue py-4">
          <v-avatar size="170" style=" margin-left:100px;">
            <img src="../assets/img/logo.jpg" />
          </v-avatar>
        </div>
        <v-form @submit.prevent="GiveTheMark()" >
          <v-container>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="studentLogin.username"
                  label="Username"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  label="Password"
                  v-model="studentLogin.password"
                  :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  :type="show ? 'text' : 'password'"
                  @click:append="show = !show"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row>
              <v-col style="margin-left:100px;" cols="12" md="12">
                <v-btn
                  :disabled="isDisabled"
                  type="submit"
                  color="primary"
                  elevation="6"
                  large
                >
                  Login
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      valid: false,
      studentLogin: {},
      show: false,
      token: localStorage.removeItem('access_token'),
      studentLoggedIn: localStorage.setItem('studentLoggedIn', false)
    }
  },
  computed: {
    isDisabled() {
      if (this.studentLogin.username && this.studentLogin.password != null) {
        return false
      }
      return true
    }
  },
  methods: {
    GiveTheMark() {
      axios.post('auth/jwt/create/', this.studentLogin).then(response => {
        localStorage.setItem('access_token', response.data.access)
        this.studentLoggedIn = true
        localStorage.setItem('studentLoggedIn', this.studentLoggedIn)
        this.$router.push('/studentMark')
      })
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        if (JSON.parse(localStorage.getItem('loggedInForEng')) === true) {
          localStorage.setItem('loggedInForEng', true)
        } else {
          localStorage.setItem('loggedInForEng', false)
        }
      }
    }
  }
}
</script>

<style scoped></style>
