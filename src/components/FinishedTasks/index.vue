<template>
  <div class="tasks">
    <h1>Tarefas Concluídas</h1>
    <div class="grid">
      <Task v-for="task in getFinishedTasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FinishedTasks",
  components: {
    Task: () => import("@/components/Task"),
  },
  computed: {
    ...mapGetters(["getFinishedTasks"]),
  },
};
</script>


<style src="./style.scss" lang="scss" scoped/>