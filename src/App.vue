<template>
  <div class="font-sans">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Camera from "./components/Camera.vue";
import vconsole from "vconsole";

export default defineComponent({
  name: "App",
  components: {
    Camera,
  },
  setup() {
    onMounted(() => {
      if (import.meta.env.MODE === "production") {
        new vconsole();
      }
    });
  },
});
</script>

<style></style>
