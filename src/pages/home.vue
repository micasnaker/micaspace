<template>
  <div class="page">
    <!-- <canvas id="live2d" width="280" height="250"></canvas> -->
    <loading v-if="isTop"></loading>
    <div class="aside_wrap">
      <div class="card">
        <p class="title">ABOUT ME</p>
        <img @click="about_wrap" class="pic" src="../../static/img/dage_mica.jpg" alt>
        <div class="row">
          <p>A Web developer</p>
          <div class="icons">
            <a href="https://github.com/micasnaker" target="_blank">
              <i class="iconfont icon-github"></i>
            </a>
            <a href="https://www.zhihu.com/people/mi-qia-bu-shi-fan-qia/activities" target="_blank">
              <i class="iconfont icon-zhihu"></i>
            </a>
            <a href="https://music.163.com/#/my/m/music/playlist?id=409256318" target="_blank">
              <i class="iconfont icon-yinle"></i>
            </a>
            <a href="https://weibo.com/u/6615895315/home?wvr=5&lf=reg" target="_blank">
              <i class="iconfont icon-weibo"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="card">
        <p class="title">FRIENDS</p>
        <div class="row">
          <a class="link" href="https://www.mica.wang/resume/" target="_blank">Mica`s Resume</a>
          <a class="link" href="https://www.mica.wang/resume/" target="_blank">Mica`s Resume</a>
          <a class="link" href="https://www.mica.wang/resume/" target="_blank">Mica`s Resume</a>
          <a class="link" href="https://www.mica.wang/resume/" target="_blank">Mica`s Resume</a>
          <a class="link" href="https://www.mica.wang/resume/" target="_blank">Mica`s Resume</a>
        </div>
      </div>
    </div>
    <div class="changePage">
      <el-pagination
        v-show="items.length>0"
        background
        layout="prev, pager, next"
        :total="items.length"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
      >></el-pagination>
    </div>
    <!-- <div class="plays">
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
    </div>-->

    <div class="wrapper">
      <el-row>
        <el-col :xs="24" :sm="4" :md="18" :lg="18" :xl="18">
          <div class="main">
            <list_home :items="items" :currentPage="currentPage"></list_home>
          </div>
        </el-col>
        <el-col :xs="0" :sm="4" :md="6" :lg="6" :xl="6">
          <div class="aside">
            <div class="card">
              <p class="title">ABOUT ME</p>
              <img @click="about_wrap" class="pic" src="../../static/img/dage_mica.jpg" alt>
              <div class="row">
                <p>A Web developer</p>
                <div class="icons">
                  <a href="https://github.com/micasnaker" target="_blank">
                    <i class="iconfont icon-github"></i>
                  </a>
                  <a
                    href="https://www.zhihu.com/people/mi-qia-bu-shi-fan-qia/activities"
                    target="_blank"
                  >
                    <i class="iconfont icon-zhihu"></i>
                  </a>
                  <a
                    href="https://music.163.com/#/my/m/music/playlist?id=409256318"
                    target="_blank"
                  >
                    <i class="iconfont icon-yinle"></i>
                  </a>
                  <a href="https://weibo.com/u/6615895315/home?wvr=5&lf=reg" target="_blank">
                    <i class="iconfont icon-weibo"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card" @click="sss">
              <p class="title">FRIENDS</p>
              <div class="row">
                <a class="link" href="https://www.mica.wang/resume/" target="_blank">Mica`s Resume</a>
                <a class="link" href="https://www.mica.wang/resume/" target="_blank">Mica`s Resume</a>
                <a class="link" href="https://www.mica.wang/resume/" target="_blank">Mica`s Resume</a>
                <a class="link" href="https://www.mica.wang/resume/" target="_blank">Mica`s Resume</a>
                <a class="link" href="https://www.mica.wang/resume/" target="_blank">Mica`s Resume</a>
              </div>
            </div>
          </div>
          <!-- <div class="play">
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
          </div>-->
        </el-col>
      </el-row>
    </div>
    <div class="changePage">
      <el-pagination
        v-show="items.length>0"
        background
        layout="prev, pager, next"
        :total="items.length"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
      >></el-pagination>
    </div>
  </div>
