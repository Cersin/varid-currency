<template>
  <div class="nav">
    <router-link to="/addCurrency">Add Currency</router-link>
    >
    <router-link to="/currencyTable">Table</router-link>
    >
    <router-link to="/currencyConverter">Converter</router-link>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb"
};
</script>

<style scoped lang="scss">
@import "src/styles/variables";
.nav {
  height: 5vh;
  display: flex;
  gap: .5rem;
  justify-self: flex-start;
  margin-left: 2rem;
  align-items: center;
  justify-content: flex-start;
  grid-area: breadcrumb;

  a {
    font-weight: 600;
    text-decoration: none;
    color: black;

    &.router-link-exact-active {
      color: $color-primary;
    }
  }
}
</style>
