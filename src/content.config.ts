import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

// Define a collection of reviews
const reviews = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
    schema: z.object({
        author: z.string(),
        author_info: z.string().optional(),
        content: z.string(),
        featured: z.boolean(),
        permalink: z.string().optional(),
    }),
})

const collaborations = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/collaborations' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        slug: z.string().optional(),
    }),
})

// Export the collections
export const collections = { reviews, collaborations }
