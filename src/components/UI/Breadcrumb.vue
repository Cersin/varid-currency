<template>
  <div class="nav">
    <router-link to="/">Add Currency</router-link>
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
  margin-left: 2rem;
  align-items: center;
  grid-area: breadcrumb;

  a {
    font-weight: bold;
    color: $color-secondary;

    &.router-link-exact-active {
      color: $color-salomon;
    }
  }
}
</style>
