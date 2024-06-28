import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import node from "@astrojs/node";
import partytown from '@astrojs/partytown'
// https://astro.build/config
export default defineConfig({
  site: "https://euler.josephsilvacasas.com",
  trailingSlash: "never",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  },
  integrations: [mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark"
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }), sitemap(), tailwind(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  })],
  output: "static"
});