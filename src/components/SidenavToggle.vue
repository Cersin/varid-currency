<template>
<button @click="$emit('openMenu')">MENU</button>
</template>

<script>
export default {
  name: "SidenavToggle"
}
</script>

<style scoped lang="scss">
button {
  text-decoration: none;
  border: none;
  background-color: transparent;
  color: $color-salomon;
  font-size: 2rem;
  display: flex;
  align-self: center;
  grid-area: menu;
  margin-left: 1rem;

  &:hover, &:active {
    color: $color-secondary;
  }
}
</style>
