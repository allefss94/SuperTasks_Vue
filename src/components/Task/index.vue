<template>
  <transition name="fade" mode="out-in" appear>
    <b-row class="justify-content-center">
      <b-col cols="10" sm="6" md="4" v-for="task in tasks" :key="task.id">
        <b-card
          border-variant="dark"
          :header="task.title"
          align="center"
          tag="article"
          class="mb-2 mt-2 card"
        >
          <b-card-text class="my-5 h-100">
            {{ task.description }}
          </b-card-text>
          <div class="buttons">
            <b-button
              v-b-tooltip.hover
              title="Está"
              @click="change(task)"
              variant="secondary"
              class="ml-1"
              >{{ task.finished ? "Em dias" : "Pendente" }}</b-button
            >
            <b-button
              v-b-tooltip.hover
              title="Excluir"
              @click="remove(task)"
              variant="danger"
              class="mr-1"
              >Deletar</b-button
            >
          </div>
        </b-card>
      </b-col>
    </b-row>
  </transition>
</template>

<script>
export default {
  props: ["tasks"],
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