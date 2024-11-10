<script setup lang="ts">
import { useSettingsStore } from "~/core/settings-store";
import PresetConditionalList from "~/components/PresetConditionalList.vue";

type StringObject = {
  [key: string]: string | number | StringObject;
};
const props = defineProps<{
  options: StringObject;
}>();
const settingsStore = useSettingsStore();
const settings = settingsStore.settings;
const items = props.options
  ? Object.entries(props.options as StringObject).map(([k, v]) => ({
      key: k,
      label: settings[k]?.name ?? k,
      content: v,
    }))
  : [];
</script>

<template>
  <div>
    <UAccordion
      :items="items"
      multiple
      size="sm"
      open-icon="i-heroicons-plus"
      close-icon="i-heroicons-minus"
    >
      <template #item="{ item }">
        <span v-if="typeof item.content === 'string'" class="ml-2">
          {{ item.content }}
        </span>
        <span v-else-if="Array.isArray(item.content)">
          <UTable :rows="item.content.map((el: string) => ({ name: el }))" />
        </span>
        <span v-else-if="item.key === 'conditionals'">
          <PresetConditionalList :item="item"/>
        </span>
      </template>
    </UAccordion>
  </div>
</template>

<style scoped></style>
