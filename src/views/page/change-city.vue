<template>
  <div class="page-changeCity">
    <el-row><province /></el-row>
    <el-row><hot-city title="热门城市:" :list="hotList" /></el-row>
    <el-row><hot-city title="最近访问:" :list="recentList" /></el-row>
    <el-row><m-category /></el-row>
  </div>
</template>

<script>
import apis from '@/api/index.js';
import province from "@/components/change-city/province.vue";
import hotCity from "@/components/change-city/hot-city.vue";
import MCategory from "@/components/change-city/category.vue";
export default {
  components: {
    province,
    hotCity,
    MCategory
  },
  data() {
    return {
      hotList: [],
      recentList: [],
    };
  },
  created () {
    apis.getHotCity().then((res) => {
      this.hotList = res.data.data;
    });
    apis.getRecentCity().then((res) => {
      this.recentList = res.data.data;
    });
  }
};
</script>
