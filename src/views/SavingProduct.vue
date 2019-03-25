<template>
  <v-layout row ml-4 mr-4>
    <v-flex md3 lg2 xl2>
      <saving-product-option
        v-show="this.$vuetify.breakpoint.width > 960"
        @search="search"
      ></saving-product-option>
    </v-flex>
    <v-flex xs12>
      <v-container>
        <v-layout column>
          <v-layout row text-xs-center mb-2>
            <div class="subheading mt-2 ml-1 pt-1">
              <span>검색결과 </span>
              <span class="primary--text font-weight-bold">{{ productList.length }}</span>
              <span>개</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn small color="primary" v-if="this.$vuetify.breakpoint.width < 960">
              상품옵션
              <v-icon>
                filter_list
              </v-icon>
            </v-btn>
            <div class="text-xs-center">
              <v-menu offset-y>
                <v-btn
                  small
                  slot="activator"
                  color="primary"
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
            <saving-product-card :product="data"></saving-product-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import API from '@/api'
import { sortByKey } from '@/utils'
import SavingProductOption from '@/components/SavingProduct/SavingProductOption'
import SavingProductCard from '@/components/SavingProduct/SavingProductCard'

export default {
  components: {
    SavingProductOption,
    SavingProductCard
  },
  data () {
    return {
      productList: []
    }
  },
  methods: {
    search (params) {
      this.$http.get(API.SEARCH_SAVING_PRODUCT_BY_OPTION, {
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
