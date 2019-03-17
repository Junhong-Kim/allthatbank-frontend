<template>
  <v-layout row ml-4 mr-4>
    <v-flex md3 lg2 xl2>
      <deposit-product-option
        v-if="this.$vuetify.breakpoint.width > 960"
        @search="search"
      ></deposit-product-option>
    </v-flex>
    <v-flex xs12>
      <v-container>
        <v-layout column>
          <v-layout row text-xs-center mr-2>
            <div class="subheading pt-3 pb-3">
              <span>검색결과 </span>
              <span class="primary--text font-weight-bold">{{ productList.length }}</span>
              <span>개</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn color="primary" v-if="this.$vuetify.breakpoint.width < 960">
              상품옵션
              <v-icon>
                filter_list
              </v-icon>
            </v-btn>
            <div class="text-xs-center">
              <v-menu offset-y>
                <v-btn
                  slot="activator"
                  color="primary"
                  dark
                >
                  정렬기준
                  <v-icon>
                    arrow_drop_down
                  </v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile @click="basicRate">
                    <v-list-tile-title>기본금리</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="primeRate">
                    <v-list-tile-title>우대금리</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </div>
          </v-layout>
          <v-flex v-for="(data, index) in productList" :key="index">
            <deposit-product-card :product="data"></deposit-product-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import API from '@/api'
import { sortByKey } from '@/utils'
import DepositProductOption from '@/components/DepositProduct/DepositProductOption'
import DepositProductCard from '@/components/DepositProduct/DepositProductCard'

export default {
  components: {
    DepositProductOption,
    DepositProductCard
  },
  data () {
    return {
      productList: []
    }
  },
  methods: {
    search (params) {
      this.$http.get(API.SEARCH_DEPOSIT_PRODUCT_BY_OPTION, {
        params
      }).then(res => {
        const data = res.data.data
        this.productList = data
      })
    },
    basicRate () {
      const key = 'basic_rate_max'
      sortByKey(this.productList, key)
    },
    primeRate () {
      const key = 'prime_rate_max'
      sortByKey(this.productList, key)
    }
  }
}
</script>
