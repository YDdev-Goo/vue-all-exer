<template>
  <div>
    <h1>All Users ({{ allUsers.length }}) </h1>
    <p>store.getters 방식으로 사용하기</p>
    <h1>Seoul Users: {{ $store.getters.countOfSeoul }} ({{ $store.getters.percentOfSeoul }}%) </h1>
    <p>mapGetters 방식으로 사용하기</p>
    <h1>서울 사용자1: {{ countOfSeoul }} ({{ percentOfSeoul }}%)</h1>
    <v-list two-line>
      <v-list-tile 
        v-for="(user, index) in $store.state.allUsers"
        :key="index"
        avatar
      >
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title>id:#{{index}} / {{user.address}} 거주</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </div>
</template>

<script>
import { EventBus } from '@/main.js'
import { mapState, mapGetters } from 'vuex'

  export default {
    computed: {
      // array 방식
      ...mapGetters(['countOfSeoul', 'percentOfSeoul']),

      // 객체 방식
      // ...mapGetters({
      //   seouls: 'countOfSeoul',
      //   percent: 'percentOfSeoul',
      // })
      ...mapState(['allUsers'])
    },
    mounted() {
      EventBus.$on('signUp', users => {
        this.$store.state.allUsers.push(users)
      })
    }
  }
</script>
