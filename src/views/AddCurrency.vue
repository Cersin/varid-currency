<template>
  <div class="currency">
    <CurrencyForm ref="currencyForm" @submitForm="addCurrency"></CurrencyForm>
  </div>

</template>

<script>
import CurrencyForm from "@/components/CurrencyForm";

export default {
  name: "AddCurrency",
  components: {CurrencyForm},
  methods: {
    async addCurrency(e) {
      const {
        currency,
        rate
      } = Object.fromEntries(new FormData(e.target));
      // we can use here v-model but its easier this way when we don't have real time validation

      this.$store.dispatch('addToCurrencies', {
        currency,
        rate
      });
      e.target.reset();
    }
  }
}
</script>

<style scoped lang="scss">
.currency {
  align-self: center;
  display: flex;
  justify-content: center;
  width: 100%;
}

</style>
