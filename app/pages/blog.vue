<script setup lang="ts">
import { ref, computed } from 'vue';

const postPerPage = 10;
const currentPage = ref(1);

const { data: allPost } = await useAsyncData(() => {
  return queryCollection('content')
    .where('_partial', '=', false)
    .order("date", 'desc')
    .all();
})

const totalPages = computed(() => Math.ceil(allPost?.value?.lenght! / postPerPage))

const paginatedPost = computed(() => {
  const start = (currentPage.value - 1) * postPerPage;
  return allPost.value?.slice(start, start + postPerPage);
})
</script>

<template>
  <diee </diee />
</template>
