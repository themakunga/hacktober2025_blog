import { defineContentConfig, defineCollection, z } from "@nuxt/content";  
const repository =  "https://github.com/themakunga/hacktober2025_blog_post" 
export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: {
        repository,
        include: 'posts/**/*.md',
      },
      // source: 'posts/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        cover: z.string(),
        tags: z.array(z.string()),
        published: z.boolean(),
        author: z.string(),
      }),
    }),
    authors: defineCollection({
      type: "data",
      source: {
        repository,
        include: 'authors/**.{yml,yaml}'
      },
      schema: z.object({
        sid: z.number(),
        name: z.string(),
        avatar: z.string(),
        pronouns: z.array(z.string()),
        description: z.string(),
        socials: z.array(z.object({
          name: z.string(),
          url: z.string(),
          icon: z.string(),
        }))
      })
    })
  }
})
