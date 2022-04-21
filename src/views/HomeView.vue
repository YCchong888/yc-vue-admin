<template>
  <div class="home">
    <Latout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Latout from "@/layouts/core/index.vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    Latout
  },
});
</script>
