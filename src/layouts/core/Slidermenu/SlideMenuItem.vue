/**
 * todo:
 * 
 * @author: YChong
 * @date: 2022-04-04 
 */
<template>
  <a-sub-menu :key="menuInfo.path">
    <template #icon v-if="menuInfo.meta?.icon">
      <Icon :icon="menuInfo.meta?.icon"></Icon>
    </template>
    <template #title>{{ menuInfo.meta?.title }}</template>
    <template v-for="item in menuInfo?.children" :key="item.path">
      <template v-if="!item.meta?.hideenMenu">
        <template v-if="item.meta?.fixMenu || !item.children">
          <a-menu-item :key="item.path">
            <template #icon v-if="menuInfo.meta?.icon">
              <Icon :icon="item.meta?.icon"></Icon>
            </template>
            {{ item.meta?.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <SlideMenuItem :menu-info="item" :key="item.path" />
        </template>
      </template>
    </template>
  </a-sub-menu>
</template>
<script lang="ts" setup>
import { onMounted, PropType, ref } from 'vue';
import { Icon } from '@/components/Icon'
const props = defineProps({
  menuInfo: {
    type: Object,
    default: () => ({}),
  },
})
onMounted(() => {
  console.log(props.menuInfo, "子菜单")
})
</script>
<style lang="less" scoped>
</style>