<template>
  <div class="text-center content-center">
    <div class="card bg-base-100 w-96 shadow-sm text-center">
      <figure class="px-10 pt-10">
        <div class="avatar">
          <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img :src="profile.avatar" :alt="profile.name">
          </div>
        </div>
      </figure>
      <div class="card-body items-center text-center ">
        <h2 class="card-title">{{ profile.name }}</h2>
        <span>{{ profile.pronouns }}</span>
        <p>{{ profile.description }}</p>
        <div class="card-actions" />
        <a v-for="item in profile.socials" :key="item.name" role="button" class="btn btn-lg btn-ghost" :href="item.url">
          <Icon size="2.5rem" :name="item.icon" />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const profile = {
  name: 'Nicolas Villarroel Martinez',
  pronouns: 'he/him/his el',
  avatar: '/images/pictures/me.jpg',
  description: 'After the end of World War II, the world was split into two -- East and two. This marked the beginning of the era called World War II.',
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nicolas-martinez-villarroel/', icon: 'mdi:linkedin' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nicolas-martinez-villarroel/', icon: 'mdi:linkedin' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nicolas-martinez-villarroel/', icon: 'mdi:linkedin' },
  ]
}
</script>
