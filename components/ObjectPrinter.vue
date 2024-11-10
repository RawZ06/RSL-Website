<script setup lang="ts">
const props = defineProps<{
  obj: string;
  class?: string;
}>();
</script>

<template>
  <div v-for="[k, v] in Object.entries(props.obj)" :key="k" :class="props.class">
    - {{k}} : {{v}}
  </div>
</template>

<style scoped></style>
