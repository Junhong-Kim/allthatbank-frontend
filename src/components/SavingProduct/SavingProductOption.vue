<template>
  <v-layout fill-height row mt-4>
    <v-sheet color="transparent">
      <v-layout column>
        <!-- 은행 -->
        <v-flex mb-4 pa-2>
          <span class="caption">은행</span>
          <v-layout text-xs-center mt-1>
            <v-flex>
              <v-select
                v-model="selectedBanks"
                :items="bankList"
                label="은행을 선택해주세요."
                multiple
                solo
                hide-details
              >
                <v-list-tile
                  slot="prepend-item"
                  ripple
                  @click="selectAllBanks"
                >
                  <v-list-tile-action>
                    <v-icon :color="selectedBanks.length > 0 ? 'primary' : ''">
                      {{ bankListIcon }}
                    </v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>
                    전체
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider
                  slot="prepend-item"
                  class="mt-2"
                >
                </v-divider>
                <template
                  slot="selection"
                  slot-scope="{ item, index }"
                >
                  <v-chip v-if="index === 0" small>
                    <span>{{ item }}</span>
                  </v-chip>
                  <span
                    v-if="index === 1"
                    class="grey--text caption"
                  >
                    (+{{ selectedBanks.length - 1 }} 선택됨)
                  </span>
                </template>
              </v-select>
            </v-flex>
          </v-layout>
        </v-flex>
        <!-- 금리 -->
        <v-flex mb-4 pa-2>
          <v-form>
            <v-container pa-0>
              <v-layout row>
                <v-flex>
                  <span class="caption">기본금리</span>
                  <v-layout text-xs-center mt-1>
                    <v-flex>
                      <v-text-field
                        v-model="selectedBasicRate"
                        mask="#"
                        label="0"
                        suffix="%"
                        solo
                        hide-details
                        ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex>
                  <span class="caption">우대금리</span>
                  <v-layout text-xs-center mt-1>
                    <v-flex>
                      <v-text-field
                        v-model="selectedPrimeRate"
                        mask="#"
                        label="0"
                        suffix="%"
                        solo
                        hide-details >
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-flex>
        <!-- 가입기간 -->
        <v-flex mb-4 pa-2>
          <v-layout column>
            <span class="caption">가입기간</span>
            <v-layout mt-1>
              <v-btn-toggle v-model="toggleMonths" @change="search" :max="2000">
                <v-btn flat>6개월</v-btn>
                <v-btn flat>12개월</v-btn>
                <v-btn flat>24개월</v-btn>
                <v-btn flat>36개월</v-btn>
              </v-btn-toggle>
            </v-layout>
          </v-layout>
        </v-flex>
        <!-- 적립유형 -->
        <v-flex mb-4 pa-2>
          <span class="caption">적립유형</span>
          <v-layout mt-1>
            <v-btn-toggle v-model="toggleRsrvType" @change="search">
              <v-btn flat>정액적립식</v-btn>
              <v-btn flat>자유적립식</v-btn>
            </v-btn-toggle>
          </v-layout>
        </v-flex>
        <!-- 금리유형 -->
        <v-flex mb-4 pa-2>
          <span class="caption">금리유형</span>
          <v-layout mt-1>
            <v-btn-toggle v-model="toggleRateType" @change="search">
              <v-btn flat>단리</v-btn>
              <v-btn flat>복리</v-btn>
            </v-btn-toggle>
          </v-layout>
        </v-flex>
        <!-- 가입제한 -->
        <v-flex mb-4 pa-2>
          <span class="caption">가입제한</span>
          <v-layout mt-1>
            <v-btn-toggle v-model="toggleJoinType" @change="search">
              <v-btn flat>제한없음</v-btn>
              <v-btn flat>서민전용</v-btn>
              <v-btn flat>일부제한</v-btn>
            </v-btn-toggle>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-sheet>
  </v-layout>
</template>

<script>
export default {
  created () {
    this.initBankList()
  },
  data() {
    return {
      bankListIcon: 'check_box_outline_blank',
      bankList: [],
      selectedBanks: [],
      selectedBasicRate: 0,
      selectedPrimeRate: 0,
      toggleMonths: 0,   // 6개월, 12개월, 24개월, 36개월
      toggleRsrvType: 0, // S(정액적립식), F(자유적립식)
      toggleRateType: 0, // S(단리), M(복리)
      toggleJoinType: 0  // 1(제한없음), 2(서민전용), 3: 일부제한
    }
  },
  watch: {
    selectedBanks (val) {
      if (val.length === this.bankList.length) {
        this.bankListIcon = 'check_box'
      } else if (val.length > 0) {
        this.bankListIcon = 'indeterminate_check_box'
      } else {
        this.bankListIcon = 'check_box_outline_blank'
      }
      this.search()
    },
    selectedBasicRate (val) {
      if (val === '') {
        this.selectedBasicRate = 0
      } else {
        this.search()
      }
    },
    selectedPrimeRate (val) {
      if (val === '') {
        this.selectedPrimeRate = 0
      } else {
        this.search()
      }
    }  
  },
  methods: {
    initBankList () {
      let bankNames = this.$store.state.bankList.map(bank => bank.kor_co_nm).sort()
      this.selectedBanks = bankNames
      this.bankList = bankNames
    },
    selectAllBanks () {
      if (this.selectedBanks.length === this.bankList.length) {
        this.bankListIcon = 'check_box_outline_blank'
        this.selectedBanks = []
      } else {
        this.bankListIcon = 'check_box'
        this.selectedBanks = this.bankList
      }
    },
    getBankIds (selectedBanks) {
      let data = []
      selectedBanks.forEach(selectedBank => {
        data.push(this.$store.state.bankList.find(bank => bank.kor_co_nm === selectedBank))
      })
      return data.map(d => d.fin_co_no)
    },
    search () {
      let options = {
        fin_co_no: this.getBankIds(this.selectedBanks),
        save_trm: (parseInt(this.toggleMonths) + 1) === 1 ? 
                  (parseInt(this.toggleMonths) + 1) * 6 : // 6개월
                  (parseInt(this.toggleMonths) * 12),     // 12개월, 24개월, 36개월
        rsrv_type: (this.toggleRsrvType === 0) ? 'S' : 'F',
        intr_rate_type: (this.toggleRateType === 0) ? 'S' : 'M',
        intr_rate: parseInt(this.selectedBasicRate),
        intr_rate2: parseInt(this.selectedPrimeRate),
        join_deny: parseInt(this.toggleJoinType) + 1
      }
      this.$emit('search', options)
    }
  }
}
</script>
