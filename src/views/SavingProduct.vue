<template>
  <saving-product-option v-if="this.$vuetify.breakpoint.width > 960"></saving-product-option>
</template>

<script>
import SavingProductOption from '@/components/SavingProduct/SavingProductOption'

export default {
  components: {
    SavingProductOption
  }
}
</script>
