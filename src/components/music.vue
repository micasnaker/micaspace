<template>
  <div class="page">
    <div class="plays">
      <transition name="draw">
        <iframe
          v-show="isPlayShow"
          frameborder="no"
          border="0"
          marginwidth="0"
          marginheight="0"
          width="235"
          height="80"
          src="//music.163.com/outchain/player?type=2&id=37653063&auto=0&height=66"
        ></iframe>
      </transition>
      <transition name="draws">
        <div v-show="isPlayShow" @click="play_none" class="btn_wrap_m">
          <p>Off ON</p>
        </div>
      </transition>
      <transition name="drawed">
        <div v-show="lateShow" @click="play_none" class="btn_wraps_m">
          <p>Off ON</p>
        </div>
      </transition>
    </div>

    <div class="wrapper">
      <div class="play">
        <transition name="draw">
          <iframe
            ref="player"
            v-show="isPlayShow"
            frameborder="no"
            border="0"
            marginwidth="0"
            marginheight="0"
            width="300"
            height="86"
            src="//music.163.com/outchain/player?type=2&id=37653063&auto=0&height=66"
          ></iframe>
        </transition>
        <transition name="draws">
          <div v-show="isPlayShow" @click="play_none" class="btn_wrap">
            <p>Off ON</p>
          </div>
        </transition>
        <transition name="drawed">
          <div v-show="lateShow" @click="play_none" class="btn_wraps">
            <p>Off ON</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlayShow: true,
      lateShow: false
    };
  },

  methods: {
    play_none() {
      this.isPlayShow = !this.isPlayShow;
      if (!this.isPlayShow) {
        setTimeout(() => {
          this.lateShow = true;
        }, 1000);
      } else {
        this.lateShow = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.play {
  position: fixed;
  left: 0;
  opacity: 0.6;
  border: none;
  box-shadow: 0 0 10px #ccc;
  border-radius: 2px;
  bottom: 145px;
  z-index: 999999;
}
// 文字无法被选中
p {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
// PC端音乐控制显示开关前
.btn_wrap {
  position: absolute;
  width: 30px;
  height: 92px;
  background-color: #0085a1;
  left: 301px;
  bottom: 0.01px;
  opacity: 0.6;
  border: none;
  box-shadow: 0 0 10px #ccc;
  border-radius: 2px;
  p {
    color: #3ce9ff;
    line-height: 40px;
    margin-top: 5px;
    opacity: 1;
    margin-left: 3px;
    font-family: Comic Sans MS;
  }
}

// PC端音乐控制显示开关后
.btn_wraps {
  position: absolute;
  width: 30px;
  height: 92px;
  background-color: #0085a1;
  left: 0;
  bottom: 0.01px;
  opacity: 0.6;
  border: none;
  box-shadow: 0 0 10px #ccc;
  border-radius: 2px;
  p {
    color: #3ce9ff;
    line-height: 40px;
    margin-top: 5px;
    opacity: 1;
    margin-left: 3px;
    font-family: Comic Sans MS;
  }
}

// 移动端音乐控制显示开关前
.btn_wrap_m {
  position: absolute;
  width: 30px;
  height: 82px;
  background-color: #0085a1;
  left: 235px;
  bottom: 0.01px;
  opacity: 0.6;
  border: none;
  box-shadow: 0 0 10px #ccc;
  border-radius: 2px;
  p {
    color: #3ce9ff;
    line-height: 40px;
    margin-top: 5px;
    opacity: 1;
    margin-left: 3px;
    font-family: Comic Sans MS;
  }
}

// 移动端音乐控制显示开关后
.btn_wraps_m {
  position: absolute;
  width: 30px;
  height: 82px;
  background-color: #0085a1;
  left: 0;
  bottom: 0.01px;
  opacity: 0.6;
  border: none;
  box-shadow: 0 0 10px #ccc;
  border-radius: 2px;
  p {
    color: #3ce9ff;
    line-height: 40px;
    margin-top: 5px;
    opacity: 1;
    margin-left: 3px;
    font-family: Comic Sans MS;
  }
}

.draws-enter-active,
.draws-leave-active {
  transition: all 1s ease;
}
.draws-enter, .draws-leave-to /* .fade-leave-active below version 2.1.8 */ {
  left: 0;
}

.drawed-enter-active,
.drawed-leave-active {
  transition: all 0.00001s ease;
}
.drawed-enter, .drawed-leave-to /* .fade-leave-active below version 2.1.8 */ {
  left: 0;
}

.plays {
  position: fixed;
  left: 0;
  opacity: 0.6;
  border: none;
  box-shadow: 0 0 10px #ccc;
  border-radius: 2px;
  bottom: 145px;
  z-index: 999999;
}
.draw-enter-active,
.draw-leave-active {
  transition: all 1s ease;
}
.draw-enter, .draw-leave-to /* .fade-leave-active below version 2.1.8 */ {
  width: 0;
}

@media (min-width: 768px) {
  //pc
  .plays {
    display: none;
  }
}
</style>


<style lang="scss" scoped>
@media (max-width: 420px) {
  //mobile
  .play {
    display: none;
  }
  .plays {
    position: fixed;
    left: 0;
    opacity: 0.6;
    border: none;
    box-shadow: 0 0 10px #ccc;
    border-radius: 2px;
    bottom: 145px;
    z-index: 99999999;
  }
}
</style>
