<template>
  <div>
    <HomeHero />
    <div class="w-full max-w-9/10">
      <HomeInfobar />
      <HomeSidebar />
      <div class="container">

        <slot />
      </div>
      <HomeFooter />
    </div>

  </div>
</template>
