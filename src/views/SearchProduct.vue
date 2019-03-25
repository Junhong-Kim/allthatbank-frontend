<template>
  <v-container fill-height>
    <v-layout align-center row wrap text-xs-center>
      <v-flex xs10 lg6 xl6 offset-xs1 offset-lg3 offset-xl3 mb-5>
        <span class="headline">찾으시는 <b>금융상품</b>이 있으신가요?</span>
        <v-flex>
          <v-radio-group v-model="product" row class="justify-center">
            <v-radio label="적금상품" value="saving"></v-radio>
            <v-radio label="예금상품" value="deposit"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-text-field
          solo
          hide-details
          prepend-inner-icon="search"
          label="금융상품명을 입력해주세요."
          v-model="productName"
          @keypress.enter="search"
        ></v-text-field>
        <v-btn class="mt-4 primary" @click="search">검색</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import API from '@/api'

export default {
  data () {
    return {
      product: 'saving',
      productName: '',
      productList: []
    }
  },
  methods: {
    search () {
      if (this.product === 'saving') {
        // 적금상품 검색
        this.$http.get(API.SEARCH_SAVING_PRODUCT_BY_NAME, {
          params: {
            fin_prdt_nm: this.productName
          }
        }).then(res => {
          const data = res.data.data
          this.productList = data
          this.$router.push({
            name: 'searchResult',
            params: {
              type: this.product,
              data: this.productList
            }
          })
          this.productName = ''
        })
      } else if (this.product === 'deposit') {
        // 예금상품 검색
        this.$http.get(API.SEARCH_DEPOSIT_PRODUCT_BY_NAME, {
          params: {
            fin_prdt_nm: this.productName
          }
        }).then(res => {
          const data = res.data.data
          this.productList = data
          this.$router.push({
            name: 'searchResult',
            params: {
              type: this.product,
              data: this.productList
            }
          })
          this.productName = ''
        })
      }
    }
  }
}
</script>
