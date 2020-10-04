<template>
  <b-card
    bg-variant="dark"
    class="text-center text-white py-5"
    :title="form.name"
  >
    <b-form @submit.prevent="submit(form.to)">
      <b-container fluid>
        <b-row class="justify-content-center mt-5">
          <b-col cols="12" sm="10">
            <b-form-input
              id="user"
              type="text"
              required
              placeholder="Usuário"
              v-model="formulario.name"
            />
          </b-col>
        </b-row>
        <b-row class="justify-content-center mt-4">
          <b-col cols="12" sm="10">
            <b-form-input
              id="password"
              type="password"
              required
              placeholder="Senha"
              v-model="formulario.password"
            />
          </b-col>
        </b-row>
        <b-row class="justify-content-center mt-5">
          <b-col cols="12" sm="10">
            <b-btn type="submit" variant="outline-primary" block dark>{{
              textButton
            }}</b-btn>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
  </b-card>
</template>

<script>
export default {
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