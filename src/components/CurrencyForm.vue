<template>
  <form @submit.prevent="$emit('submitForm', $event)">
    <label for="currency">New Currency</label>
    <select id="currency" name="currency">
      <option>USD</option>
      <option selected>EUR</option>
      <option>GBP</option>
    </select>

    <label for="rate">Rate</label>
    <input required type="number" step="0.01" min="0.01" id="rate" name="rate">
    <button>Add Currency</button>
  </form>
</template>

<script>
export default {
  name: "CurrencyForm"
};
</script>

<style scoped lang="scss">
@import "src/styles/variables";

form {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: .5rem;
  color: $color-primary;
  font-size: 1.5rem;
  font-weight: 800;
  background-color: $color-salomon;
  padding: 3rem;
  border-radius: 50px;

  button {
    background-color: $color-yellow;
    text-decoration: none;
    border: none;
    padding: 1rem;
    width: 50%;
    align-self: center;
    border-radius: 10px;
    margin-top: 1rem;
    transition: all .3s;
    cursor: pointer;

    &:hover, &:active {
      background-color: $color-secondary;
    }
  }
}
</style>
