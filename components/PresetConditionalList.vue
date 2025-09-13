<script setup lang="ts">
import {useSettingsStore} from "~/core/settings-store";
import ObjectPrinter from "~/components/ObjectPrinter.vue";

type StringObject = {
  [key: string]: string | number | StringObject;
};
const settingsStore = useSettingsStore();
const settings = settingsStore.settings;
const props = defineProps<{
  item: StringObject;
}>();

const columns = [
  { key: 'conditional', label: 'Description', rowClass: 'max-w-[200px] md:max-w-[500px]' },
  { key: 'status', label: 'Status' },
  { key: 'other', label: 'Other' },
];
</script>

<template>
  <UTable
      :columns="columns"
      :rows="
              Object.entries(props.item).map(([k, v]) => ({
                conditional: {
                  name: settings[k]?.name ?? k,
                  description: settings[k]?.description ?? '',
                  parameters: settings[k]?.parameters ?? '',
                },
                status: (v as unknown as Array<string>)[0],
                other: (v as unknown as Array<string>).slice(1).join(','),
              }))
            "
  >
    <template #status-data="{ row }">
      <span v-if="!row.status">
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
    <template #conditional-data="{ row }">
      <span class="font-bold text-base text-wrap">{{row.conditional.name}}</span>
      <DescriptionPrinter class="italic text-sm text-wrap" :description="row.conditional.description"/>
      <ObjectPrinter class="text-wrap text-xs italic" :obj="row.conditional.parameters"/>
    </template>
  </UTable>
</template>

<style scoped>

</style>