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
export default {
  props: {
    productList: Array
  },
  methods: {
    basicRate () {
      const key = 'basic_rate_max'
      this.sortByKey(key)
    },
    primeRate () {
      const key = 'prime_rate_max'
      this.sortByKey(key)
    },
    sortByKey (key) {
      this.productList.sort(function (a, b) {
        let keyA = a[key]
        let keyB = b[key]

        // keyA가 keyB보다 작을 때
        if (keyA < keyB) {
          return -1
        }
        // keyA가 keyB보다 클 때
        if (keyA > keyB) {
          return 1
        }
        // keyA와 keyB가 동일할 때
        return 0
      }).reverse()
    }
  }
}
</script>
