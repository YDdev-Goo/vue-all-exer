<template>
  <div>
    <h1>Users</h1>
    <p>유저 번호는 {{ userId }} 이고, 이름은 {{ name }} 입니다.</p>
    <p>카테고리: {{ $route.query.category }}</p>
    <p>그룹: {{ $route.query.group }}</p>

    {{ $route.params }}
    {{ $route.query }}
  </div>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$route.params.userId;
    },
    name() {
      return this.$route.params.name;
    },
  },
  created() {
    // console.log("router", this.$router);
    // console.log("route", this.$route);
  },
};
</script>
