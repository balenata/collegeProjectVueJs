<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400" elevation="23" class="rounded-xl">
        <div class="blue-grey darken-4 py-4">
          <v-avatar size="170" style=" margin-left:100px;">
            <img src="../assets/img/logo.jpg" />
          </v-avatar>
        </div>
        <v-form @submit.prevent="goToRoute()" class="" v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="login.username"
                  label="Username"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  label="Password"
                  v-model="login.password"
                  :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  :type="show ? 'text' : 'password'"
                  @click:append="show = !show"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  label="Passcode"
                  v-model="login.passcode"
                  :append-icon="shows ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  :type="shows ? 'text' : 'password'"
                  @click:append="shows = !shows"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row>
              <v-col style="margin-left:100px;" cols="12" md="12">
                <v-btn
                  :disabled="isDisabled"
                  type="submit"
                  color="blue-grey darken-4"
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
      login: {},
      show: false,
      shows: false,
      token: localStorage.removeItem('access_token'),
      loggedInForEng: localStorage.setItem('loggedInForEng', false),
      loggedInForCommunication: localStorage.setItem(
        'loggedInForCommunication',
        false
      )
    }
  },
  computed: {
    isDisabled() {
      if (
        (this.login.username &&
          this.login.password &&
          this.login.passcode &&
          this.login.passcode === 'communication123') ||
        this.login.passcode === '123'
      ) {
        return false
      }
      return true
    }
  },
  methods: {
    goToRoute() {
      if (this.login.passcode === 'communication123') {
        axios
          .post('auth/jwt/create/', this.login)
          .then(response => {
            localStorage.setItem('access_token', response.data.access)
            this.loggedInForEng = true
            localStorage.setItem('loggedInForEng', this.loggedInForEng)
            this.$router.replace({ name: 'eng-admin' })
          })
          .catch(error => {
            console.log(error.response)
          })
      }
    }
  }
}
</script>
<style scoped></style>
