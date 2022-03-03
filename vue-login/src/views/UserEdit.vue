<template>
  <div>
    <h1>사용자 정보 수정</h1>
    <p>아이디 <input type="text" v-model="user.id"></p>
    <p>이름 <input type="text" v-model="user.name"></p>
    <p>휴대폰 <input type="text" v-model="user.phone"></p>
    <v-btn @click="getUser">사용자 불러오기</v-btn>
    <v-btn @click="cancel">취소</v-btn>
    <v-btn @click="completed">완료</v-btn>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {

    }
  },
  computed: {
    user() {
      return this.$route.params.user;
    }
  },
  methods: {
    getUser() {
      axios
        .get("https://reqres.in/api/users/1")
        .then( (res) => {
          this.user.id = res.data.data.id
          this.user.name = res.data.data.last_name + ' - ' + res.data.data.first_name
          this.user.phone = res.data.data.email
        })
        .catch( (err) => {
          console.log('err :>> ', err)
        })
        .then( () => {

        })
    },
    cancel() {
      return this.$router.push({name: 'home'})
    },
    completed() {
      return this.$router.push({ name: 'user-detail', params: { user: this.user } })
    }
  },
}
</script>