</template>

<script>
import List_home from "../components/list_home";
import { webUrl } from "../../static/js/public.js";
import loading from "../components/loading";
import { setTimeout } from "timers";
// import "../../static/live2d/js/live2d.js";
export default {
  data() {
    return {
      items: [],
      currentPage: 1,
      pageSize: 10,
      // total:10
      isTop: true,
      isPlayShow: true,
      lateShow: false
    };
  },
  components: {
    List_home,
    loading
  },
  created() {
    window.addEventListener("scroll", this.scroll);
    this.$axios.post(webUrl + "articleList").then(res => {
      this.items = res.data.reverse();
    });
  },

  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
    },

    // play_none() {
    //   this.isPlayShow = !this.isPlayShow;
    //   if (!this.isPlayShow) {
    //     setTimeout(() => {
    //       this.lateShow = true;
    //     }, 1000);
    //   } else {
    //     this.lateShow = false;
    //   }
    // },

    about_wrap() {
      this.$router.push({ path: "/about" });
    },

    sss() {
      let a = this.$refs.player.src.slice(61, -10);
    },

    scroll: function() {
      let scroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scroll < 60) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    },
    toTop: function() {
      //Math.animation = function (from, to, duration, easing, callback) {}
      Math.animation(
        document.documentElement.scrollTop,
        0,
        800,
        "Quart.easeOut",
        function(value) {
          document.documentElement.scrollTop = value;
          document.body.scrollTop = value;
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.changePage {
  // padding-right: 15%;
  .el-pagination {
    text-align: center;
    // display: inline;
  }
}
.main {
  background: #f8f8fd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
  margin: 0 10px;
  padding: 10px;
}

// .play {
//   position: fixed;
//   left: 0;
//   opacity: 0.6;
//   border: none;
//   box-shadow: 0 0 10px #ccc;
//   border-radius: 2px;
//   bottom: 145px;
//   z-index: 999999;
//   // padding-right: 35px;
// }
// PC端音乐控制显示开关前
// .btn_wrap {
//   position: absolute;
//   width: 30px;
//   height: 92px;
//   background-color: #0085a1;
//   left: 301px;
//   bottom: 0.01px;
//   opacity: 0.6;
//   border: none;
//   box-shadow: 0 0 10px #ccc;
//   border-radius: 2px;
//   p {
//     color: #3ce9ff;
//     line-height: 40px;
//     margin-top: 5px;
//     opacity: 1;
//     margin-left: 3px;
//     font-family: Comic Sans MS;
//   }
// }

// PC端音乐控制显示开关后
// .btn_wraps {
//   position: absolute;
//   width: 30px;
//   height: 92px;
//   background-color: #0085a1;
//   left: 0;
//   bottom: 0.01px;
//   opacity: 0.6;
//   border: none;
//   box-shadow: 0 0 10px #ccc;
//   border-radius: 2px;
//   p {
//     color: #3ce9ff;
//     line-height: 40px;
//     margin-top: 5px;
//     opacity: 1;
//     margin-left: 3px;
//     font-family: Comic Sans MS;
//   }
// }

// 移动端音乐控制显示开关前
// .btn_wrap_m {
//   position: absolute;
//   width: 30px;
//   height: 82px;
//   background-color: #0085a1;
//   left: 235px;
//   bottom: 0.01px;
//   opacity: 0.6;
//   border: none;
//   box-shadow: 0 0 10px #ccc;
//   border-radius: 2px;
//   p {
//     color: #3ce9ff;
//     line-height: 40px;
//     margin-top: 5px;
//     opacity: 1;
//     margin-left: 3px;
//     font-family: Comic Sans MS;
//   }
// }

// 移动端音乐控制显示开关后
// .btn_wraps_m {
//   position: absolute;
//   width: 30px;
//   height: 82px;
//   background-color: #0085a1;
//   left: 0;
//   bottom: 0.01px;
//   opacity: 0.6;
//   border: none;
//   box-shadow: 0 0 10px #ccc;
//   border-radius: 2px;
//   p {
//     color: #3ce9ff;
//     line-height: 40px;
//     margin-top: 5px;
//     opacity: 1;
//     margin-left: 3px;
//     font-family: Comic Sans MS;
//   }
// }

// .draws-enter-active,
// .draws-leave-active {
//   transition: all 1s ease;
// }
// .draws-enter, .draws-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   left: 0;
// }

// .drawed-enter-active,
// .drawed-leave-active {
//   transition: all 0.00001s ease;
// }
// .drawed-enter, .drawed-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   left: 0;
// }

// .plays {
//   position: fixed;
//   left: 0;
//   opacity: 0.6;
//   border: none;
//   box-shadow: 0 0 10px #ccc;
//   border-radius: 2px;
//   bottom: 145px;
//   z-index: 999999;
// }
// .draw-enter-active,
// .draw-leave-active {
//   transition: all 1s ease;
// }
// .draw-enter, .draw-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   width: 0;
// }
.aside {
  background: #f8f8fd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
  .card {
    border-top: 1px solid #eee;
    .title {
      padding: 10px;
      font-weight: 600;
      color: #808080;
      margin-bottom: 10px;
    }
    .pic {
      width: 100%;
    }
    .row {
      padding: 0 10px;
      & > p {
        color: #bfbfbf;
      }
      .icons {
        padding: 10px 0;
        .iconfont {
          transition: all 0.3s;
          margin: 5px;
          color: #000;
          font-size: 20px;
          background-color: rgba(200, 200, 200, 0.3);
          padding: 8px;
          border-radius: 50%;
          &:hover {
            color: #fff;
            background-color: rgba(0, 133, 166, 0.8);
            border-radius: 5px;
          }
        }
      }

      & > .link {
        color: #bfbfbf;
        display: inline-block;
        padding: 5px;
        transition: all 0.3s;
        &:hover {
          color: #0085a1;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  //pc
  .changePage {
    text-align: center;
    padding-right: 15%;
    .el-pagination {
      display: inline;
    }
  }

  // .plays {
  //   display: none;
  // }
  .aside_wrap {
    display: none;
  }
  .main {
    margin: 0 20px;
    padding: 20px;
  }
}
</style>

<style lang="scss" scoped>
@media (width: 768px) {
  .el-col-sm-4 {
    width: 49.66667%;
  }
}
</style>

<style lang="scss" scoped>
@media only screen and(min-width:430px) and (max-width: 991px) {
  .aside_wrap {
    display: none;
  }
  .el-col-sm-4 {
    width: 100%;
  }
}
</style>


<style lang="scss" scoped>
@media (max-width: 420px) {
  //mobile
  .wrapper {
    padding-bottom: 20%;
  }
  .changePage {
    .el-pagination {
      // display: inline;
      text-align: center;
      margin-bottom: 4.5%;
    }
  }
  // .plays {
  //   position: fixed;
  //   left: 0;
  //   opacity: 0.6;
  //   border: none;
  //   box-shadow: 0 0 10px #ccc;
  //   border-radius: 2px;
  //   bottom: 145px;
  //   z-index: 99999999;
  // }
  .aside_wrap {
    background: #f8f8fd;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(10, 10, 0, 0.1) inset;

    .card {
      border-top: 1px solid #eee;
      .title {
        padding: 10px;
        font-weight: 600;
        color: #808080;
        margin-bottom: 10px;
      }
      .pic {
        width: 100%;
      }
      .row {
        padding: 0 10px;
        & > p {
          color: #bfbfbf;
        }
        .icons {
          padding: 10px 0;
          // text-align: center;
          .iconfont {
            transition: all 0.3s;
            margin: 5px;
            color: #000;
            font-size: 20px;
            background-color: rgba(200, 200, 200, 0.3);
            padding: 8px;
            border-radius: 50%;
            &:hover {
              color: #fff;
              background-color: rgba(0, 133, 166, 0.8);
              border-radius: 5px;
            }
          }
        }

        & > .link {
          color: #bfbfbf;
          display: inline-block;
          padding: 5px;
          transition: all 0.3s;
          &:hover {
            color: #0085a1;
          }
        }
      }
    }
  }
  .card:last-child {
    margin-bottom: 5%;
  }
}
</style>
