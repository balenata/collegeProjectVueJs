<template>
  <div class="mt-16">
    <v-row justify="center" class="ml-3">
      <!-- COMMUNICATION  -->
      <v-col cols="12" sm="6" md="2" lg="2">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="blue-grey darken-2"
              elevation="6"
              large
            >
              <v-icon color="white">fas fa-broadcast-tower</v-icon>
              <div style="color:white; margin-left:5px;">
                Communication
              </div>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">User Permission</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="communication.username"
                      label="Legal Username"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="communication.password"
                      :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
                      :type="show ? 'text' : 'password'"
                      @click:append="show = !show"
                      label="Password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-grey darken-4" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn
                @click="gotCommunicationApp()"
                color="blue-grey darken-4"
                text
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <!-- MECHANICAL  -->
      <v-col cols="12" sm="6" md="2" lg="2">
        <v-dialog v-model="dialog0" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="blue-grey darken-2"
              elevation="6"
              large
            >
              <v-icon color="white">fas fa-cogs</v-icon>
              <div style="color:white; margin-left:5px;">
                Mechanical
              </div>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">User Permission</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Legal Username"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-grey darken-4" text @click="dialog0 = false">
                Close
              </v-btn>
              <v-btn
                @click="gotoMechanicalApp()"
                color="blue-grey darken-4"
                text
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <!-- CITY PLANNING  -->
      <v-col cols="12" sm="6" md="2" lg="2">
        <v-dialog v-model="dialog1" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="blue-grey darken-2"
              elevation="6"
              large
            >
              <v-icon color="white">fas fa-city</v-icon>
              <div style="color:white; margin-left:5px;">
                City Planning
              </div>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">User Permission</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Legal Username"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-grey darken-4" text @click="dialog1 = false">
                Close
              </v-btn>
              <v-btn
                @click="gotoCityPlanningApp()"
                color="blue-grey darken-4"
                text
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <!-- OIL AND ENERGY  -->
      <v-col cols="12" sm="6" md="2" lg="2">
        <v-dialog v-model="dialog2" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="blue-grey darken-2"
              elevation="6"
              large
            >
              <v-icon color="white">fas fa-gas-pump</v-icon>
              <div style="color:white; margin-left:5px;">
                Oil and Energy
              </div>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">User Permission</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Legal Username"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-grey darken-4" text @click="dialog2 = false">
                Close
              </v-btn>
              <v-btn
                @click="gotoOilandEnergyApp()"
                color="blue-grey darken-4"
                text
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <!-- ELECTRICAL  -->
      <v-col cols="12" sm="6" md="2" lg="2">
        <v-dialog v-model="dialog3" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="blue-grey darken-2"
              elevation="6"
              large
            >
              <v-icon color="white">fas fa-lightbulb</v-icon>
              <div style="color:white; margin-left:5px;">
                Electrical
              </div>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">User Permission</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Legal Username"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-grey darken-4" text @click="dialog3 = false">
                Close
              </v-btn>
              <v-btn
                @click="gotoElectricalApp()"
                color="blue-grey darken-4"
                text
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialog0: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      show: false,
      communication: {},
      loggedInForCommunication: localStorage.setItem(
        'loggedInForCommunication',
        false
      ),
      communicationAdminData: []
    }
  },
  methods: {
    gotCommunicationApp() {
      if (
        this.communication.username === 'communicationadmin' &&
        this.communication.password === 'communication1010'
      ) {
        this.loggedInForCommunication = true
        localStorage.setItem(
          'loggedInForCommunication',
          this.loggedInForCommunication
        )
        this.$router.push({ name: 'communication' })
      }
    },
    gotoMechanicalApp() {
      this.$router.push({ name: 'mechanical' })
    },
    gotoCityPlanningApp() {
      this.$router.push({ name: 'city-planning' })
    },
    gotoOilandEnergyApp() {
      this.$router.push({ name: 'oil-and-energy' })
    },
    gotoElectricalApp() {
      this.$router.push({ name: 'electrical' })
    }
  }
}
</script>

<style lang="scss" scoped></style>
