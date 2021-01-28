<template>
  <div class="font-sans ">
    <Camera />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Camera from './components/Camera.vue'

export default defineComponent({
  name: 'App',
  components: {
    Camera
  }
})
</script>

<style></style>