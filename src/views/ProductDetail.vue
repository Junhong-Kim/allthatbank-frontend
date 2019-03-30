<template>
  <v-container>
    <common-progress-circular v-if="!isDataLoad"></common-progress-circular>
    <v-card v-else class="pa-5">
      <div class="ml-2">
        <div class="primary--text font-weight-bold">{{ product.bank_name }}</div>
        <div class="headline">{{ product.product_name }}</div>
        <div class="grey--text caption">{{ product.join_way.split(',').join(' | ') }}</div>
      </div>
      <v-divider class="mt-2"></v-divider>
      <v-flex mt-3>
        <v-chip color="primary" text-color="white" small>저축기간</v-chip>
        <span v-for="(month, index) in product.options.period" :key="index">
          {{ month }}개월, 
        </span>
      </v-flex>
      <v-flex mt-1>
        <v-chip color="primary" text-color="white" small>최고한도</v-chip>
        <span> {{ product['max_limit'] === null ? ' - ' : String(product.max_limit).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,') }}</span>
      </v-flex>
      <v-flex mt-1>
        <v-chip color="primary" text-color="white" small>상품금리</v-chip>
        <table class="mt-2 ml-3" style="border-collapse: collapse;">
          <tr>
            <th>금리유형</th>
            <th v-if="productType === 'saving'">적립유형</th>
            <th>금리</th>
            <th>6개월</th>
            <th>12개월</th>
            <th>24개월</th>
            <th>36개월</th>
          </tr>
          <tr>
            <td rowspan="5">{{ product.options.rate_type[0] }}</td>
          </tr>
          <template v-if="productType === 'saving'">
            <tr>
              <td rowspan="2">정액적립식</td>
              <td>기본(%)</td>
              <td v-for="(month, index) in months" :key="'sb-' + index"
                  v-text="product['options']['rsrv_type_s']['basic_rate'][month] == null ?
                  '-' :
                  product['options']['rsrv_type_s']['basic_rate'][month]">
              </td>
            </tr>
            <tr>
              <td>우대(%)</td>
              <td v-for="(month, index) in months" :key="'sp-' + index"
                  v-text="product['options']['rsrv_type_s']['prime_rate'][month] == null ?
                  '-' :
                  product['options']['rsrv_type_s']['prime_rate'][month]">
              </td>
            </tr>
            <tr>
              <td rowspan="2">자유적립식</td>
              <td>기본(%)</td>
              <td v-for="(month, index) in months" :key="'fb-' + index"
                  v-text="product['options']['rsrv_type_f']['basic_rate'][month] == null ? '-' : product['options']['rsrv_type_f']['basic_rate'][month]">
              </td>
            </tr>
            <tr>
              <td>우대(%)</td>
              <td v-for="(month, index) in months" :key="'fp-' + index"
                  v-text="product['options']['rsrv_type_f']['prime_rate'][month] == null ? '-' : product['options']['rsrv_type_f']['prime_rate'][month]">
              </td>
            </tr>
          </template>
          <template v-else>
            <tr>
              <td>기본(%)</td>
              <td v-for="(month, index) in months" :key="index"
                  v-text="product['options']['basic_rate'][month] == null ?
                  '-' :
                  product['options']['basic_rate'][month]">
              </td>
            </tr>
            <tr>
              <td>우대(%)</td>
              <td v-for="(month, index) in months" :key="index"
                  v-text="product['options']['prime_rate'][month] == null ?
                  '-' :
                  product['options']['prime_rate'][month]">
              </td>
            </tr>
          </template>
        </table>
      </v-flex>
      <v-flex mt-3>
        <v-chip color="primary" text-color="white" small>우대조건</v-chip>
        <p v-html="product.contents_prime_condition.replace(/(?:\r\n|\r|\n|\①|\②|\③)/g, '<br />')" class="ml-3"></p>
      </v-flex>
      <v-flex mt-1>
        <v-chip color="primary" text-color="white" small>만기 후 이자율</v-chip>
        <p v-html="product.contents_maturity_rate.replace(/(?:\r\n|\r|\n|\①|\②|\③)/g, '<br />')" class="ml-3"></p>
      </v-flex>
      <v-flex mt-1>
        <v-chip color="primary" text-color="white" small>기타 유의사항</v-chip>
        <p v-html="product.contents_etc.replace(/(?:\r\n|\r|\n|\①|\②|\③)/g, '<br />')" class="ml-3"></p>
      </v-flex>
      <v-flex mt-1>
        <v-chip color="primary" text-color="white" small>가입제한</v-chip>
        <span v-if="product.join_deny === 1"> 제한없음</span>
        <span v-else-if="product.join_deny === 2"> 서민전용</span>
        <span v-else> 일부제한</span>
      </v-flex>
      <v-flex mt-1>
        <v-chip color="primary" text-color="white" small>가입대상</v-chip>
        <span> {{ product.join_member }}</span>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>
import API from '@/api'
import CommonProgressCircular from '@/components/Common/CommonProgressCircular'

export default {
  components: {
    CommonProgressCircular,
  },
  created () {
    this.bankId = this.$route.params.product.bank_id
    this.productId = this.$route.params.product.product_id
    this.productType = this.$route.params.productType
    this.getProductDetail(this.productType)
  },
  data () {
    return {
      isDataLoad: false,
      months: ['months_6', 'months_12', 'months_24', 'months_36'],
      product: {},
      bankId: '',
      productId: '',
      productType: ''
    }
  },
  methods: {
    getProductDetail (productType) {
      let requestUrl = (productType === 'saving') ?
        API.DETAIL_SAVING_PRODUCT(this.productId) :
        API.DETAIL_DEPOSIT_PRODUCT(this.productId)

      this.$http.get(requestUrl, {
        params: {
          'fin_co_no': this.bankId
        }
      }).then(res => {
        const data = res.data.data
        this.product = data
        this.isDataLoad = true
      })
    }
  }
}
</script>

<style>
th {
  background: #eee;
  border: 1px solid #707070;
  color: black;
  text-align: center;
  width: 10%;
}
tr, td {
  border: 1px solid #707070;
  text-align: center;
}
</style>
