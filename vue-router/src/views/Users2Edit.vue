<template>
  <v-layout
    row wrap pt-5 text-xs-center
    style="max-width:500px;margin: 0 auto;"
  >
    <v-flex xs12>
      <h1>Users2Edit</h1>
      {{ userId }}
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$route.params.id
    }
  }
};
</script>
