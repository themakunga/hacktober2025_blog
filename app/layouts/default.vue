<template>
  <div class="flex flex-col min-h-screen">
    <HomeHero />
    <HomeNavbar />
      <div class="drawer drawer-end bg-base-100 mx-auto max-w-[100rem] lg:drawer-open">
        <input id="drawer" type="chekbox" class="drawer-toggle">
        <div class="drawer-content">
          <slot />
        </div>
        <HomeSidebar class="drawer-side z-40 l-drawer" />
      </div>
    <HomeFooter />
  </div>
</template>
<style lang="css" scpoed>
.l-drawer {
  scroll-behaivor: smooth;
  scroll-padding-top: 5rem;
}
</style>
