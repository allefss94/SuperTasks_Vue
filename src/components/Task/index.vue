<template>
  <div class="container">
    <article class="task">
      <div class="flip">
        <section class="task-front">
          <v-icon :name="icon" />
          <h3>{{ task.title }}</h3>
        </section>
        <section class="task-back">
          <p>{{ task.description }}</p>
          <section class="buttons">
            <button @click="change(task)" type="button">{{ button }}</button>
            <button @click="remove(task)" type="button">Excluir</button>
          </section>
        </section>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  props: ["task"],

  computed: {
    icon() {
      return this.task.finished ? "check" : "times";
    },
    button() {
      return this.task.finished ? "Em dias" : "Pendente";
    },
  },
  methods: {
    remove(task) {
      this.$store.dispatch("removeTask", task);
    },
    change(task) {
      task.finished = !task.finished;

      this.$store.dispatch("changeTaskStatus", task);
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped/>