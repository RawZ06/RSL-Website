<script setup lang="ts">
import PresetList from "~/components/PresetList.vue";
import { useSettingsStore } from '~/core/settings-store';

const {data, status} = await useAsyncData<string[]>("presets", () => $fetch(`/api/preset`));

// Utiliser le store pour initialiser les données
const settingsStore = useSettingsStore();
await settingsStore.fetchSettings();
const tabs = data.value?.map(item => ({label: item, key: item}));
</script>

<template>
 <div class="container mx-auto mt-3">
   <template v-if="data && status == 'success'">
     <UTabs :items="tabs" class="w-full">
       <template #item="{ item }">
         <PresetList :preset="item.key" />
       </template>
     </UTabs>
   </template>
 </div>
</template>

<style scoped>

</style>