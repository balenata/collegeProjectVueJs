<template>
  <div>
    <v-row class="mt-6" justify="center">
      <v-btn
        v-model="addstudent"
        @click="addstudent = true"
        class="rounded-lg"
        color="blue-grey darken-4 "
        elevation="4"
        ><v-icon class="mr-2" color="white">fas fa-user-plus</v-icon>
        <div style="color:white;">
          Add Student
        </div>
      </v-btn>
    </v-row>
    <v-card>
      <v-card-title>
        Studet Detail
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
              <td class="d-block d-sm-table-cell">
                <v-btn
                  @click="
                    addCardDialog = true
                    addCardId = d
                  "
                  color="black"
                  icon
                >
                  <v-icon>fas fa-id-card</v-icon>
                </v-btn>
                <v-btn
                  @click="
                    dialog2 = true
                    updateId = d
                  "
                  color="warning"
                  icon
                >
                  <v-icon>fas fa-user-edit</v-icon>
                </v-btn>
                <v-btn
                  @click="
                    infoId = d
                    info = true
                  "
                  color="info"
                  icon
                >
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

                <v-btn
                  @click="
                    levelId = d
                    levelUpDialog = true
                  "
                  color="dark"
                  icon
                >
                  <v-icon>fas fa-arrow-up</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
      <v-col md="2">
        <v-select
          :items="[
            { text: '30', value: 30 },
            { text: '45', value: 45 },
            { text: '60', value: 60 },
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
      <!-- ADD STUDENT  -->
      <v-row justify="center">
        <v-dialog
          v-model="addstudent"
          fullscreen
          hide-overlay
          transition="slide-y-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="addstudent = false">
                <v-icon>fas fa-times</v-icon>
              </v-btn>
              <v-toolbar-title>Add Student</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="AddStudent()">
                  Save
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-card-actions>
              <v-row class="mx-4">
                <v-col md="6">
                  <v-col cols="12" md="8">
                    <v-text-field
                      v-model="username"
                      label="username"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-text-field
                      label="Password"
                      v-model="password"
                      :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
                      :type="show ? 'text' : 'password'"
                      @click:append="show = !show"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-text-field v-model="Addyear" label="year"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-text-field
                      v-model="phone_number"
                      label="mobileNumber"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-file-input
                      accept="image/*"
                      label="Select files"
                      chips
                      v-model="files"
                      @change="addFiles"
                    ></v-file-input>
                    <v-row v-if="files !== null">
                      <v-col sm="4">
                        {{ files.name }}
                        <img width="250" ref="file" :src="imagePrev" />
                      </v-col>
                    </v-row>
                  </v-col>
                </v-col>
                <v-col cols="12" md="4">
                  <generatepassword />
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <!-- ADD CARD STUDENT  -->
      <v-row justify="center">
        <v-dialog
          v-model="addCardDialog"
          max-width="600"
          hide-overlay
          transition="slide-y-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="addCardDialog = false">
                <v-icon>fas fa-times</v-icon>
              </v-btn>
              <v-toolbar-title>Add Card</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="AddCard()">
                  Save
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-card-actions>
              <v-row class="mx-4">
                <v-col md="12">
                  <v-col cols="12" md="12">
                    <v-text-field v-model="year" label="year"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-file-input
                      accept="image/*"
                      label="Select files"
                      chips
                      v-model="files"
                      @change="addFiles"
                    ></v-file-input>
                    <v-row v-if="files !== null">
                      <v-col sm="4">
                        {{ files.name }}
                        <img width="250" ref="file" :src="imagePrev" />
                      </v-col>
                    </v-row>
                  </v-col>
                </v-col>
                <v-col cols="12" md="4"> </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
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
      <!-- EDIT USER  -->
      <v-row justify="center">
        <v-dialog v-model="dialog2" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="updateId.username"
                      label="username"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="UpdatePassword"
                      label="Password"
                      type="password"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="updateId.phone_number"
                      label="mobileNumber"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12"> </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog2 = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="UpdateUser(updateId)">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <!-- INFO USER -->
      <v-row justify="center">
        <v-dialog
          v-model="info"
          fullscreen
          hide-overlay
          transition="slide-y-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="info = false">
                <v-icon>fas fa-times</v-icon>
              </v-btn>
              <v-toolbar-title>Student Detail</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items> </v-toolbar-items>
            </v-toolbar>
            <v-card-actions>
              <v-row>
                <v-col
                  v-for="(years, i) in infoId.years_system"
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
                          <td>
                            <v-btn
                              @click="
                                infoDetailId = years
                                infoDialogEdit = true
                              "
                              small
                              color="warning"
                              >Edit</v-btn
                            >
                          </td>
                          <td>
                            <v-btn
                              @click="
                                infoDetailId = years
                                infoDialogDelete = true
                              "
                              small
                              color="error"
                              >Delete</v-btn
                            >
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
        <!-- EDIT INFO  -->
        <v-dialog
          v-model="infoDialogEdit"
          :overlay="false"
          width="500px"
          transition="dialog-transition"
        >
          <v-card>
            <v-card-title>
              <span class="headline">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="infoDetailId.year"
                    label="year"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-file-input v-model="infoImage" chips></v-file-input>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="infoDialogEdit = false">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="UpdateInfo(infoDetailId)"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- INFO DELETE  -->
        <v-dialog v-model="infoDialogDelete" width="500">
          <v-card>
            <v-card-title class="headline error">
              Delete Information
            </v-card-title>

            <v-card-text class="mt-2">
              <strong> Are you sure you want delete this Information</strong>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="infoDialogDelete = false">
                Close
              </v-btn>
              <v-btn color="primary" text @click="DeleteInfo(infoDetailId)">
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- LEVELUP USER  -->
      <v-row justify="center">
        <v-dialog v-model="levelUpDialog" max-width="450" max-height="350">
          <v-card style="overflow-x: hidden;">
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="levelUpDialog = false">
                <v-icon>fas fa-times</v-icon>
              </v-btn>
              <v-toolbar-title>Move Student </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items> </v-toolbar-items>
            </v-toolbar>
            <v-card-actions>
              <v-row>
                <v-col cols="12" md="6">
                  Move to:
                  <v-btn @click="Failed()" color="grey">Xwly 2</v-btn>
                </v-col>
                <v-col cols="12" md="6">
                  Move to:
                  <v-btn @click="Passed()" color="grey">archive</v-btn>
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
import generatepassword from '@/components/Cpanel/GeneratePassword.vue'
export default {
  components: {
    generatepassword
  },
  data() {
    return {
      addstudent: false,
      username: '',
      password: '',
      phone_number: '',
      Addyear: '',

      addCardDialog: false,
      addCardId: 0,
      files: null,
      imagePrev: '',
      year: '',

      dialog2: false,
      updateId: 0,
      UpdatePassword: '',
      show: false,

      deleteId: 0,
      dialog1: false,

      infoId: 0,
      info: false,
      infoDialogEdit: false,
      infoDialogDelete: false,
      infoYear: '',
      infoImage: null,
      infoDetailId: 0,

      levelUpDialog: false,
      levelId: 0,

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
        { text: 'Actions', sortable: false }
      ],
      loadingTable: true,
      queryParmas: {
        search: '',
        page_size: 20,
        page: 1,
        g: 4,
        s: 0,
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
    AddStudent() {
      const accesToken = localStorage.getItem('access_token')
      const fd = new FormData()
      fd.append('username', this.username)
      fd.append('password', this.password)
      fd.append('phone_number', this.phone_number)
      fd.append('current_stage', 4)
      fd.append('current_semester', 0)
      fd.append('current_xwl', 1)
      fd.append('department', 'communication')
      fd.append('stage', 4)
      fd.append('xwl', 1)
      fd.append('is_bolonya', '2')
      fd.append('year', this.Addyear)
      fd.append('img', this.files)
      axios
        .post('communication-student/', fd, {
          headers: { Authorization: 'Bearer ' + accesToken }
        })
        .then(() => {
          this.addstudent = false
          this.getTableData()
          location.reload()
        })
    },

    AddCard() {
      const accesToken = localStorage.getItem('access_token')
      const fd = new FormData()
      fd.append('stage', 4)
      fd.append('xwl', 1)
      fd.append('is_bolonya', '2')
      fd.append('year', this.year)
      fd.append('img_card', this.files)
      fd.append('communication_student', this.addCardId.id)
      axios
        .post('years-communication/', fd, {
          headers: { Authorization: 'Bearer ' + accesToken }
        })
        .then(() => {
          this.addCardDialog = false
          this.getTableData()
        })
    },

    UpdateUser(data) {
      const accesToken = localStorage.getItem('access_token')
      const fs = new FormData()
      fs.append('username', data.username)
      fs.append('password', this.UpdatePassword)
      fs.append('phone_number', data.phone_number)
      fs.append('department', 'communication')
      fs.append('current_stage', 4)
      fs.append('current_semester', 0)
      fs.append('current_xwl', 1)
      axios
        .put(`communication-student/${this.updateId.id}/?g=4&s=0&x=1`, fs, {
          headers: { Authorization: 'Bearer ' + accesToken }
        })
        .then(() => {
          this.dialog2 = false
          this.getTableData()
        })
    },

    DeleteUser() {
      const accesToken = localStorage.getItem('access_token')
      axios
        .delete(`communication-student/${this.deleteId}/?g=4&s=0&x=1`, {
          headers: { Authorization: 'Bearer ' + accesToken }
        })
        .then(res => {
          this.dialog1 = false
          this.getTableData()
        })
    },

    UpdateInfo(data) {
      const accesToken = localStorage.getItem('access_token')
      const fb = new FormData()
      fb.append('year', data.year)
      fb.append('xwl', Number(data.xwl))
      if (this.infoImage !== null) {
        fb.append('img_card', this.infoImage)
      }
      fb.append('stage', Number(data.stage))
      axios
        .put(`years-communication/${data.id}/`, fb, {
          headers: { Authorization: 'Bearer ' + accesToken }
        })
        .then(() => {
          this.infoDialogEdit = false
          this.getTableData()
          location.reload()
        })
    },

    DeleteInfo(data) {
      const accesToken = localStorage.getItem('access_token')
      axios
        .delete(`years-communication/${data.id}/`, {
          headers: { Authorization: 'Bearer ' + accesToken }
        })
        .then(() => {
          this.infoDialogDelete = false
          this.getTableData()
        })
    },

    addFiles() {
      var fileReader = new FileReader()
      fileReader.readAsDataURL(this.files)
      fileReader.onload = e => {
        this.imagePrev = e.target.result
      }
    },

    Failed() {
      const accesToken = localStorage.getItem('access_token')
      const fp = {
        current_stage: 4,
        current_semester: 0,
        current_xwl: 2,
        username: this.levelId.username,
        department: this.levelId.department,
        phone_number: this.levelId.phone_number,
        password: this.levelId.password
      }
      axios
        .put(`communication-student/${this.levelId.id}/`, fp, {
          headers: { Authorization: 'Bearer ' + accesToken }
        })
        .then(() => {
          this.levelUpDialog = false
          this.getTableData()
        })
    },

    Passed() {
      const accesToken = localStorage.getItem('access_token')
      const fn = {
        current_stage: 5,
        current_semester: 1,
        current_xwl: 1,
        username: this.levelId.username,
        department: this.levelId.department,
        phone_number: this.levelId.phone_number,
        password: this.levelId.password
      }
      axios
        .put(`communication-student/${this.levelId.id}/`, fn, {
          headers: { Authorization: 'Bearer ' + accesToken }
        })
        .then(() => {
          this.levelUpDialog = false
          this.getTableData()
        })
    }
  }
}
</script>
<style scoped></style>
