<template>
  <table>
    <tr>
      <th>Currency</th>
      <th>Exchange Rate</th>
    </tr>
    <tr v-for="el in currencies" :key="el.currency">
      <th>{{ el.currency }}</th>
      <th>{{ el.rate }} PLN</th>
    </tr>
  </table>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CurrencyTable",
  computed: {
    ...mapGetters({
      currencies: "currencies"
    })
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

table {
  margin-top: 10vh;
  border-collapse: collapse;
  font-size: 1.3rem;
}

td, th {
  border: 1px solid $color-primary;
  text-align: center;
  padding: 1rem;
}

tr {

  &:first-child {
    background-color: $color-secondary;
    font-size: 1.6rem;
  }

  &:nth-child(even) {
    background-color: $color-salomon;
  }
}

</style>
