import { defineStore } from "pinia";

export type Settings = {
  [key: string]: {
    name: string;
    description: string;
    parameters?: string;
  };
};

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    settings: {} as Settings,
  }),
  actions: {
    async fetchSettings() {
      const { data } = await useAsyncData<Settings>("settings", () =>
        $fetch(`/api/settings`),
      );
      if (data.value) {
        this.settings = data.value;
      }
    },
  },
});
