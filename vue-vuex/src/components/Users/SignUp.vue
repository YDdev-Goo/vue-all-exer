<template>
  <div>
    <h1>SignUp</h1>
    <v-text-field
      label="아이디"
      v-model="userId"
    ></v-text-field>
    <v-text-field
      label="비밀번호"
      type="password"
      v-model="password"
    ></v-text-field>
    <v-text-field
      label="이름"
      v-model="name"
    ></v-text-field>
    <v-text-field
      label="주소"
      v-model="address"
    ></v-text-field>
    <v-text-field
      label="이미지"
      v-model="src"
    ></v-text-field>
    <v-btn @click="signUp">회원가입</v-btn>
  </div>
</template>

<script>
import { EventBus } from '@/main.js'
import { mapMutations, mapActions } from 'vuex'

  export default {
    data() {
      return {
        userId: null,
        password: null,
        name: null,
        address: null,
        src: null
      }
    },
    methods: {
      // mutation을 commit 방식으로 사용하기 위해 주석 처리
      // ...mapMutations(['addUsers']),
      ...mapActions(['addUsers2']),

      signUp() {
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
        // eventBus 방식
        // EventBus.$emit('signUp', userObj)
        
        // ...mapMutations 방식
        // this.addUsers(userObj) // 이 userObj가 store mutations의 payload가 된다

        // mutations의 commit 방식
        // this.$store.commit('addUsers', userObj)

        // ...mapActions 방식
        this.addUsers2(userObj)

        // action의 dispatch 방식
        // this.$store.dispatch('addUsers2', userObj)

        // form 클리어
        this.clearForm()
      },
      clearForm() {
        this.userId = null,
        this.password = null,
        this.name = null,
        this.address = null,
        this.src = null
      }
    }
  }
</script>