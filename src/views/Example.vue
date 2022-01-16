<template>
  <MyMixins />

  <input type="date" v-model="birthdate" style="{marginTop: 100}"/>
  <!-- <div id="v-model-basic" class="demo">
  <input v-model="message" placeholder="edit me" />
  <p>Message is: {{ message }}</p>
</div> -->
</template>

<script>

import MyMixins from '../components/demo/Mixins.vue'
export default {
  components: [MyMixins],
  created() {

  },
  data() {
    return {
      birthdate: "11/23/1988",
      message: ''
    }
  }
  
}
</script>
