<template>
  <div>
    <v-row class="mt-6" justify="center">
      <v-btn
        v-model="addstudent"
        @click="addStudent()"
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
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="desserts" :search="search">
        <template v-slot:body="props">
          <tbody>
            <tr v-for="(d, i) in props.items" :key="i">
              <td class="d-block d-sm-table-cell">{{ d.id }}</td>
              <td class="d-block d-sm-table-cell" @click="viewImage(d.image)">
                <img :src="d.image" width="100" alt="Image" />
              </td>
              <td class="d-block d-sm-table-cell">{{ d.username }}</td>
              <td class="d-block d-sm-table-cell">{{ d.department }}</td>
              <td class="d-block d-sm-table-cell">{{ d.stage }}</td>
              <td class="d-block d-sm-table-cell">{{ d.year }}</td>
              <td class="d-block d-sm-table-cell">{{ d.phonenumber }}</td>
              <td class="d-block d-sm-table-cell">
                <v-btn @click="editUser()" color="info" icon>
                  <v-icon>fas fa-user-edit</v-icon>
                </v-btn>
                <v-btn @click="deleteUser(d.id)" color="error" icon>
                  <v-icon>fas fa-trash-alt</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
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
                <v-btn dark text @click="addstudent = false">
                  Save
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-card-actions>
              <v-row class="mx-4">
                <v-col md="6">
                  <v-col cols="12" md="8">
                    <v-text-field
                      v-model="form.username"
                      label="username"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-text-field
                      v-model="form.department"
                      label="department"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-text-field
                      v-model="form.stage"
                      label="stage"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-text-field
                      v-model="form.password"
                      label="Password"
                      type="password"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-text-field
                      v-model="form.yaer"
                      label="year"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-text-field
                      v-model="form.mobileNumber"
                      label="mobileNumber"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-file-input
                      accept="image/*"
                      label="add card"
                      multiple
                      chips
                      v-model="files"
                      @change="addFiles"
                    ></v-file-input>
                    <v-row>
                      <v-col sm="4" v-for="(file, f) in files" :key="f">
                        {{ file.name }}
                        <img
                          width="400px"
                          :ref="'file'"
                          src="//placehold.it/400/99cc77"
                          class="img-fluid"
                          :title="'file' + f"
                        />
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
      <!-- iMAGE OPEN ON CLICK ROW  -->
      <v-dialog v-model="dialog" width="800" transition="slide-y-transition">
        <v-card>
          <v-card-text class="pt-5">
            <img :src="imagePath" width="100%" alt="Image" class="rounded-lg" />
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
            <v-btn color="primary" text @click="dialog1 = false">
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
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="form.username"
                      label="username"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="form.department"
                      label="department"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="form.stage"
                      label="stage"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.password"
                      label="Password"
                      type="password"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.yaer"
                      label="year"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.mobileNumber"
                      label="mobileNumber"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-file-input
                      accept="image/*"
                      label="update card"
                      multiple
                      chips
                      v-model="files1"
                      @change="updateFiles"
                    ></v-file-input>
                    <v-row>
                      <v-col sm="4" v-for="(file, f) in files1" :key="f">
                        {{ file.name }}
                        <img
                          width="400px"
                          :ref="'file'"
                          src="//placehold.it/400/99cc77"
                          class="img-fluid"
                          :title="'file' + f"
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog2 = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog2 = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import generatepassword from '@/components/Cpanel/GeneratePassword.vue'
export default {
  components: {
    generatepassword
  },
  data() {
    return {
      addstudent: false,
      dialog: false,
      dialog1: false,
      dialog2: false,
      search: '',
      imagePath: null,
      files: [],
      readers: [],
      files1: [],
      readers1: [],
      form: {},
      headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id'
        },
        { text: 'Image', value: 'image' },
        { text: 'Username', value: 'username' },
        { text: 'Department', value: 'department' },
        { text: 'Stage', value: 'stage' },
        { text: 'Year', value: 'year' },
        { text: 'PhoneNumber', value: 'phonenumber' },
        { text: 'Actions', value: '', sortable: false }
      ],
      desserts: [
        {
          id: '1',
          image: 'https://wallpaperaccess.com/full/30100.jpg',
          username: '6.0',
          department: 24,
          stage: 4.0,
          year: '1%',
          phonenumber: 123
        },
        {
          id: '2',
          image: 'https://wallpaperaccess.com/full/30100.jpg',
          username: '9.0',
          department: 37,
          stage: 4.3,
          year: '1%',
          phonenumber: 123
        },
        {
          id: '3',
          image: 'https://wallpaperaccess.com/full/30100.jpg',
          username: 16.0,
          department: 23,
          stage: 6.0,
          year: '7%',
          phonenumber: 123
        }
      ]
    }
  },

  methods: {
    addStudent() {
      this.addstudent = true
      this.files1 = []
    },
    viewImage(image) {
      this.imagePath = image
      this.dialog = true
    },
    deleteUser(userDelete) {
      this.dialog1 = true
    },
    editUser() {
      this.dialog2 = true
      this.form = {}
      this.files1 = []
    },
    addFiles() {
      console.log('files', this.files)
      this.files.forEach((file, f) => {
        this.readers[f] = new FileReader()
        this.readers[f].onloadend = e => {
          const fileData = this.readers[f].result
          const imgRef = this.$refs.file[f]
          imgRef.src = fileData
          console.log(fileData)
          // send to server here...
        }

        this.readers[f].readAsDataURL(this.files[f])
      })
    },
    updateFiles() {
      console.log('files', this.files1)
      this.files1.forEach((file, f) => {
        this.readers1[f] = new FileReader()
        this.readers1[f].onloadend = e => {
          const fileData = this.readers1[f].result
          const imgRef = this.$refs.file[f]
          imgRef.src = fileData
          console.log(fileData)
          // send to server here...
        }

        this.readers1[f].readAsDataURL(this.files1[f])
      })
    }
  }
}
</script>
<style  scoped></style>
