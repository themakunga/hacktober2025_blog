import { defineContentConfig, defineCollection } from "@nuxt/content";  

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: {
        repository: "https://github.com/themakunga/hacktober2025_blog_post",
        include: "posts/**/*.md"
      }
    })
  }
})
