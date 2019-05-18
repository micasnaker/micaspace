<template>
  <div id="content">
    <a @click="toHome" href="javascript:;" class="toHome">返回首页</a>
    <h1 class="title">{{type=='article'?'文章列表':'demo列表'}}</h1>
    <div class="tab-box">
      <el-button-group>
        <el-button :type="type=='article'?'primary':'info'" @click="toggle">
          <i class="iconfont icon-archives"></i> Article
        </el-button>
        <el-button :type="type=='demo'?'primary':'info'" @click="toggle">
          <i class="iconfont icon-play"></i> Demo
        </el-button>
      </el-button-group>
    </div>
    <div v-if="type=='article'">
      <div class="changePages">
        <el-pagination
          v-show="articleList.length>0"
          background
          small
          layout="prev, pager, next"
          :total="articleList.length"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
        >></el-pagination>
      </div>

      <div class="changePage">
        <el-pagination
          v-show="articleList.length>0"
          background
          layout="prev, pager, next"
          :total="articleList.length"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
        >></el-pagination>
      </div>
        <el-input style="width:70%" v-model="search" @keyup.enter.native="searchEnterFun" placeholder="请输入内容"></el-input>
        <el-button class="btn_search" type="primary" @click="Search">搜索</el-button>
      <el-button @click="handleAdd()" class="btn-add">新增+</el-button>
      <!-- 搜索后 -->
      <el-table
        :data="searchData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)"
        v-if="searchData.length>0"
        style="width: 100%"
        header-align="right"
        border
        stripe
      >
        <el-table-column label="标题" width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column label="日期" width="250">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="摘要" width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.gist.slice(0,30) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="分类" width="250">
          <template slot-scope="scope">
            <span v-if="scope.row.category.length === 0">未分类</span>
            <el-tag
              v-else
              class="tag_margin"
              type="primary"
              v-for="tag in scope.row.category"
              :key="tag.id"
            >{{ tag }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleLook(scope.$index, scope.row)">查看</el-button>
            <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 搜索前 -->
      <el-table
        :data="articleList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)"
        v-else
        style="width: 100%"
        header-align="right"
        border
        stripe
      >
        <el-table-column label="标题" width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column label="日期" width="250">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="摘要" width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.gist.slice(0,30) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="分类" width="250">
          <template slot-scope="scope">
            <span v-if="scope.row.category.length === 0">未分类</span>
            <el-tag
              v-else
              class="tag_margin"
              type="primary"
              v-for="tag in scope.row.category"
              :key="tag.id"
            >{{ tag }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleLook(scope.$index, scope.row)">查看</el-button>
            <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div v-if="type=='demo'">
      <el-button @click="handleAdd2()" class="btn-add">新增+</el-button>
      <el-table :data="demoList" style="width: 100%" header-align="right" border stripe>
        <el-table-column label="标题" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column label="日期" width="200">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="file" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.file }}</span>
          </template>
        </el-table-column>
        <el-table-column label="图片" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.pic }}</span>
          </template>
        </el-table-column>
        <el-table-column label="摘要" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.gist.slice(0,30) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleLook2(scope.$index, scope.row)">查看</el-button>
            <el-button size="mini" type="success" @click="handleEdit2(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete2(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { checkAdmin } from "../../../static/js/public.js";
import { webUrl } from "../../../static/js/public.js";

export default {
  mixins: [checkAdmin],
  data() {
    return {
      articleList: [],
      demoList: [],
      type: "article",
      currentPage: 1,
      pageSize: 10,
      search: "",
      // 原本展示数据
      list: [],
      // 搜索后的展示数据
      searchData: []
    };
  },
  beforeCreate: function() {},
  mounted: function() {
    // 获取文章列表
    this.$axios.post(webUrl + "articleList").then(res => {
      if (res) {
        this.articleList = res.data.reverse();
      }
    });
    // 获取demo列表
    this.$axios.post(webUrl + "demoList").then(res => {
      if (res) {
        this.demoList = res.data.reverse();
      }
    });
  },
  methods: {
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
      var search = this.search;
      if (search) {
        this.searchData = this.articleList.filter(function(product) {
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
      } else if (search.length === 0) {
        this.searchData = this.list;
      } else {
        return this.searchData;
      }
    },
    // 分页
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    toHome: function() {
      this.$router.replace({ name: "home" });
    },
    toggle() {
      //切换
      this.type = this.type == "article" ? "demo" : "article";
    },
    handleAdd() {
      //新增
      this.$router.push("/admin/edit");
    },
    handleAdd2() {
      //新增-demo
      this.$router.push("/admin/editt");
    },
    handleLook(index, row) {
      //查看
      let id = row._id;
      window.open("#/detail/" + id);
    },
    handleLook2(index, row) {
      //查看-demo
      window.open("#/demo/");
    },
    handleEdit(index, row) {
      //编辑
      let id = row._id;
      this.$router.push("/admin/edit/" + id);
    },
    handleEdit2(index, row) {
      //编辑-demo
      let id = row._id;
      this.$router.push("/admin/editt/" + id);
    },
    handleDelete(index, row) {
      //删除
      let self = this;
      let _id = row._id;
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          self.$axios
            .post(webUrl + "admin/deleteArticle", { _id: _id })
            .then(res => {
              if (res.data.status == 1) {
                self.$message({
                  type: "success",
                  message: "删除成功!"
                });
                self.fetchData();
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleDelete2(index, row) {
      //删除--demo
      let self = this;
      let _id = row._id;
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          self.$axios
            .post(webUrl + "admin/deleteDemo", { _id: _id })
            .then(res => {
              if (res.data.status == 1) {
                self.$message({
                  type: "success",
                  message: "删除成功!"
                });
                self.fetchData2();
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    fetchData: function() {
      // 更新数据
      this.$axios.post(webUrl + "articleList").then(res => {
        if (res) {
          this.articleList = res.data.reverse();
        }
      });
    },
    fetchData2: function() {
      // 更新数据---demo
      this.$axios.post(webUrl + "demoList").then(res => {
        if (res) {
          this.demoList = res.data.reverse();
        }
      });
    }
  }
};
</script>


<style>
.el-table .cell {
  text-align: center;
}
.el-table--border {
  margin-bottom: 10%;
}
</style>

<style scoped>
</style>

<style lang="scss" scoped>
#content {
  width: 86%;
  margin: 0 auto;
  .changePage {
    // padding-right: 15%;
    .el-pagination {
      text-align: center;
      // display: inline;
    }
  }
  .changePages {
    // padding-right: 15%;
    .el-pagination {
      text-align: center;
      // display: inline;
    }
  }
  > .title {
    margin: 30px 0;
    text-align: center;
  }
  .tab-box {
    text-align: center;
    margin-bottom: 20px;
  }
  .search {
    width: 30%;
    display: flex;
  }
  .btn-add {
    float: right;
    margin-bottom: 20px;
  }
}
</style>
<style lang="scss" scoped>
@media (max-width: 420px) {
  //mobile
  #content {
    width: 90%;
    .el-button + .el-button {
      margin-left: 0;
    }
    .btn_search {
      display: none;
    }
    .toHome {
      display: block;
      margin-top: 5px;
      width: 60px;
    }
    .changePage {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
@media (min-width: 768px) {
  //pc
  .changePages {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
@media (width: 768px) {
  //ipad
  #content {
    .el-button + .el-button {
      margin-left: 0;
    }
    .changePages {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
@media (width: 1024px) {
  //ipad pro
  #content {
    .el-button + .el-button {
      margin-left: 0;
    }

    .changePages {
      display: none;
    }
  }
}
</style>

