<!--  -->
<template>
  <div id="app">
    <router-view></router-view>
    <music v-if="$route.meta.isShowMusic"></music>
  </div>
</template>

<script>
import music from "./components/music";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    music
  }
};
</script>

<style>
</style>