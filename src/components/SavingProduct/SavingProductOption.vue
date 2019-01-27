<template>
  <v-layout fill-height row mt-3>
    <v-sheet color="transparent">
      <v-layout column>
        <v-flex ma-3 pa-2>
          <span>은행</span>
          <v-layout text-xs-center mt-1>
            <v-flex>
              <v-combobox
                v-model="selectedBanks"
                :items="banks"
                label="은행을 선택해주세요."
                solo
                chips
                clearable
                multiple
                hide-details
              ></v-combobox>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex pa-2>
          <v-form>
            <v-container>
              <v-layout row>
                <v-flex>
                  <span>기본금리</span>
                  <v-layout text-xs-center mt-1>
                    <v-flex>
                      <v-text-field label="0.0" solo hide-details suffix="%"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex>
                  <span>우대금리</span>
                  <v-layout text-xs-center mt-1>
                    <v-flex>
                      <v-text-field label="0.0" solo hide-details suffix="%"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-flex>
        <v-flex ma-3 pa-2>
          <v-layout column>
            <span>가입기간</span>
            <v-layout text-xs-center mt-1>
              <v-flex>
                <v-btn outline round>6개월</v-btn>
                <v-btn outline round>12개월</v-btn>
              </v-flex>
            </v-layout>
            <v-layout text-xs-center>
              <v-flex>
                <v-btn ripple round color="accent">24개월</v-btn>
                <v-btn outline round>36개월</v-btn>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-flex>
        <v-flex ma-3 pa-2>
          <span>적립유형</span>
          <v-layout text-xs-center mt-1>
            <v-flex>
              <v-btn outline round>정액적립식</v-btn>
              <v-btn ripple round color="accent">자유적립식</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex ma-3 pa-2>
          <span>금리유형</span>
          <v-layout text-xs-center mt-1>
            <v-flex>
              <v-btn ripple round color="accent">단리</v-btn>
              <v-btn outline round>복리</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex ma-3 pa-2>
          <span>가입제한</span>
          <v-layout text-xs-center mt-1>
            <v-flex>
              <v-btn ripple round color="accent">제한없음</v-btn>
              <v-btn outline round>서민전용</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-sheet>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      selectedBanks: [],
      banks: [
        'IBK기업은행',
        'KB국민은행',
        'KDB산업은행',
        'KEB하나은행',
        'NH농협은행',
        'SC제일은행',
        'SH수협은행',
        '경남은행',
        '광주은행',
        '대구은행',
        '부산은행',
        '신한은행',
        '한국씨티은행',
        '우리은행',
        '전북은행',
        '제주은행',
        '카카오뱅크',
        '케이뱅크'
      ]
    }
  }
}
</script>
