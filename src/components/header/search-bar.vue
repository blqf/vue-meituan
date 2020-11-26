<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img
          src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
          alt=""
        />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @focus="isHotPlace = true"
            @blur="blur"
            @input="input"
          ></el-input>
          <el-button type="warning" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace && !searchWord">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index">
              <router-link :to="{ name: 'goods', params: { name: item } }">{{
                item
              }}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="searchWord && isHotPlace">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link :to="{ name: 'goods', params: { name: item } }">{{
                item
              }}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item, index) in suggestList" :key="index">{{ item }}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import apis from '@/api/index.js';
export default {
  data() {
    return {
      searchWord: "",
      isHotPlace: false,
      hotPlaceList: '',
      searchList: [],
      suggestList: [],
    };
  },
  methods: {
    blur() {
      setTimeout(() => {
        this.isHotPlace = false;
      }, 200);
    },
    input() {
      apis.getSearchWord().then((res) => {
        this.searchList = res.data.data.list.filter((item, index) => {
          return item.indexOf(this.searchWord) > -1;
        });
      })
    }
  },
  created() {
    apis.getSearchHotWords().then((res) => {
      this.hotPlaceList = res.data.data;
      this.suggestList = res.data.data;
    });
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>