<template>
  <div class="text-center content-center">
    <pre>{{ data }}</pre>
    <div class="card bg-base-100 shadow-sm text-center">
      <figure class="px-10 pt-10">
        <div class="avatar">
          <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img :src="profile.avatar" :alt="profile.name">
          </div>
        </div>
      </figure>
      <div class="card-body items-center text-center text-balance">
        <h2 class="card-title">{{ profile.name }}</h2>
        <span>{{ profile.pronouns }}</span>
        <p>{{ profile.description }}</p>
        <div class="card-actions" />
        <div class="flex">
          <a v-for="item in profile.socials" :key="item.name" role="button" class="btn btn-lg btn-ghost"
            :href="item.url" target="_blank">
            <Icon size="2rem" :name="item.icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data: profile } = await useAsyncData('nicolas', () => {
  return queryCollection('authors')
    .where('sid', '=', 1)
    .first();
})

</script>
