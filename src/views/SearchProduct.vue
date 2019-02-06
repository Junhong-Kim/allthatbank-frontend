<template>
  <v-container fill-height>
    <v-layout align-center row wrap text-xs-center>
      <v-flex xs10 lg6 xl6 offset-xs1 offset-lg3 offset-xl3 style="margin-bottom: 100px;">
        <span class="headline">찾으시는 <b>금융상품</b>이 있으신가요?</span>
          <v-flex offset-xs4>
            <v-radio-group v-model="product" row>
              <v-radio label="적금상품" value="saving"></v-radio>
              <v-radio label="예금상품" value="deposit"></v-radio>
            </v-radio-group>
          </v-flex>
        <v-text-field
          solo
          hide-details
          prepend-inner-icon="search"
          label="금융상품명을 입력해주세요."
          @keyup.enter="search"
          style="margin-bottom: 20px;"
        ></v-text-field>
        <v-btn color="primary">검색</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      product: 'saving'
    }
  },
  methods: {
    search () {
      console.log('search')
    }
  }
}
</script>
