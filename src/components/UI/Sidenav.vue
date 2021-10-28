<template>
  <div class="sidenav" id="nav">
    <h2>Currency App</h2>
    <router-link to="/">Add Currency</router-link>
    <router-link to="/currencyTable">Table</router-link>
    <router-link to="/currencyConverter">Converter</router-link>
  </div>
</template>

<script>
export default {
  name: "Sidenav"
};
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.sidenav {
  display: flex;
  grid-area: sidebar;
  gap: 5vh;
  min-height: 100vh;
  padding-top: 2vh;
  flex-direction: column;
  width: clamp(100px, 20vh, 400px);
  z-index: 1;
  background-color: $color-primary;
  overflow-x: hidden;
  transition: 0.5s;
  align-items: center;

  a {
    text-decoration: none;
    color: $color-secondary;
    font-size: clamp(1rem, 2vh, 2.5rem);

    &.router-link-exact-active {
      color: $color-salomon;
    }

    &:hover {
      color: $color-salomon;
    }
  }

  h2 {
    color: $color-orange;
    text-align: center;
    font-size: clamp(2rem, 3vh, 3rem);
  }
}


</style>
