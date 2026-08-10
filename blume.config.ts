import { defineConfig } from "blume";

export default defineConfig({
  title: "Harutaka's portfolio",
  description: "はるたかのポートフォリオサイトです。Node.js系のWebアプリ制作はお任せください。",
  feedback: false,

  github: {
    owner: "harutaka",
    repo: "harutaka-portfolio",
    branch: "main",
  },

  deployment: {
    site: "https://harutaka.github.io",
    base: "/harutaka-portfolio",
  },

  i18n: {
    defaultLocale: "ja",
    locales: [{ code: "ja", label: "日本語" }],
  },
});
