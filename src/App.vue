<!--  -->
<template>
  <div id="app">
    <router-view></router-view>
    <div class="black_cat">
      <iframe src="https://zhanyuzhang.github.io/lovely-cat/cat.html" border="0"></iframe>
    </div>
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

<style lang="scss" scoped>
.black_cat {
  position: fixed;
  right: 360px;
  top: 590px;
  z-index: 999;
  iframe {
    border: none !important;
  }
}
</style>

<style lang="scss" scoped>
@media (max-width: 420px) {
  //mobile
  .black_cat {
    position: fixed;
    top: 230px;
    right: 0;
    z-index: 9999;
    iframe {
      border: none !important;
    }
  }
}
</style>