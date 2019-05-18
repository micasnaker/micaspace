<template>
  <div class="ws">
    <transition name="searchMode">
      <el-input
        class="searchStyle"
        v-if="isSearch"
        style="width:70%"
        v-model="search"
        @keyup.enter.native="searchEnterFun"
        placeholder="请输入内容"
      ></el-input>
    </transition>
    <el-button style="background-color:#0085a1 !important;border-color:#0085a1;" class="btn_search" type="primary" @click="Search">搜索</el-button>
    <!-- 搜索后 -->
    <div v-if="searchData.length>0">
      <div
        @click="detail(item._id)"
        class="card"
        v-for="(item) in searchData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)"
        :key="item.id"
      >
        <router-link :to="'/detail/'+item._id">
          <p class="card_title">{{item.title}}</p>
          <p class="gist">{{item.gist}}</p>
        </router-link>
        <p class="date">{{item.date}}</p>
      </div>
    </div>

    <!-- 搜索前 -->
    <div v-else>
      <div
        @click="detail(item._id)"
        class="card"
        v-for="(item) in items.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)"
        :key="item.id"
      >
        <router-link :to="'/detail/'+item._id">
          <p class="card_title">{{item.title}}</p>
          <p class="gist">{{item.gist}}</p>
        </router-link>
        <p class="date">{{item.date}}</p>
      </div>
    </div>

    <!-- <div class="changePage">
      <el-pagination
        v-show="items.length>0"
        background
        layout="prev, pager, next"
        :total="items.length"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
      >></el-pagination>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // currentPage: 1,
      pageSize: 10,
      pageview: 0,
      search: "",
      // 搜索后的展示数据
      searchData: [],
      isSearch: false
    };
  },

  props: ["items", "currentPage"],
  methods: {
    detail(id) {
      this.$router.push({ path: "/detail/" + id });
    },

    // 键盘回车事件
    searchEnterFun(e) {
      var keyCode = window.event ? e.keyCode : e.which;
      //  console.log('回车搜索',keyCode,e);
      if (keyCode == 13 && this.search) {
        this.Search();
      } else if (this.search.length === 0) {
        this.Search();
      }
    },
    Search() {
      // search 是 v-model="search" 的 search
      this.isSearch = !this.isSearch;
      var search = this.search;
      if (search) {
        this.isSearch = true;
        this.searchData = this.items.filter(function(product) {
          // 每一项数据
          // console.log(product)
          return Object.keys(product).some(function(key) {
            // 每一项数据的参数名
            // console.log(key)
            return (
              String(product[key])
                // toLowerCase() 方法用于把字符串转换为小写。
                .toLowerCase()
                // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                .indexOf(search) > -1
            );
          });
        });
        // console.log(this.searchData);
      } else if (search.length === 0) {
        this.searchData = this.items;
      } else {
        return this.searchData;
        this.isSearch = false;
      }
    }
  }
  // methods: {
  //   handleCurrentChange(val) {
  //     this.currentPage = val;
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.searchMode-enter-active,
.searchMode-leave-active {
  transition: all 1s ease;
}
.searchMode-enter, .searchMode-leave-to /* .fade-leave-active below version 2.1.8 */ {
  width: 0 !important;
}
.card {
  margin: 10px 0 0 0;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  .card_title {
    font-size: 18px;
    font-weight: 600;
    color: #0085a1;
  }
  .gist {
    transition: all 0.3s;
    font-style: italic;
    color: #a3a3a3;
    margin: 5px 0;
    &:hover {
      color: #0085a1;
    }
  }
  .date {
    font-style: italic;
    font-family: Lora, "Times New Roman", serif;
    color: #808080;
  }
}
// .changePage {
//   .el-pagination {
//     text-align: center;
//   }
// }

@media (min-width: 768px) {
  //pc
  .card {
    padding-bottom: 20px;
    .card_title {
      font-size: 26px;
    }
    .gist {
      margin: 10px 0;
    }
  }
}
</style>
