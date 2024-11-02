<script setup lang="ts">
import PresetList from "~/components/PresetList.vue";
import { useSettingsStore } from "~/core/settings-store";
import { useMobile } from "~/hooks/useMobile";

const { data, status } = await useAsyncData<string[]>("presets", () =>
  $fetch(`/api/preset`),
);

// Utiliser le store pour initialiser les données
const settingsStore = useSettingsStore();
await settingsStore.fetchSettings();
const tabs = data.value?.map((item) => ({ label: item, key: item }));
const isMobile = useMobile();
</script>

<template>
  <div class="container mx-auto mt-3">
    <template v-if="data && status == 'success'">
      <UTabs
        :items="tabs"
        class="w-full"
        :orientation="isMobile ? 'vertical' : 'horizontal'"
      >
        <template #item="{ item }">
          <PresetList :preset="item.key" />
        </template>
      </UTabs>
    </template>
  </div>
</template>

<style scoped></style>
