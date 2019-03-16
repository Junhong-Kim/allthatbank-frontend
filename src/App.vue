<template>
  <v-app id="inspire">
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-title>올댓뱅크 BETA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="changeRoute('search')">상품검색</v-btn>
        <v-btn flat @click="changeRoute('saving')">적금상품</v-btn>
        <v-btn flat @click="changeRoute('deposit')">예금상품</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="primary" app>
      <span class="white--text">&copy; Junhong-Kim</span>
    </v-footer>
  </v-app>
</template>

<script>
import Constant from './constant'

export default {
  created () {
    this.init()
  },
  methods: {
    init () {
      this.$store.dispatch(Constant.SET_BANK_LIST)
    },
    changeRoute (pathName) {
      this.$router.push({name: pathName})
    }
  }
}
</script>
