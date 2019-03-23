<template>
  <v-layout row>
    <div class="subheading pt-3 pb-3">
      <span>검색결과 </span>
      <span class="primary--text font-weight-bold">{{ productList.length }}</span>
      <span>개</span>
    </div>
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
</template>

<script>
import { sortByKey } from '@/utils'

export default {
  props: {
    productList: Array
  },
  methods: {
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
