<template>
  <div class="tasks">
    <h1>Tarefas Pendentes</h1>
    <div class="grid">
      <Task v-for="task in getPendingTasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PendingTasks",
  components: {
    Task: () => import("@/components/Task"),
  },
  computed: {
    ...mapGetters(["getPendingTasks"]),
  },
};
</script>

<style src="./style.scss" lang="scss" scoped/>