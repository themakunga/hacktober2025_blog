<template>
  <article class="card card-md bg-base-100 w-full shadow-sm hover:shadow-md transition-shadow duration-300">
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
          class="w-full h-64 flex items-center justify-center text-base-content opacity-40"
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
    <div class="card-body">
      <h2 class="card-title">
        {{ title }}
      </h2>
      <slot name="description">
        <p>{{ description }}</p>
      </slot>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: {
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
});
</script>
