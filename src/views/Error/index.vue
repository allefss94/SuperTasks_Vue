<template>
  <div class="error bg-light text-center">
    <h1>Ops... Ocorreu um erro :(</h1>
    <h3>Verifique os dados inseridos.</h3>
    <div class="span">
      <span>Você já tem cadastro?</span>
      <span>O usuário e senha estão corretos?</span>
      <span>Tudo verificado? Tente novamente</span>
    </div>
    <div class="buttons">
      <b-button to="/login" class="px-4 mr-4">Entrar</b-button>
      <b-button to="/cadastro" class="px-3 ml-4">Criar conta</b-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.error {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1,
  h3,
  .span {
    margin: 10px;
  }
  .span {
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>