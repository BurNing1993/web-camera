<template>
  <video id="video" ref="video" class="w-full h-screen"></video>
  <button
    class="fixed left-1/2 bottom-0 transform -translate-x-1/2 rounded-full w-20 h-20 bg-gray-900"
    @click="onClick"
  ></button>
  <canvas ref="canvas" class="w-full h-screen"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { webCamera } from "../utils/camera";

export default defineComponent({
  name: "Camera",
  props: {},
  setup: () => {
    const video = ref<HTMLVideoElement | null>(null);
    const canvas = ref<HTMLCanvasElement | null>(null);
    let ctx: CanvasRenderingContext2D | null = null;
    onMounted(() => {
      if (video.value) {
        webCamera(video.value!);
      }
      if (canvas.value) {
        ctx = canvas.value.getContext("2d");
      }
    });
    const onClick = () => {
      const width = video.value?.width || 400;
      const height = video.value?.height || 400;
      ctx?.drawImage(video.value!, 0, 0, width, height);
    };
    return {
      video,
      onClick,
    };
  },
});
</script>

<style scoped>
</style>
