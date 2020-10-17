<template>
  <div class="tasks">
    <h1>Todas as tarefas</h1>
    <div class="grid">
      <Task v-for="task in getTasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AllTasks",
  components: {
    Task: () => import("@/components/Task"),
  },
  computed: {
    ...mapGetters(["getTasks"]),
  },
};
</script>
<style src="./style.scss" lang="scss" scoped/>
