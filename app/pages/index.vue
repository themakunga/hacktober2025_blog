<script setup lang="ts">
const { data: posts } = await useAsyncData(() => queryCollection('content').all());
console.log(posts)
</script>
<template>
  <main>
    <h1 class="container mx-auto py-10">Nicolas Villarroel</h1>
    <div v-if="posts">
      <div v-for="post in posts" :key="post.path" class="mb-6">
        <NuxtLink :to="post.path" class="text-2xl text-blue-600 hover:underline">
          {{ post.title }}
        </NuxtLink>
      </div>
    </div>
    <p v-else>No se han encontrado posts</p>
  </main>
</template>
