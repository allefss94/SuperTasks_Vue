<template>
  <transition name="fade" mode="out-in" appear class="bg-light">
    <router-view />
  </transition>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0.5;
}
</style>
