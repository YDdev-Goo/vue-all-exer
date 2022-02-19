<template>
  <div>
    <h3>회원 정보 수정</h3>
    <p>수정사항</p>
    <v-text-field label="이름" v-model="user.name"></v-text-field>
    <v-text-field label="주소" v-model="user.address"></v-text-field>
    <v-text-field label="전화번호" v-model="user.phone"></v-text-field>
    <v-radio-group v-model="user.hasDog">
      <v-radio label="반려견 있음" :value="true"></v-radio>
      <v-radio label="반려견 없음" :value="false"></v-radio>
    </v-radio-group>
    <v-btn @click="changeUser">수정 완료</v-btn>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: ["name", "address", "phone", "hasDog"],
  data() {
    return {
      user: {
        name: String,
        address: String,
        phone: String,
        hasDog: Boolean,
      },
    };
  },
  created() {
    this.user.name = this.name;
    this.user.address = this.address;
    this.user.phone = this.phone;
    this.user.hasDog = this.hasDog;
  },
  methods: {
    changeUser() {
      this.$emit("child", this.user);
      // 이벤트 버스 사용 (컴포넌트 간의 데이터 통신)
      // eventBus.$emit("userWasEdited", new Date());

      // 이벤트 버스를 main.js에 전역 선언 후 사용
      // eventBus.userWasEdited(new Date().toLocaleDateString());
      let dt = new Date();
      let dtMonth = dt.getMonth() + 1;
      if (dtMonth < 10) {
        dtMonth = "0" + dtMonth;
      }
      let str = dt.getFullYear() + "-" + dtMonth + "-" + dt.getDate();
      eventBus.userWasEdited(str);
      console.log("this.user :>> ", this.user);
    },
  },
};
</script>

<style></style>
