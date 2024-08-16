<template>
    <div class="slider">
        <CardSlider class="card1"
                    ref="card1"
                    @clickedCard="handleChildEvent(1)"
                    :style="{ zIndex: 3 }" />
        <CardSlider class="card2"
                    ref="card2"
                    @clickedCard="handleChildEvent(2)"
                    :style="{ zIndex: 2 }" />
        <CardSlider class="card3"
                    ref="card3"
                    @clickedCard="handleChildEvent(3)"
                    :style="{ zIndex: 1 }" />
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
            currentCard: 1,
        }
    },
    methods: {
        handleChildEvent(cardClick) {
            const card1 = this.$refs[`card1`];
            const card2 = this.$refs[`card2`];
            const card3 = this.$refs[`card3`];

            if (cardClick === 1) {

                card1.$el.style.zIndex = 0;
                card1.$el.classList.add('position3')
                card1.$el.classList.remove('position1')

                card2.$el.style.zIndex = 3;
                card2.$el.classList.add('position1')
                card2.$el.classList.remove('position2')

                card3.$el.style.zIndex = 2;
                card3.$el.classList.add('position2')
                card3.$el.classList.remove('position3')

            }

            if (cardClick === 2) {

                card1.$el.style.zIndex = 2;
                card1.$el.classList.add('position2')
                card1.$el.classList.remove('position3')

                card2.$el.style.zIndex = 0;
                card2.$el.classList.add('position3')
                card2.$el.classList.remove('position1')

                card3.$el.style.zIndex = 3;
                card3.$el.classList.add('position1')
                card3.$el.classList.remove('position2')

            }
            if (cardClick === 3) {
                card1.$el.style.zIndex = 3;
                card1.$el.classList.add('position1')
                card1.$el.classList.remove('position2')


                card2.$el.style.zIndex = 2;
                card2.$el.classList.add('position2')
                card2.$el.classList.remove('position3')


                card3.$el.style.zIndex = 0;
                card3.$el.classList.add('position3')
                card3.$el.classList.remove('position1')


            }

        }
    },
    mounted() {
   
    },
}
</script>

<style scoped>
.position3 {
    animation: moveAndReturn 1s forwards;
}


@keyframes moveAndReturn {
    0% {
        transform: translateX(0);
        z-index: 4;
    }

    50% {
        transform: translateX(-1600px);
        z-index: 4;
    }

    75% {
        transform: translateX(-1400px);
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

.slider {
    width: 1400px;
    position: relative;
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
</style>