<template>
  <div class="converter">
    <CurrencyForm @submitForm="calculateCurrency" :currencies="currencies">
      <template v-slot:button>Calculate</template>
      <template v-slot:rate>Amount</template>
    </CurrencyForm>

    <div class="result">
      <h1>Result</h1>
      <h1>{{ result.toFixed(2) }} PLN</h1>
    </div>

  </div>

</template>

<script>
import CurrencyForm from "@/components/CurrencyForm";
import {mapGetters} from "vuex";

export default {
  name: "CurrencyConverter",
  components: {CurrencyForm},
  data() {
    return {
      result: 0
    }
  },
  computed: {
    ...mapGetters({
      currencies: 'currencies'
    })
  },
  methods: {
    calculateCurrency(e) {
      const currency = this.currencies.find(el => el.currency === e.target.currency.value);
      this.result = e.target.rate.value * currency.rate;
    }
  }
}
</script>

<style scoped lang="scss">
.converter {
  grid-area: main;
  align-self: center;

.result {
  text-align: center;
  margin-top: 2rem;
}
}
</style>
