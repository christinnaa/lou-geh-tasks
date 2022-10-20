<template>
    <div class="header__layout">
        <div class="header__div1">
            <div class="header__logo"></div>
            <div class="header__title">Lou Geh Tasks</div>
        </div>
        <div class="header__div2">
            <div class="header__username">test_user</div>
            <div class="header__logout">
                <font-awesome-icon icon="power-off" />

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header {
    &__logo {
        background-image: url(../static/bfi_gradient.png);
        height: 40px;
        width: 40px;
        background-size: 90%;
        background-position: center;
        background-repeat: no-repeat;
        margin-right: 10px;
    }

    
}
</style>