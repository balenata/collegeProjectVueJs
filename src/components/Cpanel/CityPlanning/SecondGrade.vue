<template>
  <div>
    <v-card outlined color="blue-grey lighten-4 py-2">
      <v-row justify="center">
        <v-btn color="blue-grey darken-4" elevation="6" large>
          <div style="color:white; margin-left:5px;">
            Second-Grade
          </div>
        </v-btn>
      </v-row>
      <br />
      <!-- BOLONYA  -->
      <v-row justify="center">
        <v-btn color="blue-grey darken-3" elevation="6">
          <div style="color:white; margin-left:5px;">
            Bolonya
          </div>
        </v-btn>
      </v-row>
      <br />
      <v-row justify="center">
        <v-col sm="6" md="5">
          <v-btn small color="blue-grey darken-2" elevation="6">
            <div style="color:white; margin-left:5px;">
              Semester 1
            </div>
          </v-btn>
          <v-row>
            <v-col md="6">
              <v-btn
                @click="sem1xwly1()"
                x-small
                color="blue-grey darken-1"
                elevation="6"
              >
                <div style="color:white; margin-left:5px;">
                  xwly 1
                </div>
              </v-btn>
            </v-col>
            <v-col md="6">
              <v-btn
                @click="sem1xwly2()"
                x-small
                color="blue-grey darken-1"
                elevation="6"
              >
                <div style="color:white; margin-left:5px;">
                  xwly 2
                </div>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col sm="6" md="5">
          <v-btn small color="blue-grey darken-2" elevation="6">
            <div style="color:white; margin-left:5px;">
              Semester 2
            </div>
          </v-btn>
          <v-row>
            <v-col md="6">
              <v-btn  @click="sem2xwly1()" x-small color="blue-grey darken-1" elevation="6">
                <div style="color:white; margin-left:5px;">
                  xwly 1
                </div>
              </v-btn>
            </v-col>
            <v-col md="6">
              <v-btn  @click="sem2xwly2()" x-small color="blue-grey darken-1" elevation="6">
                <div style="color:white; margin-left:5px;">
                  xwly 2
                </div>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- END BOLONYA  -->

      <!-- YEARS  -->
      <v-row class="mt-4" justify="center">
        <v-btn color="brown darken-3" elevation="6">
          <div style="color:white; margin-left:5px;">
            Years
          </div>
        </v-btn>
      </v-row>
      <v-row justify="center">
        <v-col sm="5" md="5">
          <v-btn @click="yearsxwly1()" small color="brown darken-1" elevation="6">
            <div style="color:white; margin-left:5px;">
              xwly 1
            </div>
          </v-btn>
        </v-col>
        <v-col sm="5" md="5">
          <v-btn @click="yearsxwly2()" small color="brown darken-1" elevation="6">
            <div style="color:white; margin-left:5px;">
              xwly 2
            </div>
          </v-btn>
        </v-col>
      </v-row>
      <!-- END YEARS   -->
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    sem1xwly1() {
      this.$router.push('g2-bolonya-sem1-xwly1')
    },
    sem1xwly2() {
      this.$router.push('g2-bolonya-sem1-xwly2')
    },
    sem2xwly1() {
      this.$router.push('g2-bolonya-sem2-xwly1')
    },
    sem2xwly2() {
      this.$router.push('g2-bolonya-sem2-xwly2')
    },
    yearsxwly1() {
      this.$router.push('g2-years-xwly1')
    },
    yearsxwly2() {
      this.$router.push('g2-years-xwly2')
    }
  }
}
</script>

<style scoped></style>
