<!--
 * @Author: your name
 * @Date: 2022-04-01 10:24:10
 * @LastEditTime: 2022-04-15 15:34:16
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \yc-vue-admin\src\layouts\core\Slidermenu\index.vue
-->
/**
 * todo:
 * 
 * @author: YChong
 * @date: 2022-04-01 
 */
<template>
  <a-menu
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @click="menuClick"
  >
    <template v-for="item in routers" :key="item.path">
      <template v-if="item.meta?.fixMenu || !item.children">
        <a-menu-item :key="item.path">
          <template #icon v-if="item.meta?.icon">
            <Icon :icon="item.meta?.icon"></Icon>
          </template>
          {{ item.meta?.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <SlideMenuItem :menu-info="item" />
      </template>
    </template>
  </a-menu>
</template>

<script lang="ts" setup>
import { onMounted, PropType, ref } from 'vue';
import SlideMenuItem from "./SlideMenuItem.vue";
import { Icon } from '@/components/Icon';
import { useRouter } from 'vue-router';
const props = defineProps({
  routers: {
    type: Object,
    default: () => ({}),
  },
  collapsed: { type: Boolean, required: true }
})
onMounted(() => {
  console.log(props.routers[0],"1111111111")
});
const selectedKeys = ref<string[]>([props.routers[0].path]);
const openKeys = ref<string[]>([props.routers[0].path]);
const router = useRouter();
const menuClick = ({ key, keyPath }: { key: string; keyPath: string[] }) => {
  // 获取到当前的key,并且跳转
  console.log(key, keyPath, "点击时传入的是")
  let path =keyPath.join("/");
  router.push({
    path: path
  })
}
</script>
<style lang="less" scoped>
</style>
