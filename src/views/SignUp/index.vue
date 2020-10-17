<template>
  <div class="login" fluid>
    <Form :form="form" />
  </div>
</template>

<script>
export default {
  components: {
    Form: () => import("@/components/Form"),
  },
  data: () => ({
    form: {
      name: "Cadastre-se",
      to: "signUp",
    },
  }),
};
</script>

<style src="./style.scss" lang="scss" scoped/>