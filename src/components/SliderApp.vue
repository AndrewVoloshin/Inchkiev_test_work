<template>
    <div class="slider">
        <CardSlider class="card1" />
        <CardSlider class="card2" />
        <CardSlider class="card3" />


    </div>
</template>

<script>
import CardSlider from './CardSlider'

export default {
    components: {
        CardSlider,
    }
}
</script>

<style scoped>
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