<template>
  <v-layout
    row wrap pt-5 text-xs-center
    style="max-width:500px;margin: 0 auto;"
  >
    <v-flex xs12>
      <h1>Users2</h1>
      <p>유저를 검색해 주세요.</p>
    </v-flex>
    <v-flex xs12>
      <v-text-field
        v-model="userId"
        label="유저번호"
        placeholder="유저번호를 입력하세요."
      ></v-text-field>
      <!-- path 방식 -->
      <!-- <v-btn @click="$router.push({path: `users2/${userId}`})">검색</v-btn> -->
      <!-- name 방식 -->
      <v-btn @click="$router.push({
        name: 'users2-detail',
        params: {
          id:userId
        }  
      })">검색</v-btn>
    </v-flex>
    <v-flex xs12>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      userId: null
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next()
  },
  created() {
    console.log('created')
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    next()
  },
  destroyed() {
    console.log('destroyed')
  },
};
</script>
