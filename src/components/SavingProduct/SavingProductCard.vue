<template>
  <v-card style="cursor: pointer;">
    <v-container mb-3>
      <v-layout row wrap ml-3>
        <v-flex xs12 lg6>
          <v-layout column>
            <v-flex>
              <span class="primary--text font-weight-bold">{{ product.bank_name }}</span>
            </v-flex>
            <v-flex>
              <span class="headline">{{ product.product_name }}</span>
            </v-flex>
            <v-flex>
              <span class="grey--text caption">{{ product.join_way.split(',').join(' | ') }}</span>
            </v-flex>
            <v-flex>
              <v-layout row mt-2>
                <span class="mr-1"><b>기본금리</b></span>
                <span>{{ product.basic_rate_min }}%</span>
                <span>&nbsp;~&nbsp;</span>
                <span>{{ product.basic_rate_max }}%</span>
              </v-layout>
            </v-flex>
            <v-flex>
              <v-layout row mt-2>
                <span class="mr-1"><b>우대금리</b></span>
                <span>{{ product.prime_rate_min }}%</span>
                <span>&nbsp;~&nbsp;</span>
                <span>{{ product.prime_rate_max }}%</span>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex v-if="this.$vuetify.breakpoint.width > 960">
          <v-layout column>
            <v-flex>
              <v-layout row>
                <span class="mt-2"><b>가입기간</b></span>
                <v-btn v-if="product.months_6" depressed round small color="primary">6개월</v-btn>
                <v-btn v-else outline round small>6개월</v-btn>
                <v-btn v-if="product.months_12" depressed round small color="primary">12개월</v-btn>
                <v-btn v-else outline round small>12개월</v-btn>
                <v-btn v-if="product.months_24" depressed round small color="primary">24개월</v-btn>
                <v-btn v-else outline round small>24개월</v-btn>
                <v-btn v-if="product.months_36" depressed round small color="primary">36개월</v-btn>
                <v-btn v-else outline round small>36개월</v-btn>
              </v-layout>
            </v-flex>
            <v-flex>
              <v-layout row>
                <span class="mt-2"><b>적립유형</b></span>
                <v-btn v-if="product.rsrv_type_s" depressed round small color="primary">정액적립식</v-btn>
                <v-btn v-else outline round small>정액적립식</v-btn>
                <v-btn v-if="product.rsrv_type_f" depressed round small color="primary">자유적립식</v-btn>
                <v-btn v-else outline round small>자유적립식</v-btn>
              </v-layout>
            </v-flex>
            <v-flex>
              <v-layout row>
                <span class="mt-2"><b>금리유형</b></span>
                <v-btn v-if="product.rate_type_s" depressed round small color="primary">단리</v-btn>
                <v-btn v-else outline round small>단리</v-btn>
                <v-btn v-if="product.rate_type_m" depressed round small color="primary">복리</v-btn>
                <v-btn v-else outline round small>복리</v-btn>
              </v-layout>
            </v-flex>
            <v-flex>
              <v-layout row>
                <span class="mt-2"><b>가입제한</b></span>
                <v-btn v-if="product.join_deny === '1'" depressed round small color="primary">제한없음</v-btn>
                <v-btn v-else outline round small>제한없음</v-btn>
                <v-btn v-if="product.join_deny === '2'" depressed round small color="primary">서민전용</v-btn>
                <v-btn v-else outline round small>서민전용</v-btn>
                <v-btn v-if="product.join_deny === '3'" depressed round small color="primary">일부제한</v-btn>
                <v-btn v-else outline round small>일부제한</v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>
