<template>
    <Sidenav/>
  <Breadcrumb/>
  <router-view/>
</template>

<style lang="scss">
@import "styles/base";
</style>
<script>
import Sidenav from "@/components/UI/Sidenav";
import Breadcrumb from "@/components/UI/Breadcrumb";
export default {
  components: {Breadcrumb, Sidenav}
}
</script>
