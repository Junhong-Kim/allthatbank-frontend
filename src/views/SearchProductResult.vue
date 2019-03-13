<template>
  <v-container>
    <v-layout column>
      <v-layout row>
        <span class="subheading pt-3 pb-3">검색결과 <span class="primary--text"><b>{{ productList.length }}</b></span>개</span>
        <v-spacer></v-spacer>
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
              <v-list-tile
                v-for="(item, index) in ['기본금리', '우대금리']"
                :key="index"
              >
                <v-list-tile-title>{{ item }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </v-layout>
      <v-flex v-for="(data, index) in this.productList" :key="index">
        <saving-product-card v-if="productType === 'saving'" :product="data"></saving-product-card>
        <deposit-product-card v-else :product="data"></deposit-product-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import SavingProductCard from '@/components/SavingProduct/SavingProductCard'
import DepositProductCard from '@/components/DepositProduct/DepositProductCard'


export default {
  components: {
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
