<!--  -->
<template>
  <div class="loading">
    <div class="center">
      <div class="tree">
        <span class="tree-one"></span>
        <span class="tree-two"></span>
        <span class="tree-three"></span>
        <span class="tree-four"></span>
      </div>
      <div class="tree">
        <span class="tree-one"></span>
        <span class="tree-two"></span>
        <span class="tree-three"></span>
        <span class="tree-four"></span>
      </div>
      <div class="line">
        <div class="line-item"></div>
        <div class="line-item"></div>
      </div>
      <div class="text">米卡正在种树中...</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {}
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.loading {
  position: fixed;
  width: 100%;
  // height: 100%;
  height: 0 !important;
  background: transparent;
}
.loading .center {
  position: absolute;
  width: 400px;
  height: 300px;
  top: 40%;
  left: 50%;
  margin: -150px 0 0 -200px;
}
.loading .tree {
  position: absolute;
  bottom: 44px;
  right: -40px;
  width: 80px;
  height: 86px;
  opacity: 0;
  -webkit-transform-origin: bottom center;
  -ms-transform-origin: bottom center;
  transform-origin: bottom center;
  -webkit-animation: treeMove 5s linear infinite;
  animation: treeMove 5s linear infinite;
}
.loading .tree:nth-of-type(2) {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.loading .tree-one,
.loading .tree-two,
.loading .tree-three {
  position: absolute;
  border-style: solid;
  border-color: transparent transparent #0e0e0e transparent;
  border-width: 0 40px 40px 40px;
}
.loading .tree-one::after,
.loading .tree-two::after,
.loading .tree-three::after {
  content: "";
  position: absolute;
  border-style: solid;
  border-color: transparent transparent #009245 transparent;
}
.loading .tree-one {
  top: 32px;
  left: 0;
}
.loading .tree-one::after {
  top: 6px;
  left: -30px;
  border-width: 0 30px 30px 30px;
}
.loading .tree-two {
  top: 16px;
  left: 0;
  -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
}
.loading .tree-two::after {
  top: 7px;
  left: -28px;
  border-width: 0 28px 28px 28px;
}
.loading .tree-three {
  top: 0;
  left: 0;
  -webkit-transform: scale(0.6);
  -ms-transform: scale(0.6);
  transform: scale(0.6);
}
.loading .tree-three::after {
  top: 8px;
  left: -26px;
  border-width: 0 26px 26px 26px;
}
.loading .tree-four {
  position: absolute;
  bottom: -4px;
  left: 50%;
  margin-left: -8px;
  width: 16px;
  height: 20px;
  background: #603813;
  border: 4px solid #0e0e0e; /*no*/
}
.loading .line {
  position: absolute;
  bottom: 40px;
  right: 0;
  width: 100%;
  height: 4px;
  background: #0e0e0e;
}
.loading .line-item {
  position: absolute;
  top: 8px;
  right: 0;
  width: 30px;
  height: 3px;
  opacity: 0;
  background: #505050;
  -webkit-animation: lineMove 5s linear infinite;
  animation: lineMove 5s linear infinite;
}
.loading .line-item:nth-of-type(2) {
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}
.loading .text {
  position: absolute;
  width: 200px;
  bottom: 0;
  left: 50%;
  text-align: center;
  margin-left: -100px;
  font-size: 16px;
  font-weight: bold;
  color: #009245;
}
@-webkit-keyframes treeMove {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
    right: 320px;
  }
}
@keyframes treeMove {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
    right: 320px;
  }
}
@-webkit-keyframes lineMove {
  0% {
    opacity: 0;
    right: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    right: 370px;
  }
}
@keyframes lineMove {
  0% {
    opacity: 0;
    right: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    right: 370px;
  }
}
</style>

<style lang="scss" scoped>
@media (min-width: 768px) {
  //pc
  .loading {
    z-index: 99999999;
    margin-left: 504px;
    margin-top: -60px;
    .center {
      width: 300px;
    }
  }
}
</style>

<style lang="scss" scoped>
@media (max-width: 420px) {
  //mobile
  .loading {
    z-index: 9999999;
    margin-top: -78px;
  }
}
</style>

