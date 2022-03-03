<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
    <router-link :to="{ name: 'user-detail', params: { user: user } }">사용자 정보 보기</router-link>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: Number,
        name: String,
        phone: String,
      },
    }
  },
  created() {
    this.user.id = 2,
    this.user.name = "둘리",
    this.user.phone = "010-1234-5678"
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
