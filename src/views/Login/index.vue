<template>
  <b-container class="login" fluid>
    <b-row class="justify-content-center h-100 align-items-center">
      <b-col cols="10" md="8" lg="5">
        <Form :form="form" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  components: {
    Form: () => import("@/components/Form"),
  },
  data: () => ({
    form: {
      name: "Super Task",
      to: "login",
    },
  }),
};
</script>

<style src="./style.scss" lang="scss" scoped/>