<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      {{ $store.state.position.name }}
      <router-link class="changeCity" :to="{ name: 'changecity' }">切换城市</router-link>
    </div>
    [
      <a href="#" v-for="(item, index) in detailPos" :key="index">{{ item.name }}</a>
    ]
    <div class="m-user" v-if="!$store.state.userName">
      <router-link class="loign" :to="{ name: 'login' }">立即登录</router-link>
      <router-link class="register" :to="{ name: 'register' }">注册</router-link>
    </div>
  </div>
</template>

<script>
import apis from '@/api/index.js';
export default {
  data() {
    return {
      detailPos: []
    }
  },
  watch: {
    "$store.state.position": function () {
      this.detailPos = this.$store.state.position.nearCity;
    }
  },
  created () {
    apis.getCurPos().then((res) => {
      this.$store.dispatch('setPosition', res.data.data);
      this.detailPos = res.data.data.nearCity;
    })
    console.log(this.$store.state);
  }
}
</script>