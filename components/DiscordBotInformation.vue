<script setup lang="ts">
import {useHelpStore} from "~/core/help-store";

const isOpen = ref(false)
const helpStore = useHelpStore();
const help = helpStore.help;
</script>

<template>
<div class="my-6">
  <UCard>
    <template #header>
      <div class="flex items-center gap-2">
        <UIcon name="i-logos-discord-icon" class="size-5" />
        <h3 class="font-bold">Use Discord RSLBeginnerBot</h3>
      </div>
    </template>

    <p>RSLBeginnerBot#1457 is a Discord bot for generating seeds using predefined presets.</p>
    <p>Type /seed help to view available options and learn the commands for seed generation.</p>
    <p>The bot provides quick access to various configurations directly on Discord, making seed generation straightforward and accessible.</p>
    <div class="mt-4">
      <UButton
          to="https://discord.com/users/1247572932151218188"
          icon="i-logos-discord-icon"
          size="sm"
          color="primary"
          variant="link"
          label="Contact Discord RSL Bot"
      />
    </div>
  </UCard>

  <UModal v-model:open="isOpen">
    <UButton v-if="false" label="Open" @click="isOpen = true" />

    <template #content>
      <UCard
          :ui="{
            body: 'grow overflow-y-auto'
          }"
          class="h-full flex flex-col"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-neutral-900 dark:text-white">
              Discord RSL Bot Help
            </h3>
            <UButton color="neutral" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <MDC :value="help" tag="article" class="prose prose-sm dark:prose-invert" />
      </UCard>
    </template>
  </UModal>
</div>
</template>

<style scoped>

</style>