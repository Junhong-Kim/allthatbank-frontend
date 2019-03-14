<template>
  <v-container>
    <v-layout column>
      <common-product-sorting :productList="productList"></common-product-sorting>
      <v-flex v-for="(data, index) in productList" :key="index">
        <saving-product-card v-if="productType === 'saving'" :product="data"></saving-product-card>
        <deposit-product-card v-else :product="data"></deposit-product-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CommonProductSorting from '@/components/Common/CommonProductSorting'
import SavingProductCard from '@/components/SavingProduct/SavingProductCard'
import DepositProductCard from '@/components/DepositProduct/DepositProductCard'

export default {
  components: {
    CommonProductSorting,
    SavingProductCard,
    DepositProductCard
  },
  data () {
    return {
      productType: this.$route.params.type,
      productList: this.$route.params.data
    }
  }
}
</script>
