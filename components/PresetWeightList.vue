<script setup lang="ts">
import { parseValues } from "~/core/parse-values";
import { useSettingsStore } from "~/core/settings-store";

type StringObject = {
  [key: string]: string | number | StringObject;
};
const props = defineProps<{
  weights: StringObject;
}>();
const settingsStore = useSettingsStore();
const settings = settingsStore.settings;
const allItems = props.weights
  ? Object.entries(props.weights as StringObject).map(([k, v]) => ({
      key: k,
      label: settings[k]?.name ?? k,
      content: parseValues(v as Record<string, number>),
    }))
  : [];
const searchValue = ref("");
const items = computed(() => {
  return searchValue.value && searchValue.value.length > 0
    ? allItems.filter((item) =>
        (settings[item.label]?.name ?? item.label)
          .toLocaleLowerCase()
          .includes(searchValue.value.toLocaleLowerCase()),
      )
    : allItems;
});
</script>

<template>
  <div>
    <div class="my-5">
      <UInput
        v-model="searchValue"
        icon="i-heroicons-magnifying-glass-20-solid"
        size="xl"
        color="primary"
        :trailing="false"
        placeholder="Search..."
      />
    </div>
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
        <UTable :rows="item.content">
          <template #value-data="{ row }"> {{ row.value }}% </template>
          <template #status-data="{ row }">
            <span v-if="row.status">
              <UBadge
                color="red"
                variant="solid"
                :ui="{ rounded: 'rounded-full' }"
                >Disabled</UBadge
              >
            </span>
            <span v-else>
              <UBadge variant="solid" :ui="{ rounded: 'rounded-full' }"
                >Enable</UBadge
              >
            </span>
          </template>
        </UTable>
      </template>
    </UAccordion>
  </div>
</template>

<style scoped></style>
