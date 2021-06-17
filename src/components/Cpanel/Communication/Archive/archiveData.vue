<template>
  <div>
    <v-card>
      <v-card-title>
        Studet Archive
        <v-spacer></v-spacer>
        <v-text-field
          v-model="queryParmas.search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :hide-default-footer="true"
        :headers="headers"
        :items="apiData.results"
        v-if="!loadingTable"
      >
        <template v-slot:body="props">
          <tbody>
            <tr v-for="(d, i) in props.items" :key="i">
              <td class="d-block d-sm-table-cell">{{ d.id }}</td>
              <td class="d-block d-sm-table-cell">{{ d.username }}</td>
              <td class="d-block d-sm-table-cell">{{ d.department }}</td>
              <td class="d-block d-sm-table-cell">{{ d.phone_number }}</td>
              <td
                v-if="d.bolonya_system.length > 0"
                class="d-block d-sm-table-cell"
              >
                Bolonya
              </td>
              <td v-else class="d-block d-sm-table-cell">Years</td>
              <td class="d-block d-sm-table-cell">
                <v-btn @click="openInfoDialog(d)" color="info" icon>
                  <v-icon>fas fa-info-circle</v-icon>
                </v-btn>
                <v-btn
                  @click="
                    deleteId = d.id
                    dialog1 = true
                  "
                  color="error"
                  icon
                >
                  <v-icon>fas fa-trash-alt</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
      <v-col md="2">
        <v-select
          :items="[
            { text: '50', value: 50 },
            { text: '100', value: 100 },
            { text: '150', value: 150 },
            { text: 'All', value: 50000000000000 }
          ]"
          v-model="queryParmas.page_size"
          label="Paginate"
        ></v-select>
      </v-col>
      <div class="text-center">
        <v-pagination
          :total-visible="7"
          circle
          v-if="!loadingTable"
          :length="paginateButton"
          v-model="queryParmas.page"
        ></v-pagination>
      </div>
      <!-- DELETE USER  -->
      <v-dialog v-model="dialog1" width="500">
        <v-card>
          <v-card-title class="headline error">
            Delete User
          </v-card-title>

          <v-card-text class="mt-2">
            <strong> Are you sure you want delete this user</strong>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog1 = false">
              Close
            </v-btn>
            <v-btn color="primary" text @click="DeleteUser(deleteId)">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- INFO USER -->
      <v-row justify="center">
        <v-dialog
          v-model="bolonyaDialog"
          fullscreen
          hide-overlay
          transition="slide-y-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="bolonyaDialog = false">
                <v-icon>fas fa-times</v-icon>
              </v-btn>
              <v-toolbar-title>Student Detail</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items> </v-toolbar-items>
            </v-toolbar>
            <v-card-actions>
              <v-row>
                <v-col
                  v-for="(bolonya, i) in infoData.bolonya_system"
                  :key="i"
                  cols="12"
                  md="12"
                >
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th>
                            Stage
                          </th>
                          <th>
                            Semester
                          </th>
                          <th>
                            Xwl
                          </th>
                          <th>
                            Year
                          </th>
                          <th>
                            Card
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{{ bolonya.stage }}</td>
                          <td>{{ bolonya.semester }}</td>
                          <td>{{ bolonya.xwl }}</td>
                          <td>{{ bolonya.year }}</td>
                          <td>
                            <img width="250px" :src="bolonya.img_card" alt="" />
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row justify="center">
        <v-dialog
          v-model="yearlyDialog"
          fullscreen
          hide-overlay
          transition="slide-y-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="yearlyDialog = false">
                <v-icon>fas fa-times</v-icon>
              </v-btn>
              <v-toolbar-title>Student Detail</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items> </v-toolbar-items>
            </v-toolbar>
            <v-card-actions>
              <v-row>
                <v-col
                  v-for="(years, i) in infoData.years_system"
                  :key="i"
                  cols="12"
                  md="12"
                >
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th>
                            Stage
                          </th>
                          <th>
                            Xwl
                          </th>
                          <th>
                            Year
                          </th>
                          <th>
                            Card
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{{ years.stage }}</td>
                          <td>{{ years.xwl }}</td>
                          <td>{{ years.year }}</td>
                          <td>
                            <img width="250px" :src="years.img_card" alt="" />
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      deleteId: 0,
      dialog1: false,
      bolonyaDialog: false,
      yearlyDialog: false,
      infoData: {},
      infoDialogBolonya: false,
      search: '',
      headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id'
        },
        { text: 'Username' },
        { text: 'Department' },
        { text: 'PhoneNumber' },
        { text: 'System' },
        { text: 'Actions', sortable: false }
      ],
      loadingTable: true,
      queryParmas: {
        search: '',
        page_size: 20,
        page: 1,
        g: 5,
        s: 1,
        x: 1
      },
      apiData: []
    }
  },

  computed: {
    paginateButton() {
      return Math.ceil(this.apiData.count / this.queryParmas.page_size)
    }
  },
  watch: {
    queryParmas: {
      immediate: true,
      deep: true,
      handler() {
        this.getTableData()
      }
    }
  },

  methods: {
    openInfoDialog(data) {
      this.infoData = data
      if (data.bolonya_system.length > 0) {
        this.bolonyaDialog = true
      } else {
        this.yearlyDialog = true
      }
    },
    getTableData() {
      const accesToken = localStorage.getItem('access_token')
      this.loadingTable = true
      axios
        .get('communication-student/', {
          headers: { Authorization: 'Bearer ' + accesToken },
          params: this.queryParmas
        })
        .then(res => {
          this.apiData = res.data
          this.loadingTable = false
        })
        .catch(err => {
          console.log(err.res)
        })
    },

    DeleteUser() {
      const accesToken = localStorage.getItem('access_token')
      axios
        .delete(`communication-student/${this.deleteId}/?g=5&s=1&x=1`, {
          headers: { Authorization: 'Bearer ' + accesToken }
        })
        .then(res => {
          this.dialog1 = false
          this.getTableData()
        })
    }
  }
}
</script>
<style scoped></style>
