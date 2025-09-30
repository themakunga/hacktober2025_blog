<script setup lang="ts">
const { data: posts } = await useAsyncData(() => queryCollection('content').all());
</script>
<template>
  <main>
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
