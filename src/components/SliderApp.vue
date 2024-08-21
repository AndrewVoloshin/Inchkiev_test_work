<template>
    <div class="slider">
        <CardSlider class="card1"
                    ref="card1"
                    :cardNumber="1"
                    @clickedCard="reorderCards(1)"
                    :class="{
                        'position3': cardNumber === 1,
                        'position2': cardNumber === 2,
                        'position1': cardNumber === 3,
                    }" />
        <CardSlider class="card2"
                    ref="card2"
                    :cardNumber="2"
                    @clickedCard="reorderCards(2)"
                    :class="{
                        'position1': cardNumber === 1,
                        'position3': cardNumber === 2,
                        'position2': cardNumber === 3,
                    }" />
        <CardSlider class="card3 "
                    ref="card3"
                    :cardNumber="3"
                    @clickedCard="reorderCards(3)"
                    :class="{
                        'position2': cardNumber === 1,
                        'position1': cardNumber === 2,
                        'position3': cardNumber === 3 && isFirstStart,
                        'init-position': !isFirstStart
                    }" />
    </div>
</template>

<script>
import CardSlider from './CardSlider'

export default {
    components: {
        CardSlider,
    },
    data() {
        return {
            cardNumber: 3,
            isFirstStart: false,
        }
    },
    methods: {
        reorderCards(cardClick) {
            this.isFirstStart = true
            this.cardNumber = cardClick
        },
    },
}
</script>

<style scoped>
.slider {
    height: 900px;
}

.init-position {
    left: 65px;
    z-index: 0;
}

.position3 {
    animation: moveAndReturn 1s forwards;
}

@keyframes moveAndReturn {
    0% {
        z-index: 4;
    }

    50% {
        transform: translateX(-120vw);
        z-index: 4;
    }

    75% {
        transform: translateX(-80vw);
        z-index: 0;
    }

    100% {
        left: 65px;
        z-index: 0;
    }
}

.position2 {
    left: 28px !important;
    z-index: 2;

}

.position1 {
    left: -15px !important;
    z-index: 3;
}

.card1 {
    position: absolute;
    top: 0;
}

.card2 {
    position: absolute;
    top: 0;
    background-color: #4A989A;
}

.card3 {
    position: absolute;
    top: 0;
    background-color: #AFB3B4;
}

@media screen and (max-width: 768px) {

    @keyframes moveAndReturn {
        0% {
            transform: translateX(0);
            z-index: 4;
        }

        50% {
            transform: translateX(-120vw);
            z-index: 4;
        }

        75% {
            transform: translateX(-80vw);
            z-index: 0;
        }

        100% {
            left: 38px;
            z-index: 0;
        }
    }

    .position1 {
        left: 0px !important;
    }

    .position2 {
        left: 19px !important;
    }

    .card2 {
        left: 19px;
    }

    .card3 {
        left: 38px;
    }

}

@media screen and (min-width: 1200px) {
    .slider {
        height: 708px;
    }

}
</style>