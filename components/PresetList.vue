<script setup lang="ts">

import PresetWeightList from "~/components/PresetWeightList.vue";
type StringObject = {
  [key: string]: string|number|StringObject
}
const props = defineProps<{
  preset: string;
}>();
const {data} = await useAsyncData<StringObject>(props.preset, () => $fetch(`/api/preset/${props.preset}`), );

</script>

<template>
<div>
  <h1 class="text-xl font-bold my-2">Options</h1>
  <PresetOptionsList :options="data?.options as StringObject" />
  <h1 class="text-xl font-bold my-2">Multiselect</h1>
  <PresetMultiSelectList :multiselect="data?.multiselect as StringObject" />
  <h1 class="text-xl font-bold my-2">Weights</h1>
  <PresetWeightList :weights="data?.weights as StringObject" />
</div>
</template>

<style scoped>

</style>