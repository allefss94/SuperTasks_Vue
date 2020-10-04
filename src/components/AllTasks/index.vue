<template>
  <div class="tasks text-center mb-5 justify-content-center">
    <h1 class="my-5">Tadas as tarefas</h1>
    <Task :tasks="getTasks" class="justify-content-start" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {
    Task: () => import("@/components/Task"),
  },
  computed: {
    ...mapGetters(["getTasks"]),
  },
};
</script>