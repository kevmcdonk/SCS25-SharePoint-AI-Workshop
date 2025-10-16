import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "#SCS25SharePointAIAgent",
  base: "/SCS25-SharePoint-AI-Workshop/",
  description: "#SCS25 - SharePoint AI and Agents Workshop",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Sections",
        items: [
          { text: "Collaboration", link: "/collaboration/" },
        ],
      },
      { text: "Resources", link: "/resources" },
    ],

    sidebar: [
      {
        text: "Labs",
        items: [
          { text: "Collaboration", link: "/collaboration/" },
        ],
      },
      {
        text: "Resources",
        items: [{ text: "Resources", link: "/resources" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/kevmcdonk/SCS25-SharePoint-AI-Workshop",
      },
    ],
  },
});
