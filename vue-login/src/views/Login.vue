<template>
  <v-container fill-height style="max-width: 450px">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert class="mb-3" :value="isLoginError" type="error">
          아이디와 비밀번호를 확인해주세요.
        </v-alert>
        <v-alert class="mb-3" :value="isLogin" type="success">
          로그인이 완료되었습니다.
        </v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="이메일을 입력하세요.">
            </v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="비밀번호를 입력하세요."
            >
            </v-text-field>
            <v-btn
              color="primary"
              depressed
              block
              large
              @click="login"
            >
              로그인
            </v-btn>
            <v-btn @click="test">test get</v-btn>
            <v-btn @click="testPodt">test post</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import axios from 'axios';

export default {
  date() {
    return {
      email: null,
      password: null,
    }
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    ...mapActions(["login"]),
    test() {
      axios
        .get("https://reqres.in/api/users?page=2")
        .then(res => {
          console.log('res :>> ', res);
        })
        .catch(err => {
          console.log('err :>> ', err);
        })
        .then(() => {
          //always executed
        })
    },
    testPodt() {
      axios
        .post("https://reqres.in/api/login", {
          email: "eve.holt@reqres.in",
          password: "cityslicka"
        })
        .then(res => {
          console.log('res :>> ', res);
        })
        .catch(err => {
          console.log('err :>> ', err);
        })
        .then(() => {
        })
    },
    login() {
      console.log('email :>> ', this.email);
      console.log('password :>> ', this.password);
      axios
        .post("https://reqres.in/api/login", {
          email: this.email,
          password: this.password,
        })
        .then(res => {
          console.log('res :>> ', res);
          this.$router.push({name: 'home'})
        })
        .catch(err => {
          console.log('err :>> ', err);
        })
        .then()
    }
  }
}
</script>