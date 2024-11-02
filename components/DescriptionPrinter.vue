<script setup lang="ts">
const props = defineProps<{
  description: string;
}>();
const description = computed(() => props.description.split("\n"));
</script>

<template>
  <div>
    <span v-for="(line, index) in description" :key="index">
      {{ line }}<br v-if="index < description.length - 1" />
    </span>
  </div>
</template>

<style scoped></style>
