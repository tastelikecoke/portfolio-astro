import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const games = defineCollection({
  loader: glob({base: './src/contents/games' , pattern: '**/*.md', }),
  schema: ({image}) => z.object({
    title: z.string(),
    gametitle: z.string(),
    order: z.number(),
    links: z.record(z.string().url()),
    images: z.array(image()),
  }),
});
const webs = defineCollection({
  loader: glob({base: './src/contents/web' , pattern: '**/*.md', }),
  schema: ({image}) => z.object({
    title: z.string(),
    order: z.number(),
    keywords: z.array(z.string()),
    images: z.array(image()).optional(),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { games, webs };