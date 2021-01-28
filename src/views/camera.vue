<template>
  <CameraComp />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CameraComp from "../components/Camera.vue";

export default defineComponent({
  name: "Camera",
  components: { CameraComp },
  setup(props, context) {
    return {};
  },
});
</script>

<style   scoped>
</style>
