<template>
  <v-app id="inspire">
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-title>올댓뱅크 BETA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="this.$vuetify.breakpoint.width > 960">
        <v-btn flat @click="changeRoute('search')">상품검색</v-btn>
        <v-btn flat @click="changeRoute('saving')">적금상품</v-btn>
        <v-btn flat @click="changeRoute('deposit')">예금상품</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn icon @click="changeRoute('search')">
          <v-icon>search</v-icon>
        </v-btn>
        <v-menu bottom left>
          <v-btn slot="activator" icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile @click="changeRoute('saving')">
              <v-list-tile-title>적금상품</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="changeRoute('deposit')">
              <v-list-tile-title>예금상품</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer dark height="auto">
      <v-layout column wrap primary pa-2 class="text-xs-center">
        <v-flex style="font-size: 8px;">
          <div>
            올댓뱅크는 "금융상품통합비교공시시스템(금융감독원) 금융회사 상품정보" 오픈 API 서비스를 사용한 결과입니다.
            올댓뱅크에서 제공되는 금융회사 상품정보를 복제 또는 저장하거나 전송할 수 없습니다.
          </div>
          <div>
            올댓뱅크에서 제공되는 금융회사 상품정보는 참고사항이며 오류가 발생하거나 지연될 수 있습니다.
            올댓뱅크에서 제공되는 금융회사 상품정보에 대한 법적인 책임을 지지 않습니다.
          </div>
        </v-flex>
        <v-divider class="ma-2"></v-divider>
        <v-flex class="caption">
          <span>Made By. <strong>Junhong Kim</strong></span>
        </v-flex>
      </v-layout>
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
