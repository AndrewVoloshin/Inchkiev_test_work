<script>
export default {
    props: {
        cardNumber: {
            type: Number
        }
    },
    methods: {
        clickedCard() {
            this.$emit('clickedCard', 'Clicked Card');
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="eclipse">
            <div class="eclipse__paint">
            </div>
            <p class="eclipse__text">lorem ipsum dolor sit amet</p>
        </div>

        <div class="card__content">
            <h1 class="card__title">lorem ipsum</h1>
            <p class="card__subtitle1">lorem ipsum dolor &mdash;</p>
            <p class="card__subtitle2">lorem</p>
            <p class="card__subtitle3">ipsum!</p>
            <p class="card__subtitle-ipsum">ipsum !</p>
            <p class="quote">lorem ipsum dolor sit amet,</p>
            <p class="quote">consectetur adipiscing elit</p>
        </div>

        <div class="star">
            <img src="../assets/png/star.png"
                 alt="star">
        </div>

        <div class="eclipses-img">
            <img src="../assets/png/eclipses.png"
                 alt="eclipses">
        </div>

        <div class="eclipses-css">
            <div class="eclipse-fillgrey"></div>
            <div class="eclipse-borderwhite"></div>
            <div class="eclipse-cutimg">
                <div class="fullimg">
                    <img src="../assets/png/dog.png"
                         alt="dog">
                </div>
            </div>
        </div>

        <div class="eclipse-pagecount">
            <div class="eclipse-pagecount__text">{{ cardNumber }}/3</div>
        </div>

        <div class="slider__button"
             @click="clickedCard">
            <img src="../assets/png/cursor_arrow.png"
                 alt="next slide">
        </div>

    </div>
</template>


<style scoped lang="scss">
@import '@/assets/styles/mixins';

.card {
    width: 730px;
    height: 900px;
    position: relative;
    border-radius: 0 65px 65px 0;
    background-color: #027D84;
    overflow: hidden;
    color: #FFFFFF;

    &__subtitle1,
    &__subtitle2,
    &__subtitle3 {
        font-weight: 400;
        font-size: 40px;
        margin: 0;
        line-height: 52px;
        text-transform: uppercase;
    }

    &__subtitle1 {
        margin-left: 43px;
    }

    &__subtitle2 {
        margin-left: 236px;
        margin-bottom: 1px;
    }

    &__subtitle3 {
        margin-left: 114px;
        margin-top: -1px;
    }
}

.eclipse {
    position: absolute;
    left: 231px;
    top: -132.1px;
}

.eclipse__paint {
    width: 378.01px;
    height: 196.28px;
    background-color: #AFB3B4;
    border-radius: 50%;
    transform: rotate(13.28deg);
}

.eclipse__text {
    position: absolute;
    bottom: 30.43px;
    left: 62.19px;
    color: #FFFFFF;
    margin: 0;
    z-index: 1;
    font-size: 18px;
    font-weight: 500;
    text-shadow:
        4px 4px 4px rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
}

.card__subtitle-ipsum {
    display: none;
}

.card__content {
    padding: 107px 74px 0px 82px;
}

.card__title {
    font-weight: bold;
    font-size: 40px;
    line-height: 64px;
    margin: 0;
    margin-bottom: -7px;
    text-transform: uppercase;
}

.quote {
    font-weight: 500;
    margin: 0;
    margin-left: 286px;
    font-size: 15px;
    line-height: 150%;
    text-transform: uppercase;
}

.star {
    width: 140px;
    height: 140px;
    position: absolute;
    top: 242px;
    left: -49px;

    & img {
        @include image-full-cover;
    }
}

.eclipses-img {
    width: 564.98px;
    height: 646.58px;
    position: absolute;
    top: 285.55px;
    right: 84.02px;

    & img {
        @include image-full-cover;
    }
}

.slider__button {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 421px;
    right: 25.9px;
    cursor: pointer;

    & img {
        @include image-full-cover;
    }
}

.eclipses-img {
    display: none;
}

.eclipse-fillgrey {
    position: absolute;
    left: 176.49px;
    bottom: 131.84px;
    width: 385.88px;
    height: 200px;
    background-color: #AFB3B4;
    border-radius: 50%;
    transform: rotate(344.77deg);
    z-index: 1;
}

.eclipse-borderwhite {
    position: absolute;
    left: 123.48px;
    bottom: 255.8px;
    width: 459.68px;
    height: 200px;
    border: 2px solid white;
    border-radius: 50%;
    transform: rotate(211.36deg);
    z-index: 2;
}

.eclipse-cutimg {
    position: absolute;
    left: 93.95px;
    bottom: 134.05px;
    width: 385.88px;
    height: 200px;
    border-radius: 50%;
    transform: rotate(320.71deg);
    z-index: 3;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        @include image-full-cover;
    }
}

.fullimg {
    width: 328px;
    height: 292px;
    position: relative;
    transform: rotate(40.23deg);
}

.eclipse-pagecount {
    position: absolute;
    left: 21px;
    bottom: 31.02px;
    width: 101.49px;
    height: 52.69px;
    border-radius: 50%;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.eclipse-pagecount__text {
    font-size: 12px;
    font-weight: 700;
}


@media screen and (max-width: 766px) {
    .card {
        width: 100%;
    }

    .card__content {
        width: 100%;
        padding: 107px 0px 0px;
    }
}


@media screen and (min-width: 770px) {
    .card__content {
        text-align: center;
    }
}


@media screen and (min-width: 1220px) {
    .card {
        height: 708px;
    }

    .card__content {
        text-align: left;
    }

    .eclipses-css {
        display: none;
    }

    .eclipses-img {
        display: block;
        width: 642.98px;
        top: 48.55px;
    }

    .slider__button {
        top: 294px;
        right: 73.3px;
    }
}


@media screen and (min-width: 769px) and (max-width: 1439px) {
    .card {
        position: relative;
        width: calc(100% - 65px);
    }
}


@media screen and (min-width: 1440px) {
    .card {
        position: relative;
        width: 1370px;
        height: 708px;
        border-radius: 0 90px 90px 0;
    }

    .eclipse {
        left: 84.2px;
        top: -171.17px;
    }

    .eclipse__paint {
        width: 463.85px;
        height: 240.79px;
    }

    .eclipse__text {
        left: 113.19px;
    }

    .card__content {
        padding: 116px 252px 205px 160px;
    }

    .card__title {
        font-size: 60px;
        margin-bottom: 3px;
    }

    .card__subtitle1 {
        font-size: 60px;
        margin-bottom: 11px;
        line-height: 70px;
    }

    .card__subtitle2 {
        font-size: 60px;
        margin-left: 290px;
        margin-bottom: 12px;
    }

    .card__subtitle3 {
        display: none;
    }

    .card__subtitle-ipsum {
        display: block;
        font-size: 60px;
        margin: 0;
        margin-left: 141px;
        margin-bottom: 41px;
        text-transform: uppercase;
    }

    .star {
        width: 160px;
        height: 160px;
        top: 357px;
        left: 0px;
    }

    .eclipses-img {
        width: 642.98px;
        top: 48.55px;
    }

    .eclipse-pagecount {
        width: 112px;
        height: 58.14px;
        left: 245px;
        bottom: 55px
    }

    .eclipse-pagecount__text {
        font-size: 16px;
        font-weight: 700;
    }

    .quote {
        margin: 0;
        margin-left: 284px;
    }
}


@media screen and (min-width: 1441px) {
    .card {
        position: relative;
        width: calc(100% - 65px);
    }
}


@media screen and (min-width: 1700px) {
    .card__content {
        text-align: center;
    }
}
</style>