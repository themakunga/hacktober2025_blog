<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
const { data: post } = await useAsyncData(() => queryCollection('content').path(route.path).first());
useSeoMeta({
  title: post.title,
  description: post.description,
  author: post.author,

  ogTitle: post.title,
  ogDescription: post.description,
  ogAuthor: post.author,
})
</script>

<template>
  <main class="w-full px-30 text-primary-content">
    <article class="prose w-full justify-around">
      <ContentRenderer
        class="w-full"
        :value="post"
      />
    </article>
  </main>
</template>
