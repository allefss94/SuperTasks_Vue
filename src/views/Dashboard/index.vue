<template>
  <div class="app bg-light h-100">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand @click="reset" to="/">Super Tasks</b-navbar-brand>
      <b-navbar-toggle target="collapse" />
      <b-collapse id="collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/dashboard"
            ><b-icon icon="grid" class="mx-1" />Todas</b-nav-item
          >
          <b-nav-item to="/dashboard/pendentes"
            ><b-icon
              icon="exclamation-circle"
              class="mx-1"
            />Pendentes</b-nav-item
          >
          <b-nav-item to="/dashboard/concluidas"
            ><b-icon icon="check2-circle" class="mx-1" />Concluídas</b-nav-item
          >
          <b-nav-item to="/dashboard/novatarefa"
            ><b-icon icon="plus-circle" class="mx-1" />Adicionar</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col cols="10">
          <transition name="fade" mode="out-in" appear>
            <router-view />
          </transition>
        </b-col>
      </b-row>
    </b-container>
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
<style scoped>
.app {
  height: 100%;
}

.router-link-exact-active,
.router-link-active {
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0.5;
}
</style>