<template>
  <div class="p-1">
    <router-link
      class="flex justify-center w-full text-lg p-2 border border-gray-500"
      to="/camera"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path
          d="M15 12L18 6H30L33 12H15Z"
          fill="none"
          stroke="#333"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <rect
          x="4"
          y="12"
          width="40"
          height="30"
          rx="3"
          fill="none"
          stroke="#333"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path
          d="M24 35C28.4183 35 32 31.4183 32 27C32 22.5817 28.4183 19 24 19C19.5817 19 16 22.5817 16 27C16 31.4183 19.5817 35 24 35Z"
          fill="none"
          stroke="#333"
          stroke-width="4"
          stroke-linejoin="round"
        />
      </svg>
      <span class="ml-2">Camera</span>
    </router-link>
    <router-link
      class="flex justify-center w-full text-lg p-2 mt-10 border border-gray-500"
      to="/upload"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <mask
          id="icon-2714813da2a6568"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="48"
          height="48"
          style="mask-type: alpha"
        >
          <rect width="48" height="48" fill="#333" />
        </mask>
        <g mask="url(#icon-2714813da2a6568)">
          <path
            d="M6 24.0083V42H42V24"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33 15L24 6L15 15"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.9917 32V6"
            stroke="#333"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
      <span class="ml-2"> Upload </span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup(props, context) {
    return {};
  },
});
</script>

<style  scoped>
</style>
