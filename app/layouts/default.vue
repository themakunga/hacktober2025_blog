<template>
  <div>
    <HomeHero />
    <div class="w-full max-w-9/10">
      <HomeInfo />
      <HomeSidebar />
      <div class="container">

        <slot />
      </div>
      <HomeFooter />
    </div>

  </div>
</template>
