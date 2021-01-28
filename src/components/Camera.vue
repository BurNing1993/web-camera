<template>
  <div class="relative min-h-screen overflow-hidden">
    <video
      id="video"
      ref="video"
      class="absolute top-0 left-0 w-full cover max-h-screen"
      autoplay
      loop
    ></video>
    <button
      class="fixed left-1/2 bottom-0 transform -translate-x-1/2 rounded-full w-20 h-20 opacity-70 bg-black focus:outline-none"
      @click="onClick"
      :disabled="disabled"
    ></button>
    <button
      class="fixed left-2/3 bottom-0 flex items-center justify-center rounded-full w-20 h-20 opacity-70 bg-black focus:outline-none"
      @click="switchCamera"
    >
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="#ccc"
      >
        <path
          d="M872.1 197.6L684.4 72.5c-5.3-3.5-12.4 0.3-12.4 6.7V160H384C207.3 160 64 303.3 64 480v64c0 45.9 9.7 89.6 27.1 129 2 4.6 7.6 6.2 11.8 3.5l95.4-63.6c3-2 4.3-5.7 3.2-9.2-6.2-19-9.4-39.1-9.4-59.7v-64c0-51.3 20-99.5 56.2-135.8C284.5 308 332.7 288 384 288h288v81.3c0 6.4 7.1 10.2 12.4 6.7L872 250.9c19.1-12.7 19.1-40.6 0.1-53.3zM151.2 833.3l187.6 125.1c5.3 3.5 12.4-0.3 12.4-6.7v-80.8h288c176.7 0 320-143.3 320-320v-64c0-45.9-9.7-89.6-27.1-129-2-4.6-7.6-6.2-11.8-3.5L825 418c-3 2-4.3 5.7-3.2 9.2 6.2 19 9.4 39.1 9.4 59.7v64c0 51.3-20 99.5-56.2 135.8-36.3 36.3-84.5 56.2-135.8 56.2h-288v-81.3c0-6.4-7.1-10.2-12.4-6.7L151.2 780c-18.9 12.7-18.9 40.6 0 53.3z"
        ></path>
      </svg>
    </button>
    <canvas ref="canvas" class="hidden w-full"></canvas>
    <img
      :src="imgSrc"
      alt="image"
      class="absolute right-0 top-0 w-20 md:w-30 lg:w-60"
    />
  </div>
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
    const img = ref<HTMLImageElement | null>(null);
    let ctx: CanvasRenderingContext2D | null = null;
    const imgSrc = ref(
      "https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide"
    );
    const disabled = ref(false);
    onMounted(() => {
      webCamera(video.value!);
      ctx = canvas.value!.getContext("2d");
    });
    const onClick = async () => {
      try {
        disabled.value = true;
        const width = video.value?.offsetWidth || 400;
        const height = video.value?.offsetHeight || 400;
        canvas.value!.width = width;
        canvas.value!.height = height;
        console.log(width, height);
        ctx?.drawImage(video.value!, 0, 0, width, height);
        const src = canvas.value?.toDataURL();
        imgSrc.value = src || "";
        // if (src) {
        //   const res = await searchFace(src);
        //   console.log(res);
        // }
      } catch (error) {
        console.error(error);
      } finally {
        disabled.value = false;
      }
    };

    const switchCamera = () => {
      webCamera(video.value!, true);
    };
    return {
      video,
      onClick,
      canvas,
      img,
      ctx,
      imgSrc,
      disabled,
      switchCamera,
    };
  },
});
</script>

<style scoped>
</style>
