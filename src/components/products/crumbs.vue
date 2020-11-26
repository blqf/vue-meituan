<template>
  <div class="m-crumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item><router-link to="/">{{ $store.state.position.name }}美团</router-link></el-breadcrumb-item>
      <el-breadcrumb-item>{{ $store.state.position.name }}{{ $route.params.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
