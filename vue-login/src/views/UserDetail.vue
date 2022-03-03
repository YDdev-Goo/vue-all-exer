<template>
  <div>
    <h1>사용자 정보</h1>
    <p>아이디: {{ user.id }}</p>
    <p>이름: {{ user.name }}</p>
    <p>휴대폰: {{ user.phone }}</p>
    <v-btn @click="edit">사용자 정보 수정</v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$route.params.user;
    }
  },
  methods: {
    edit() {
      return this.$router.push({name: 'user-edit', params: { user: this.user } })
    }
  },
}
</script>
