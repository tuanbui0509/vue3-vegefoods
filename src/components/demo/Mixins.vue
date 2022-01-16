<template>
  <h1>Example of Mixins</h1>
</template>

<script>
// define a mixin object
const myMixin = {
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    }
  }
}
export default {
  mixins: [
    myMixin
  ]
}
</script>

