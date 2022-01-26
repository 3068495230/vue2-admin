<template>
  <div class="root">
    <h3>关于</h3>
    <el-input v-model="slogan"></el-input>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      slogan: "我的世界",
    };
  },
};
</script>

<style lang="scss" scoped></style>
