<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :class="{ active: kind === item.tab }"
        :data-type="item.tab"
        :key="index"
      >
        {{ item.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <p class="product-title">{{ item.title }}</p>
            <p class="sub-title" :title="item.subTitle">
              {{ item.subTitle }}
            </p>
            <p class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{ item.price }}</span>
              </span>
              <!-- <span class="old-price">￥{{ item.price_info.old_price }}</span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </p> -->
              <!-- <p class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </p>
            <p class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{ item.price_info.avg_price }}</span>
                <span class="units">/{{ item.price_info.units }}均</span>
              </span>
            </p> -->
            </p>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import apis from "@/api/index.js";
export default {
  props: ["nav"],
  data() {
    return {
      resultData: [],
      kind: "all",
    };
  },
  methods: {
    over(e) {
      const dd = e.target;
      let tagName = dd.tagName.toLowerCase();
      if (tagName !== "dd") {
        return false;
      }
      this.kind = dd.getAttribute("data-type");
      //动态获取数据ajax请求
    },
  },
  created() {
    apis.getStyle().then((res) => {
      this.resultData = res.data.data;
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>