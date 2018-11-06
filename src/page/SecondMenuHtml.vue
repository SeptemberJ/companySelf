<template>
  <div class="SecondMenuHtml">
    {{secondMenuTit}}SecondMenuHtml
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      secondMenuTit: ''
    }
  },
  created () {
    this.secondMenuTit = this.$router.history.current.params.id
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
