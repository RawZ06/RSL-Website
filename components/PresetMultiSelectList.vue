<script setup lang="ts">
import { useSettingsStore } from "~/core/settings-store";

type StringObject = {
  [key: string]: string | number | StringObject;
};
const props = defineProps<{
  multiselect: StringObject;
}>();
const settingsStore = useSettingsStore();
const settings = settingsStore.settings;
const items = props.multiselect
  ? Object.entries(props.multiselect as StringObject).map(([k, v]) => ({
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
        <div class="my-4">
          <ULandingCard
            :title="item.label"
            icon="i-heroicons-document-text-16-solid"
            color="primary"
          >
            <template #description>
              <DescriptionPrinter
                :description="settings[item.key]?.description ?? ''"
              />
            </template>
          </ULandingCard>
        </div>
        <div class="ml-2">
          <span v-if="item.content === 0">
            <UBadge
              color="red"
              variant="solid"
              :ui="{ rounded: 'rounded-full' }"
              >Disabled</UBadge
            >
          </span>
          <span v-else-if="item.content === 100">
            <UBadge variant="solid" :ui="{ rounded: 'rounded-full' }"
              >Enable</UBadge
            >
          </span>
          <span v-else> {{ item.content }}% </span>
        </div>
      </template>
    </UAccordion>
  </div>
</template>

<style scoped></style>
