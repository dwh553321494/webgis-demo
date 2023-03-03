<template>
  <div class="app-wrapper main_body">
      <navbar />
      <app-main />
  </div>
</template>


<script>
import { Navbar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain
  },
}
</script>
<style src="../style/style.css" scoped>

</style>
<style lang="scss" scoped>
.app-wrapper{
    // @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
}
</style>