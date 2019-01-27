<template>
  <v-layout row>
    <v-flex md3 lg3 xl3>
      <saving-product-option v-if="this.$vuetify.breakpoint.width > 960"></saving-product-option>
    </v-flex>
    <v-flex xs12 ml-3 mr-3>
      <v-container>
        <v-layout column>
          <v-layout row text-xs-center mr-2>
            <span class="subheading" style="padding: 15px;">검색결과 <span class="blue--text"><b>0</b></span>개</span>
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
          <v-flex v-for="(value, index) in 10" :key="index">
            <saving-product-card></saving-product-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import SavingProductOption from '@/components/SavingProduct/SavingProductOption'
import SavingProductCard from '@/components/SavingProduct/SavingProductCard'

export default {
  components: {
    SavingProductOption,
    SavingProductCard
  }
}
</script>
