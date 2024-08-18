<template>
    <div class="slider">
        <CardSlider class="card1"
                    ref="card1"
                    :cardNumber="1"
                    @clickedCard="reorderCards(1)" />
        <CardSlider class="card2"
                    ref="card2"
                    :cardNumber="2"
                    @clickedCard="reorderCards(2)" />
        <CardSlider class="card3"
                    ref="card3"
                    :cardNumber="3"
                    @clickedCard="reorderCards(3)" />
    </div>
</template>

<script>
import CardSlider from './CardSlider'

export default {
    components: {
        CardSlider,
    },

    methods: {
        reorderCards(cardClick) {
            this.cardNumber = cardClick
            const card1 = this.$refs[`card1`];
            const card2 = this.$refs[`card2`];
            const card3 = this.$refs[`card3`];

            if (cardClick === 1) {
                this.moveToThirdPosition(card1)
                this.moveToFirstPosition(card2)
                this.moveToSecondPosition(card3)
            }

            if (cardClick === 2) {
                this.moveToSecondPosition(card1)
                this.moveToThirdPosition(card2)
                this.moveToFirstPosition(card3)
            }
            if (cardClick === 3) {
                this.moveToFirstPosition(card1)
                this.moveToSecondPosition(card2)
                this.moveToThirdPosition(card3)
            }
        },

        moveToFirstPosition(card) {
            card.$el.style.zIndex = 3;
            card.$el.classList.add('position1')
            card.$el.classList.remove('position2')
        },

        moveToSecondPosition(card) {
            card.$el.style.zIndex = 2;
            card.$el.classList.add('position2')
            card.$el.classList.remove('position3')
        },

        moveToThirdPosition(card) {
            card.$el.style.zIndex = 1;
            card.$el.classList.add('position3')
            card.$el.classList.remove('position1')
        },
    },
}
</script>

<style scoped>
.slider {
    height: 900px;
}

.position3 {
    animation: moveAndReturn 1s forwards;
}

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
        left: 83px;
        z-index: 0;
    }
}

.position2 {
    left: 43px !important;
}

.position1 {
    left: 0px !important;
}

.card1 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
}

.card2 {
    position: absolute;
    top: 0;
    left: 43px;
    z-index: 2;
    background-color: #4A989A;
}

.card3 {
    position: absolute;
    top: 0;
    left: 83px;
    z-index: 1;
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
            left: 37px;
            z-index: 0;
        }
    }

    .position2 {
        left: 19px !important;
    }

    .card2 {
        left: 19px;
    }

    .card3 {
        left: 37px;
    }

}

@media screen and (min-width: 1200px) {
    .slider {
        height: 708px;
    }

}
</style>