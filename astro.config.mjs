/** @format */

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
// import { ion } from "starlight-ion-theme";
import icon from "astro-icon";
import { locate } from "@iconify/json";
import starlightBlog from "starlight-blog";
import starlightHeadingBadges from "starlight-heading-badges";
// import starlightThemeObsidian from "starlight-theme-obsidian";
// import starlightSiteGraph from "starlight-site-graph";
// import starlightSidebarTopics from "starlight-sidebar-topics";

const huge = locate("hugeicons");

// https://astro.build/config
export default defineConfig({
  site: "https://docs.futuresedge.agency",
  integrations: [
    [icon()],
    starlight({
      title: "Future's Edge",
      plugins: [
        starlightBlog({
          title: {
            en: "Pete's Blog",
            // fr: "Mon Blog",
          },
        }),
        starlightHeadingBadges(),
        // starlightThemeObsidian(),
        // starlightSiteGraph(),
      ],
      sidebar: [
        { label: "Home", link: "/" },
        {
          label: "Foundation",
          autogenerate: { directory: "foundation" },
          collapsed: true,
        },
        {
          label: "Strategy",
          autogenerate: { directory: "strategy" },
          collapsed: true,
        },
        {
          label: "Governance",
          autogenerate: { directory: "governance" },
          collapsed: true,
        },
        {
          label: "Knowledge",
          autogenerate: { directory: "knowledge" },
          collapsed: true,
        },
      ],
      lastUpdated: true,
      social: {
        github: "https://github.com/futuresedge",
      },
      favicon: "/public/favicon.ico",
      customCss: ["./src/tailwind.css"],
      // components: {
      //   // Override the default Hero component.
      //   Hero: "./src/components/Hero.astro",
      // },
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
