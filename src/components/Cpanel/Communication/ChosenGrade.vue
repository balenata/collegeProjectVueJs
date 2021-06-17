<template>
  <div class="mt-16">
    <v-row justify-center>
      <v-col cols="6" sm="12" md="3" lg="3">
        <first-grade />
      </v-col>
      <v-col cols="6" sm="12" md="3" lg="3">
        <second-grade />
      </v-col>
      <v-col cols="6" sm="12" md="3" lg="3">
        <third-grade />
      </v-col>
      <v-col cols="6" sm="12" md="3" lg="3">
        <fourth-grade />
      </v-col>
    </v-row>
    <v-row class="center mt-10">
      <archive />
    </v-row>
    <v-row style="margin-top:100px;" class="center">
      <add-communication-admin />
    </v-row>
  </div>
</template>

<script>
import firstGrade from '../Communication/FirstGrade.vue'
import secondGrade from '../Communication/SecondGrade.vue'
import thirdGrade from '../Communication/ThirdGrade.vue'
import fourthGrade from '../Communication/FourthGrade.vue'
import Archive from './Archive.vue'
import AddCommunicationAdmin from './AddCommunicationAdmin.vue'

export default {
  data() {
    return {}
  },
  components: {
    firstGrade,
    secondGrade,
    thirdGrade,
    fourthGrade,
    Archive,
    AddCommunicationAdmin
  }
}
</script>

<style scoped>
.center {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
