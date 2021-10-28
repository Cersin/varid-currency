<template>
  <div class="currency">
    <CurrencyForm @submitForm="addCurrency">
      <template v-slot:button>Save Currency</template>
      <template v-slot:rate>Rate</template>
    </CurrencyForm>
    <router-view></router-view>
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
      // we can use v-model here but its easier this way when we don't have real time validation

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
  display: flex;
  justify-content: center;
  align-self: center;
}

</style>
