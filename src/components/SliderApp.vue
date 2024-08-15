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

        </div>
    </div>
</template>


<style scoped>
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
    color: white;
    margin: 0;
    z-index: 1;
}
</style>