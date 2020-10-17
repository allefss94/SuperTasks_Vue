<template>
  <div class="container">
    <form @submit.prevent="submit(newTask)" class="form-task">
      <h1>Adicione sua Tarefa</h1>
      <div class="input-group">
        <span for="title">Titulo:</span>
        <input
          type="text"
          name="title"
          v-model="newTask.title"
          placeholder="Minha tarefa incrível"
        />
      </div>
      <div class="input-group">
        <span for="description">Descrição:</span>
        <textarea
          name="description"
          cols="30"
          rows="5"
          v-model="newTask.description"
          placeholder="Descreva aqui sua tarefa"
        ></textarea>
      </div>
      <div class="buttons">
        <button type="submit"><v-icon name="plus-circle" />cadastrar</button>
        <button type="button" @click="reset">
          <v-icon name="eraser" />limpar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewTask",
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
      this.$store.dispatch("addTask", task).then(
        this.$router.push("/dashboard"),
        (this.newTask = {
          title: "",
          description: "",
          owner: this.$store.state.user,
          finished: false,
        })
      );
    },
    reset() {
      this.newTask = {
        title: "",
        description: "",
        owner: this.$store.state.user,
        finished: false,
      };
    },
  },
};
</script>
<style src="./style.scss" lang="scss" scoped/>