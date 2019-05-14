<template>
  <div class="ws">
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
      pageview: 0
    };
  },

  props: ["items", "currentPage"],
  methods: {
    detail(id) {
      console.log(id);
      this.$router.push({ path: "/detail/" + id });
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
