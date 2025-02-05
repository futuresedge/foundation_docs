/** @format */

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Future's Edge",
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
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
