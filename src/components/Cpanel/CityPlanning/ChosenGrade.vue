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
  </div>
</template>

<script>
import firstGrade from '../CityPlanning/FirstGrade.vue'
import secondGrade from '../CityPlanning/SecondGrade.vue'
import thirdGrade from '../CityPlanning/ThirdGrade.vue'
import fourthGrade from '../CityPlanning/FourthGrade.vue'

export default {
  data() {
    return {}
  },
  components: {
    firstGrade,
    secondGrade,
    thirdGrade,
    fourthGrade
  }
}
</script>

<style scoped></style>
