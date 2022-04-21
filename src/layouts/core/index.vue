/**
 * todo:
 * 
 * @author: YChong
 * @date: 2022-04-01 
 */
<template>
  <a-layout class="app-wrapper">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">YCAdmin</div>
      <Slider :collapsed="collapsed" :routers="viewRouters" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; ">
        <Header :collapsed="collapsed" @changeCollapsed="() => collapsed = !collapsed"></Header>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Header from "./header/index.vue";
import Slider from "./Slidermenu/index.vue";
import { viewRouters } from "@/router/index";

onMounted(() => { })
const collapsed = ref<boolean>(false);
</script>
<style lang="less" scoped>
.app-wrapper {
  position: relative;
  height: 100vh;
  width: 100%;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
