<template>
  <div class="container">
    <form @submit.prevent="submit(form.to)">
      <h1>{{ form.name }}</h1>
      <section class="input-group">
        <v-icon name="user" />
        <input
          type="text"
          name="user"
          placeholder="Usuário"
          v-model="formulario.name"
        />
      </section>
      <section class="input-group">
        <v-icon name="lock" />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          v-model="formulario.password"
        />
      </section>
      <div class="buttons">
        <button>
          {{ form.name === "Super Task" ? "entrar" : "cadastrar" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: ["form"],
  data: () => ({
    formulario: {
      name: "",
      password: "",
      taskOwner: "",
    },
  }),
  computed: {
    textButton() {
      return this.form.to === "login" ? "Entrar" : "Casdastrar";
    },
  },
  methods: {
    submit(to) {
      const payload = this.formulario;
      payload.taskOwner = payload.name;
      this.$store
        .dispatch(`${to}`, payload)
        .then(() => {
          this.form.to === "login"
            ? this.$router.push("/dashboard")
            : this.$router.push("/dashboard/novatarefa");
        })
        .catch((err) => {
          console.log(err);
          this.$router.push("/error");
        });
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped>