<template>
  <v-container>
    <h1>Home</h1>
    <h1>모든유저: {{ $store.getters.allUsersCount }}</h1>
    <h1>서울사람(getters 사용): {{ $store.getters.countOfSeoul }}명 ({{ $store.getters.percentOfSeoul }}%)</h1>
    <h1>서울사람(mapGetters 사용): {{ seouls }}명 ({{ percents }}%)</h1>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // mapGetters를 객체 방식으로 사용
    ...mapGetters({
      seouls: 'countOfSeoul',
      percents: 'percentOfSeoul'
    })
  }
}
</script>
