import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { toGithubUrl } from "./utils/functions";

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
        cover: z.string().optional().transform(src => src ? toGithubUrl(src) : ''),
        tags: z.array(z.string()),
        published: z.boolean(),
        author: z.string(),
        wordCount: z.number(),
        readingTime: z.number(),
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
        avatar: z.string().optional().transform(src => src ? toGithubUrl(src) : ''),
        pronouns: z.array(z.string()),
        description: z.string(),
        socials: z.array(z.object({
          name: z.string(),
          url: z.string(),
          icon: z.string().optional(),
        }))
      })
    }),
  }
})
