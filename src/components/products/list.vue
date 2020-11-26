<template>
  <div class="m-products-list">
    <el-row>
      <ul>
        <li
          v-for="item in nav"
          :class="{ 's-nav-active': item.active }"
          :key="item.key"
        >
          {{ item.name }}
        </li>
      </ul>
    </el-row>
    <el-row>
      <m-item
        v-for="(item, index) in productList"
        :meta="item"
        :key="index"
      />
    </el-row>
  </div>
</template>

<script>
import apis from "@/api/index.js";
import MItem from "./item.vue";
export default {
  components: {
    MItem,
  },
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true,
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false,
        },
        {
          key: "s-sale",
          name: "人气最高",
          active: false,
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false,
        },
      ],
      productList: [],
    };
  },
  created() {
    apis.getProductsList().then((res) => {
      console.log(res.data.data[0]);
      this.productList = res.data.data;
    });
  },
};
</script>