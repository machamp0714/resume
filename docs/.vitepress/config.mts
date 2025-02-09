import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tatsuya Oide - Resume",
  description: "スキルシート",
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/machamp0714/resume" },
    ],
  },
  base: "/resume/",
});
