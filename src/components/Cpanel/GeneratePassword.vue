<template>
  <div id="app">
    <div  class="mt-2">
      <input
        style="width:100%; border: 1px solid black;"
        id="g-password"
        type="text"
        ref="input"
        v-bind:value="password"
      />
      <div class="mt-2">
        <v-btn
          class="mr-2"
          type="submit"
          small
          v-on:click="onGenerate"
          color="primary"
          >Generate New Password</v-btn
        >
        <v-btn small @click="copyText()" color="success">Copy Text</v-btn>
      </div>

      <div class="options">
        <h2>Options</h2>
        <div class="g-row g-m-15">
          <label for="g-length" class="g-l-length">Pass Length</label>
        </div>
        <div class="">
          <input class="" type="range" min="3" max="30" v-model="gLength" />
          <input class="form-control w-auto" type="number" v-model="gLength" />
        </div>
        <div class="">
          <label class="">Pass Complexity</label>
        </div>
        <div class="form-check" v-for="(type, i) in characters" :key="i">
          <input
            class="form-check-input"
            type="radio"
            v-bind:checked="type.checked"
            v-on:click="type.checked = !type.checked"
          />
          <label class="ml-2">{{ type.name }}</label>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      generateText: 'G',
      characters: [
        {
          name: 'Lowercase',
          value: 'abcdefghijklmnopqrstuvwxyz',
          checked: false
        },
        {
          name: 'Uppercase',
          value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          checked: true
        },
        {
          name: 'Numbers',
          value: '0123456789',
          checked: true
        },
        {
          name: 'Special Characters',
          value: '_-+=)(*&^%$#@!`~',
          checked: false
        }
      ],
      password: '',
      gLength: 9
    }
  },
  methods: {
    onMouseEnterGenerateBtn: function() {
      this.generateText = 'Generate'
    },
    onMouseLeaveGenerateBtn: function() {
      this.generateText = 'G'
    },
    copyText() {
      var vm = this
      var copyText = vm.$refs.input
      copyText.select()
      document.execCommand('copy')
      // alert('Copied the text:' + copyText.value)
    },
    onGenerate: function() {
      let result = ''
      let charactersVal = ''
      for (var j = 0; j < this.characters.length; j++) {
        if (this.characters[j].checked) {
          charactersVal += this.characters[j].value
        }
      }
      for (var i = 0; i < this.gLength; i++) {
        result += charactersVal.charAt(
          Math.floor(Math.random() * charactersVal.length)
        )
      }
      this.password = result
    }
  }
}
</script>

<style scoped>
.user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
</style>
