<template>
  <div>
    <HomeHero />
    <HomeNavbar />
    <div class="drawer drawer-end bg-base-100 lg:drawer-open">
      <input id="drawer" type="chekbox" class="drawer-toggle">
      <div class="drawer-content flex flex-col p-4">
        <label for="drawer" class="btn btn-primary drawer-button lg:hidden mb-4">Abrir menu</label>
        <slot />
      </div>
      <HomeSidebar class="drawer-side p-4 w-80 bg-base-200 text-base-content l-drawer" />
    </div>
    <HomeFooter />
  </div>
</template>
<style lang="css" scpoed>
.l-drawer {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
}
</style>
