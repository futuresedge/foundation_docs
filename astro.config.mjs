/** @format */

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { ion } from "starlight-ion-theme";
import icon from "astro-icon";
import { locate } from "@iconify/json";

const huge = locate("hugeicons");

// https://astro.build/config
export default defineConfig({
  integrations: [
    [icon()],
    starlight({
      title: "Future's Edge",
      plugins: [ion()],
      lastUpdated: true,
      social: {
        github: "https://github.com/futuresedge",
      },
      sidebar: [
        {
          label: "Foundation",
          collapsed: true,
          autogenerate: { directory: "foundation" },
        },
        {
          label: "Governance",
          collapsed: true,
          autogenerate: { directory: "governance" },
        },
        {
          label: "Handbooks",
          collapsed: true,
          autogenerate: { directory: "agent-handbook" },
        },
        // {
        //   label: "Guides",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "Example Guide", slug: "guides/example" },
        //   ],
        // },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
      customCss: ["./src/tailwind.css"],
      // components: {
      //   // Override the default Hero component.
      //   Hero: "./src/components/Hero.astro",
      // },
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
