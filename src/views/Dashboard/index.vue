<template>
  <div class="app">
    <nav class="navbar">
      <div @click="reset" class="brand">
        <router-link tag="span" to="/" exact class="brand"
          >Super Tasks</router-link
        >
      </div>
      <ul>
        <router-link tag="li" to="/dashboard"
          ><v-icon name="grip-horizontal" />Todas</router-link
        >
        <router-link tag="li" to="/dashboard/concluidas"
          ><v-icon name="check-circle" />Concluídas</router-link
        >
        <router-link tag="li" to="/dashboard/pendentes"
          ><v-icon name="times-circle" />Pendentes</router-link
        >
        <router-link tag="li" to="/dashboard/novatarefa"
          ><v-icon name="plus-circle" />Adicionar</router-link
        >
      </ul>
    </nav>

    <transition name="fade" mode="out-in" appear>
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Dashboard",
  methods: {
    ...mapMutations(["reset"]),
  },
};
</script>
<style src="./style.scss" lang="scss" scoped/>