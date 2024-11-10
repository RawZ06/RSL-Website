import { defineStore } from "pinia";

export const useHelpStore = defineStore("help", {
  state: () => ({
    help: "",
  }),
  actions: {
    async fetchHelp() {
      const { data } = await useAsyncData<string>("help", () =>
        $fetch(`/api/help`),
      );
      if (data.value) {
        this.help = data.value;
      }
    },
  },
});
