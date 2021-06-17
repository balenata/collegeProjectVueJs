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
import firstGrade from '../OilandEnergy/FirstGrade.vue'
import secondGrade from '../OilandEnergy/SecondGrade.vue'
import thirdGrade from '../OilandEnergy/ThirdGrade.vue'
import fourthGrade from '../OilandEnergy/FourthGrade.vue'

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
