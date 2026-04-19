// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  site: "https://sohaibsmahi.github.io",
  base: "/",
  integrations: [
    icon({
      include: {
        lucide: [
          "mail",
          "phone",
          "map-pin",
          "download",
          "arrow-up-right",
          "arrow-right",
          "external-link",
          "github",
          "linkedin",
          "moon",
          "sun",
          "briefcase",
          "graduation-cap",
          "languages",
          "award",
          "sparkles",
          "code",
          "menu",
          "x",
        ],
        "simple-icons": [
          "javascript",
          "typescript",
          "react",
          "nextdotjs",
          "html5",
          "css3",
          "tailwindcss",
          "shadcnui",
          "antdesign",
          "mui",
          "redux",
          "reactrouter",
          "reacthookform",
          "reactquery",
          "chartdotjs",
          "storybook",
          "jest",
          "vitest",
          "cypress",
          "nodedotjs",
          "express",
          "prisma",
          "python",
          "django",
          "fastapi",
          "git",
          "docker",
          "linkedin",
          "github",
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
