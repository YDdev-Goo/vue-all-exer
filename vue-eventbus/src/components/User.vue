<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <br />
    <br />
    <br />
    <v-layout>
      <v-flex>
        <user-detail
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
        >
        </user-detail>
      </v-flex>
      <v-flex>
        <user-edit
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          @child="parents"
        >
        </user-edit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    UserDetail,
    UserEdit,
  },
  data() {
    return {
      name: "내이름1",
      address: "seoul",
      phone: "010-1234-1234",
      hasDog: true,
    };
  },
  methods: {
    parents(user) {
      this.name = user.name;
      this.address = user.address;
      this.phone = user.phone;
      this.hasDog = user.hasDog;
      console.log("부모가 받았어");
    },
  },
};
</script>

<style></style>
