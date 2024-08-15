<script>

</script>

<template>
    <div class="slider">
        <div class="card">
            <div class="eclipse">
                <div class="eclipse__paint">
                </div>
                <p class="eclipse__text">LOREM IPSUM DOLOR SIT AMET</p>
            </div>

            <div class="card__content">
                <h1 class="card__title">LOREM IPSUM</h1>
                <p class="card__subtitle1">LOREM IPSUM DOLOR &mdash;</p>
                <p class="card__subtitle2">LOREM</p>
                <p class="card__subtitle3">IPSUM!</p>
                <p class="quote">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT</p>
            </div>

        </div>
    </div>
</template>


<style scoped>
.slider {
    color: #FFFFFF;
}

.card {
    position: relative;
    width: 1440px;
    height: 708px;
    background-color: #027d84;
}




.eclipse {
    position: absolute;
    left: 76.2px;
    top: -171.17px;
}

.eclipse__paint {
    width: 463.85px;
    height: 240.79px;
    background-color: #AFB3B4;
    border-radius: 50%;
    transform: rotate(13.28deg);
}

.eclipse__text {
    position: absolute;
    bottom: 30.43px;
    left: 113.19px;
    color: #FFFFFF;
    margin: 0;
    z-index: 1;
    font-size: 18px;
    font-weight: 400;
    text-shadow:
        2px 2px 4px rgba(0, 0, 0, 0.5);
}


.card__content {
    padding: 116px 252px 205px 152px;
}

.card__title {
    font-weight: bold;
    font-size: 60px;
    line-height: 64px;
    margin: 0;
}

.card__subtitle1 {
    font-weight: bold;
    font-size: 60px;
    text-shadow:
        2px 2px 4px rgba(0, 0, 0, 0.5),
        /* shadow */
        -1px -1px 0 rgba(0, 0, 0, 0.8),
        1px -1px 0 rgba(0, 0, 0, 0.8),
        -1px 1px 0 rgba(0, 0, 0, 0.8),
        1px 1px 2px rgba(0, 0, 0, 0.5);
    margin: 0;
    margin-left: 43px;
    margin-top: 5px;

}

.card__subtitle2 {
    font-weight: bold;
    font-size: 60px;
}

.card__subtitle3 {}

.quote {}

.text-line {}
</style>