/** @format */

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
// import { ion } from "starlight-ion-theme";
import icon from "astro-icon";
import { locate } from "@iconify/json";
// import starlightBlog from "starlight-blog";
import starlightHeadingBadges from "starlight-heading-badges";
// import starlightThemeObsidian from "starlight-theme-obsidian";
// import starlightSiteGraph from "starlight-site-graph";
// import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightCoolerCredit from "starlight-cooler-credit";

const huge = locate("hugeicons");

// https://astro.build/config
export default defineConfig({
  site: "https://docs.futuresedge.agency",

  integrations: [
    [icon()],
    starlight({
      title: "Future's Edge",
      description: "Future's Edge Foundation Documentation",

      editLink: {
        baseUrl: "https://github.com/futuresedge/foundation_docs/edit/main",
      },
      plugins: [
        // ion(),
        starlightCoolerCredit({
          credit: {
            title: {
              en: "Getting ideas, see a problem?",
              de: "Erstellt mit Astro",
            },
            href: "https://github.com/futuresedge/foundation_docs",
            description: {
              en: "You can create, edit and suggest changes!",
              de: "Willst du deine eigene statische Website erstellen?",
            },
          },
        }),
        // starlightBlog({
        //   title: {
        //     en: "Pete's Blog",
        //     // fr: "Mon Blog",
        //   },
        // }),
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
      favicon: "favicon.ico",
      customCss: ["./src/tailwind.css"],
      components: {
        // Override the default `SocialIcons` component.
        SocialIcons: "./src/components/NavLinks.astro",
      },
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
