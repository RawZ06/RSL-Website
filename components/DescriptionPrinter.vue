<script setup lang="ts">
const props = defineProps<{
  description: string;
  class?: string;
}>();
const description = computed(() => props.description.split("\n"));
</script>

<template>
  <div>
    <p v-for="(line, index) in description" :key="index" :class="props.class">
      {{ line }}
    </p>
  </div>
</template>

<style scoped></style>
