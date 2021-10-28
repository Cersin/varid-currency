<template>
  <form @submit.prevent="$emit('submitForm', $event)">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>

    <label for="currency"><span>New</span> Currency</label>
    <select id="currency" name="currency">
      <option>USD</option>
      <option selected>EUR</option>
      <option>GBP</option>
    </select>

    <label for="rate">Rate</label>
    <input required type="number" step="0.01" min="0.01" id="rate" name="rate">
    <button>Save Currency</button>
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
  color: black;
  font-size: 1.5rem;
  font-weight: 800;
  background-color: $color-grey;
  padding: 3rem;
  border-radius: 25px 0 25px 0;
  position: relative;

  span {
    color: $color-primary;
  }

  .line {
    position: absolute;
    background-color: $color-primary;
    height: 70%;
    left: 0;
    bottom: 0;
    width: 2px;

    &:nth-child(2) {
      height: 50%;
      left: 2%;
      bottom: 2%;
    }

    &:nth-child(3) {
      height: 30%;
      left: 4%;
      bottom: 4%;
    }

    &:nth-child(4) {
      height: 2px;
      left: 0;
      bottom: 0;
      width: 70%;
    }

    &:nth-child(5) {
      height: 2px;
      left: 2%;
      bottom: 2%;
      width: 50%;
    }

    &:nth-child(6) {
      height: 2px;
      left: 4%;
      bottom: 4%;
      width: 30%;
    }
  }

  button {
    background-color: $color-primary;
    color: $color-white;
    text-decoration: none;
    border: none;
    padding: 1rem;
    width: 50%;
    align-self: center;
    border-radius: 10px;
    margin: 2rem 0;
    transition: all .3s;
    cursor: pointer;

    &:hover, &:active {
      background-color: $color-lightDark;
    }
  }
}
</style>
