<template>
  <div
    class="m-2  flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
  >
    <div class="space-y-1 text-center">
      <svg
        class="mx-auto h-12 w-12 text-gray-400"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="flex text-sm text-gray-600">
        <label
          for="file-upload"
          class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          <span>Upload a file</span>
          <input
            id="file-upload"
            name="file-upload"
            class="sr-only"
            ref="file"
            type="file"
            accept="image/*"
            @change="onChange"
          />
        </label>
        <p class="pl-1">or drag and drop</p>
      </div>
      <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
    </div>
  </div>
  <div>
    {{ result }}
  </div>
  <img :src="imgSrc" alt="image" class="w-full" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { searchFaceByFile } from "../api/face";

export default defineComponent({
  name: "unload",
  setup(props, context) {
    const imgSrc = ref(
      "https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide"
    );
    const result = ref("");
    const file = ref<HTMLInputElement | null>(null);
    const onChange = async () => {
      const files = file.value?.files;
      console.log(files);
      if (files && files.length > 0) {
        const img = files[0];
        const data = new FormData();
        data.append("file", img);
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = function (e) {
          imgSrc.value = e.target?.result as string;
        };
        const res = await searchFaceByFile(data);
        console.log(res);
        result.value = JSON.stringify(res.data);
      }
    };
    return {
      onChange,
      file,
      imgSrc,
      result,
    };
  },
});
</script>

<style  scoped>
</style>
