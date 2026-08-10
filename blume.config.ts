import { defineConfig } from "blume";

export default defineConfig({
  title: "Harutaka's portfolio",
  description: "Documentation powered by Blume.",
  feedback: false,

  i18n: {
    defaultLocale: "ja",
    locales: [{ code: "ja", label: "日本語" }],
  },
});
