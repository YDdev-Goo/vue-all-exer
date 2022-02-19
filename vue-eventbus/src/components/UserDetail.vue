<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 정보를 확인합시다.</h3>
    <p>상세사항</p>
    <v-list dense>
      <p>이름: {{ name }}</p>
      <p>주소: {{ address }}</p>
      <p>전화번호: {{ phone }}</p>
      <p>반려견유무: {{ hasDog }}</p>
      <p>수정일자: {{ editedDate }}</p>
    </v-list>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data() {
    return {
      editedDate: null,
    };
  },
  props: ["name", "address", "phone", "hasDog"],
  computed: {
    hasDogKr() {
      return this.hasDog === true ? "있음" : "없음";
    },
  },
  created() {
    // 컴포넌트 간의 데이터 통신
    eventBus.$on("userWasEdited", (date) => {
      this.editedDate = date;
    });
  },
};
</script>

<style></style>
