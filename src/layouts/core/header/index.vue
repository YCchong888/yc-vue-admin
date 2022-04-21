<!--
 * @Author: your name
 * @Date: 2022-04-01 10:23:26
 * @LastEditTime: 2022-04-15 15:09:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \yc-vue-admin\src\layouts\core\header\index.vue
-->
<template>
  <a-row type="flex" class="nav_container">
    <a-col>
      <menu-unfold-outlined
        v-if="collapsed"
        class="trigger"
        @click="hadleCollapsed"
      />
      <menu-fold-outlined v-else class="trigger" @click="hadleCollapsed" />
    </a-col>
    <a-col  class="nav">
      <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
      </a-breadcrumb>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { Breadcrumb, BreadcrumbItem } from "ant-design-vue";
import { emit } from "process";
export default defineComponent({
  name: "Header",
  props: {
    collapsed: { type: Boolean, required: true },
  },
  emits: ["changeCollapsed"],
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    [Breadcrumb.name]: Breadcrumb,
    [BreadcrumbItem.name]: BreadcrumbItem,
  },
  setup(props, { emit }) {
    const hadleCollapsed = () => {
      emit("changeCollapsed", !props.collapsed);
    };
    onMounted(() => {});
    return {
      hadleCollapsed,
    };
  },
});
</script>
<style lang="less" scoped>
  .nav_container {
    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;
    }
    .trigger:hover {
      color: #1890ff;
    }
    .nav {
      line-height: 100%;
      align-self: center;
    }
  }
</style>