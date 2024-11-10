<script setup lang="ts">
import {useHelpStore} from "~/core/help-store";

const isOpen = ref(false)
const helpStore = useHelpStore();
const help = helpStore.help;
</script>

<template>
<div class="my-6">
  <ULandingCard
      title="Use Discord RSLBeginnerBot"
      icon="i-logos-discord-icon"
      color="primary"
  >
    <template #description>
      <p>RSLBeginnerBot#1457 is a Discord bot for generating seeds using predefined presets.</p>
      <p>Type !seed help to view available options and learn the commands for seed generation.</p>
      <p>The bot provides quick access to various configurations directly on Discord, making seed generation straightforward and accessible.</p>
      <p><UButton
          icon="i-material-symbols-info"
          size="sm"
          color="primary"
          variant="link"
          label="More informations"
          :trailing="false"
          @click="isOpen = true"
      /></p>
      <UButton
          to="https://discord.com/users/1247572932151218188"
          icon="i-logos-discord-icon"
          size="sm"
          color="primary"
          variant="link"
          label="Contact Discord RSL Bot"
          :trailing="false"
      />
    </template>
  </ULandingCard>

  <UModal v-model="isOpen">
    <UCard
        :ui="{
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow'
          }
        }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Discord RSL Bot Help
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
        </div>
      </template>

      <MDC :value="help" tag="article" class="prose prose-sm dark:prose-invert" />
    </UCard>
  </UModal>
</div>
</template>

<style scoped>

</style>