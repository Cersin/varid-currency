<template>
  <div class="sidenav" id="nav">
    <h2>CURRENCY APP</h2>
    <router-link to="/addCurrency">Add Currency</router-link>
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
  width: 300px;
  z-index: 1;
  background-color: $color-primary;
  overflow-x: hidden;
  transition: 0.5s;
  align-items: center;

  @media only screen and (max-width: 800px) {
    width: 150px;
  }

  a {
    text-decoration: none;
    color: $color-white;
    font-size: clamp(1.5rem, 2vh, 2.5rem);

    &.router-link-exact-active {
      background-color: $color-lightDark;
      padding: .5rem;
      border-radius: 10px;
    }

    &:hover {
      background-color: $color-lightDark;
    }
  }

  h2 {
    color: $color-white;
    text-align: center;
    font-size: clamp(1.5rem, 2.5vh, 3rem);
  }
}


</style>
