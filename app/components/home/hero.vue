<template>
  <div class="hero bg-base-200 h-24 min-h-[55vh]" :style="backgroundImage">
    <div class="hero-overlay" />
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Nicolas Villarroel</h1>
        <p class="mb-5">
          Un blog sobre tecnologia y cosas tecnologicas
        </p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const imagesList = [
  "https://i.imgur.com/kFqnjDx.jpeg",
  "https://i.imgur.com/2f3qQzK.png",
];

const backgroundImage = `background-image: url(${imagesList[Math.floor(Math.random() * imagesList.length)]});`;
</script>
