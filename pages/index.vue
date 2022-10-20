<template>
  <div class="login__layout">
    <div class="login__form">
      <div class="login__image">

      </div>
      <div class="login__title">
        <h2>Lou Geh Tasks</h2>
      </div>
      <input type="text" placeholder="Username" class="login__input">
      <input type="password" placeholder="Password" class="login__input">
      <input type="button" value="Log In" class="login__button">
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .login {

    &__image {
        background-image: url(../static/bfi_gradient.png);
        height: 70px;
        width: 70px;
        background-size: 90%;
        background-position: center;
        background-repeat: no-repeat;
        margin: auto;
        margin-bottom: 20px;
    }
  }
</style>