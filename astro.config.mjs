/** @format */

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import starlightGiscus from "starlight-giscus";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.futuresedge.agency",

  integrations: [
    starlight({
      title: "Future's Edge",
      tableOfContents: true,
      description: "Future's Edge Foundation Documentation",

      editLink: {
        baseUrl: "https://github.com/futuresedge/foundation_docs/edit/main",
      },
      plugins: [
        // ion(),
        starlightGiscus({
          repo: "futuresedge/foundation_docs",
          repoId: "R_kgDON0fBoA",
          category: "Ideas",
          categoryId: "DIC_kwDON0fBoM4CnHsn",
        }),
        // starlightCoolerCredit({
        //   credit: {
        //     title: {
        //       en: "Getting ideas, see a problem?",
        //       de: "Erstellt mit Astro",
        //     },
        //     href: "https://github.com/futuresedge/foundation_docs",
        //     description: {
        //       en: "You can create, edit and suggest changes!",
        //       de: "Willst du deine eigene statische Website erstellen?",
        //     },
        //   },
        // }),
        // starlightBlog({
        //   title: {
        //     en: "Pete's Blog",
        //     // fr: "Mon Blog",
        //   },
        // }),
        // starlightHeadingBadges(),
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
    tailwind({ applyBaseStyles: true }),
  ],
});
