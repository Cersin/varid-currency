<template>
    <Sidenav/>
  <Breadcrumb/>
  <router-view/>
</template>

<style lang="scss">
@import "styles/base";

.navigation {
  &-enter-active, &-leave-active {
    transition: all 2s ease-in-out;
  }

  &-enter, &-leave-to {
    transform: translateX(-100vw);
  }
}
</style>
<script>
import Sidenav from "@/components/UI/Sidenav";
import Breadcrumb from "@/components/UI/Breadcrumb";
export default {
  components: {Breadcrumb, Sidenav},
  data() {
    return {
      menuOpen: false
    }
  }
}
</script>
