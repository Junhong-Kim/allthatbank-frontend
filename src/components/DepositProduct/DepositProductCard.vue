<template>
  <v-card style="cursor: pointer;">
    <v-container mb-3>
      <v-layout row wrap>
        <v-layout column>
          <v-flex>
            <span class="grey--text">은행명</span>
          </v-flex>
          <v-flex>
            <span class="headline">금융상품명</span>
          </v-flex>
          <v-flex>
            <span class="caption">영업점 | 인터넷 | 스마트폰</span>
          </v-flex>
          <v-flex>
            <v-layout row style="padding-top: 10px;">
              <span style="padding-right: 5px;"><b>기본금리</b></span>
              <span>0.00%</span>
              <span>&nbsp;~&nbsp;</span>
              <span>0.00%</span>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-layout row style="padding-top: 10px;">
              <span style="padding-right: 5px;"><b>우대금리</b></span>
              <span>0.00%</span>
              <span>&nbsp;~&nbsp;</span>
              <span>0.00%</span>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-spacer></v-spacer>
        <v-layout column v-if="this.$vuetify.breakpoint.width > 960">
          <v-flex>
            <v-layout row>
              <span style="padding-top: 10px;"><b>가입기간</b></span>
              <v-btn outline round small>6개월</v-btn>
              <v-btn outline round small>12개월</v-btn>
              <v-btn ripple round small color="primary">24개월</v-btn>
              <v-btn outline round small>36개월</v-btn>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-layout row>
              <span style="padding-top: 10px;"><b>금리유형</b></span>
              <v-btn ripple round small color="primary">단리</v-btn>
              <v-btn outline round small>복리</v-btn>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-layout row>
              <span style="padding-top: 10px;"><b>가입제한</b></span>
              <v-btn ripple round small color="primary">제한없음</v-btn>
              <v-btn outline round small>서민전용</v-btn>
              <v-btn outline round small>일부제한</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {

}
</script>
