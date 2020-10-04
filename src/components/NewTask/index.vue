<template>
  <div class="form-task">
    <b-row class="my-4 justify-content-center">
      <b-col cols="12" md="8" lg="6">
        <b-form @submit.prevent="submit(newTask)" class="form">
          <h1 class="display-4 text-center my-4">Nova Tarefa</h1>
          <b-form-group label="Titulo:">
            <b-form-input
              v-model="newTask.title"
              placeholder="Minha Super Tarefa"
            />
          </b-form-group>
          <b-form-group label="Descrição:">
            <b-form-textarea
              rows="3"
              max-rows="6"
              v-model="newTask.description"
              placeholder="Algo incrível que vou fazer."
            />
          </b-form-group>

          <b-button type="submit" variant="light" class="mt-2"
            >Adicionar Tarefa</b-button
          >
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: {
        title: "",
        description: "",
        owner: this.$store.state.user,
        finished: false,
      },
    };
  },
  computed: {},
  methods: {
    submit(task) {
      this.$store
        .dispatch("addTask", task)

        .then(
          this.$router.push("/dashboard"),
          (this.newTask = {
            title: "",
            description: "",
            owner: this.$store.state.user,
            finished: false,
          })
        );
    },
  },
};
</script>
<style src="./style.scss" lang="scss" scoped/>