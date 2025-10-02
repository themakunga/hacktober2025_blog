<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
const { data: post } = await useAsyncData(() => queryCollection('content').path(route.path).first());
</script>

<template>
  <main class="w-full mx-auto py-10">
    <NuxtLink to="/" class="text-blue-600 hover:underline">&larr; Regresar al inicio</NuxtLink>
    <article class="prose w-full">
      
      <ContentRenderer class="w-full" :value="post" />

    </article>

  </main>
</template>
