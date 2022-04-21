/**
 * todo:
 * 
 * @author: YChong
 * @date: 2022-04-01 
 */
<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" @click="tabClick">
    <template v-for="(item, index) in tabInfo" :key="item.path">
      <template v-if="!item.meta?.hideenTab">
        <a-menu-item :key="item.path">
          <template #icon v-if="item.meta?.icon">
            <Icon :icon="item.meta?.icon"></Icon>
          </template>
          {{ item.meta?.title }}
        </a-menu-item>
      </template>
    </template>
  </a-menu>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive :max="5" :exclude="/keep_/">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
onMounted(() => {
  matchParentRouter();
});
// const current = ref<string[]>([props.tabInfo[0].path]);
const router = useRouter();
const tabInfo = ref();
const matchParentRouter = () => {
  tabInfo.value =
    router.currentRoute.value.matched[
      router.currentRoute.value.matched.length - 2
    ].children;
};
const tabClick = ({ key, keyPath }: { key: string; keyPath: string[] }) => {
  // 获取到当前的key,并且跳转
  console.log(key, keyPath, "点击时传入的是");
  let path = keyPath.join("/");
  router.push({
    path: path,
  });
};
</script>
<style scoped>
  .selectItem {
    color: #2f54eb;
    padding: 5px 10px;
    background: rgba(0, 0, 0, 0.5);
  }
  .unSelect {
    color: #ccc;
    padding: 5px 10px;
    background: white;
  }
  .content_tab {
    height: calc(100% - 48px);
    width: 100%;
    overflow-y: scroll;
    position: relative;
  }

  .content_tab_scroll {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    position: relative;
  }
</style>