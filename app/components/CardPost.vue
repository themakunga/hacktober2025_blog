<template>
  <article class="card card-md px-3 bg-base-100 w-full shadow-sm hover:shadow-md transition-shadow duration-300">
    <figure
      v-if="$slots.cover || (showCover && cover)"
      class="max-h-45"
    >
      <slot name="cover">
        <img
          v-if="cover"
          :src="cover"
          :alt="title"
          class="w-full h-25 object-cover"
        >
        <div
          v-else-if="showPlaceholder"
          class="w-full h- flex items-center justify-center text-base-content opacity-40"
        >
          <svg
            class="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </slot>
    </figure>
    <div class="card-body grid grid-cols-[1fr_auto] items-baseline-last">
      <div>
        <h2 class="card-title">
          {{ title }}
        </h2>
        <div class="flex items-baseline-last">
          <NuxtLink
            v-for="(tag, idx) in tags"
            :key="idx"
            :to="`/tags/${tag}`"
          >
            <div class="badge badge-info badge-xs">
              {{ tag }}
            </div>
          </NuxtLink>

          <slot name="badges" />
        </div>
        <slot name="description">
          <p class="pt-2">
            {{ description }}
          </p>
        </slot>
        <slot name="navegation">
          <NuxtLink
            :to="path"
            class="btn btn-link btn-sm"
          >
            Leer mas...
          </NuxtLink>
        </slot>
      </div>
      <div class="grid grid-cols-[1fr auto]">
        <slot name="author">
          <span class="items-end text-base-content/60">por: {{ author }}</span>
        </slot>
        <slot name="date">
          <span class="items-end text-base-content/50">{{ formatDate(date) }}</span>
        </slot>
        <slot name="readingTime">
          <span class="items-end text-base-content/30">tiempo de lectura: {{ readingTime }} minutos</span>
        </slot>
      </div>
    </div>
  </article>
</template>

<script setup>
import { isNewPost, formatDate } from '~/utils/date-functions';

defineProps({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: false,
    default: ""
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  showPlaceholder: {
    type: Boolean,
    default: false,
  },
  readingTime: {
    type: Number,
    default: 0
  },
  date: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
    default: () => []
  }
});

const isNew = ((date) => {
  console.log(date);
  console.log(isNewPost(date));
  return isNewPost(date)
})

</script>
