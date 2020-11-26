<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择</dt>
      <dd v-for="(item, index) in zimuList" :key="index">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      class="m-category-section"
      v-for="(item, index) in cityGroup"
      :key="index"
      :id="'city-' + index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{
          city.name
        }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import apis from "@/api/index.js";
export default {
  data() {
    return {
      zimuList: "ABCDEFGHIJKLMNOPQRSTUVWYXZ".split(""),
      cityGroup: [],
    };
  },
  methods: {
    changeCity(item) {
      this.$store.dispatch('setPosition', item);
      this.$router.push({ name: 'index' });
    },
  },
  created() {
    apis.getCityList().then((res) => {
      const obj = {};
      res.data.data.forEach((item, index) => {
        if (!obj[item.firstChar]) {
          obj[item.firstChar] = [];
        }
        obj[item.firstChar].push(item);
        this.cityGroup = obj;
      });
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/category.scss";
</style>