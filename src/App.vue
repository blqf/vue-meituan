<template>
  <div id="app">
    <!-- 组件化思想 -->
    <router-view />
  </div>
</template>

<script>
import defaultPage from '@/views/layout/default.vue';
import blankPage from '@/views/layout/blank.vue';
export default {
  components: {
    defaultPage,
    blankPage
  }
};
</script>
