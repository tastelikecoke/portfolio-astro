// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const contents = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/data/blog"})
})
