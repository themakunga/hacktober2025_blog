<script setup lang="ts">
const pubs = (process.env.NODE_ENV === 'production');

let query = queryCollection('content')
  .order('date', 'DESC')
  .limit(10);

if (pubs) {
  query = query.where('published', '=', true);
}

const { data: posts } = await useAsyncData(() => query.all());
</script>
<template>
  <main>
    <div v-if="posts">
      <div
        v-for="post in posts"
        :key="post.path"
        class="mb-6"
      >
        <CardPost
          :title="post.title"
          :path="post.path"
          :cover="post.cover"
          :author="post.author"
          :description="post.description"
          :reading-time="post.readingTime"
          :date="post.date"
          :tags="post.tags"
        >
          <template #cover>
            <img :src="post.cover">
          </template>
          <template #desciption>
            <p>{{ post.description }}</p>
          </template>
        </CardPost>
      </div>
    </div>
    <p v-else>
      No se han encontrado posts
    </p>
  </main>
</template>
