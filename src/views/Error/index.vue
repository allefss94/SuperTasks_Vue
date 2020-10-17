<template>
  <div class="error bg-light text-center">
    <h1>Ops... Ocorreu um erro :(</h1>
    <h3>Verifique os dados inseridos.</h3>
    <div class="span">
      <span>Você já tem cadastro?</span>
      <span>O usuário e senha estão corretos?</span>
      <span>Tudo verificado? Tente novamente.</span>
    </div>
    <div class="buttons">
      <router-link tag="button" to="/login" class="px-4 mr-4"
        >Entrar</router-link
      >
      <router-link tag="button" to="/cadastro" class="px-3 ml-4"
        >Criar conta</router-link
      >
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
  background: #eee;
  h1,
  h3,
  .span {
    margin: 10px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    text-align: center;
    span {
      margin: 0.2rem;
      font-style: italic;
    }
  }
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 2rem;
    padding: 0.6rem;
    width: 120px;
    background: none;
    border: 1px solid #333;
    border-radius: 4px;
    color: #333;
    cursor: pointer;
    transition: all 0.2s;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
      background: #333;
      color: #eee;
    }
  }
}
</style>