<template>
  <div class="page-product">
    <el-row>
      <m-crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <m-category />
        </el-row>
        <el-row>
          <m-list />
        </el-row>
      </el-col>
      <el-col :span="5">map + fav</el-col>
    </el-row>
  </div>
</template>

<script>
import MCrumbs from '@/components/products/crumbs.vue';
import MCategory from '@/components/products/category.vue';
import MList from '@/components/products/list.vue';
export default {
  components: {
    MCrumbs,
    MCategory,
    MList
  }
}
</script>

<style lang="scss">
@import '@/assets/css/products/index.scss';
</style>