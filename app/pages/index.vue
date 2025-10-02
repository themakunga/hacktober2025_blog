<script setup lang="ts">
const { data: posts } = await useAsyncData(() => queryCollection('content')
  .where('published', '=', true)
  .order('date', 'DESC')
  .all());
</script>
<template>
  <main>
    <div v-if="posts">
      <div v-for="post in posts" :key="post.path" class="mb-6">
        <NuxtLink :to="post.path">
          <CardPost :title="post.title" :cover="post.cover" />
        </NuxtLink>
      </div>
    </div>
    <p v-else>No se han encontrado posts</p>
  </main>
</template>
