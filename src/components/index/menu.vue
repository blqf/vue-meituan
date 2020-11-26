<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menuList"
        :key="index"
        @mouseenter="menuEnter(item)"
      >
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
      v-if="curDetail"
      class="detail"
      @mouseenter="detailEnter"
      @mouseleave="detailLeave"
    >
      <!-- template标签里不能写:key，所以将:key写在子级标签上 -->
      <template v-for="(item, index) in curDetail.items">
        <h2 :key="index">{{ item.title }}</h2>
        <span v-for="(v, i) in item.items" :key="v + '_' + i">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import apis from '@/api/index.js';
export default {
  data() {
    return {
      curDetail: null,
      menuList: [],
    };
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item;
    },
    menuLeave() {
      // 通过延时将curDetail变成null，若在延时时间内鼠标进入了detail区域，则清除定时器，放弃将curDetail变为null
      this.timer = setTimeout(() => {
        this.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    },
  },
  created() {
    apis.getMenuNav().then((res) => {
      this.menuList = res.data.data;
    })
  },
};
</script>