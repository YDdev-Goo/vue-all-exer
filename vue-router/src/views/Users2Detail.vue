<template>
  <v-layout
    row wrap pt-5 text-xs-center
    style="max-width:500px;margin: 0 auto;"
  >
    <v-flex xs12>
      <h1>Users2Detail</h1>
      <p>유저 번호: {{ userId }}</p>
      <v-btn @click="edit">수정</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$route.params.id
    }
  },
  methods: {
    edit() {
      this.$router.push({name: 'users2-edit'})
    }
  }
};
</script>
