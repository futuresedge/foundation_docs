/** @format */

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
// import { ion } from "starlight-ion-theme";
import icon from "astro-icon";
import { locate } from "@iconify/json";

const huge = locate("hugeicons");

// https://astro.build/config
export default defineConfig({
  site: "https://docs.futuresedge.agency",
  integrations: [
    [icon()],
    starlight({
      title: "Future's Edge",
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
      ],
      lastUpdated: true,
      social: {
        github: "https://github.com/futuresedge",
      },
      customCss: ["./src/tailwind.css"],
      // components: {
      //   // Override the default Hero component.
      //   Hero: "./src/components/Hero.astro",
      // },
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
