<template>
  <div class="navbar bg-base-100 shadow-sm px-20">
    <div class="navbar-start">
      <div class="dropdown">
        <div class="btn btn-ghost lg:hidden" tabindex="0" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow">
          <li v-for="(item, idx) in menucontent" :key="idx">
            <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost" role="button">
        <Icon name="ic:baseline-house" size="1.5rem" />
      </NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="(item, index) in menucontent" :key="index">
          <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
        </li>
      </ul>

    </div>
    <div class="navbar-end">
      <label class="swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" class="theme-controller" value="nord">

        <!-- moon icon -->

        <Icon class="swap-on" name="ic:outline-nightlight" size="2rem" />


        <!-- sun icon -->
        <Icon class="swap-off" name="ic:outline-wb-sunny" size="2rem" />
      </label>
    </div>
  </div>
</template>


<script setup lang="ts">
const menucontent = [
  { path: '/about', name: 'Acerca de' },
  { path: '/blog', name: 'Blog' },
  { path: '/categories', name: 'Categorias' },
  { path: '/roadmap', name: 'Roadmap' }
]
</script>
