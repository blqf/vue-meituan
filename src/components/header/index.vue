<template>
  <div class="m-header">
    <el-row>
      <top-bar />
    </el-row>
    <el-row>
      <search-bar />
    </el-row>
  </div>
</template>

<script>
import topBar from './top-bar.vue';
import searchBar from './search-bar.vue';
export default {
  components: {
    topBar,
    searchBar
  }
}
</script>

<style lang="scss">
@import '@/assets/css/public/header/index.scss';
</style>