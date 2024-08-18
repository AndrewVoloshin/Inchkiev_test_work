<script>
export default {
    methods: {
        clickedCard() {
            this.$emit('clickedCard', 'Hello from Child');
        }
    }
}
</script>

<template>
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
            <p class="card__subtitle-Ipsum">IPSUM !</p>
            <p class="quote">LOREM IPSUM DOLOR SIT AMET,</p>
            <p class="quote">CONSECTETUR ADIPISICING ELIT</p>
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
            <div class="eclipse-pagecount__text">1/3</div>
        </div>





        <div class="slider__button"
             @click="clickedCard">
            <img src="../assets/png/cursor_arrow.png"
                 alt="next slide">
        </div>

    </div>
</template>


<style scoped>
.card {
    width: 730px;
    height: 900px;



    position: relative;
    border-radius: 0 65px 65px 0;
    background-color: #027D84;
    border: 1px solid black;
    overflow: hidden;
    color: #FFFFFF;
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
    font-weight: 400;
    text-shadow:
        2px 2px 4px rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card__subtitle-Ipsum {
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
}

.card__subtitle1 {
    font-weight: 400;
    font-size: 40px;
    margin: 0;
    margin-left: 43px;
    /* margin-bottom: 15px; */
    line-height: 52px;

}

.card__subtitle2 {
    font-weight: 400;
    font-size: 40px;
    margin: 0;
    margin-left: 235px;
    line-height: 52px;
    margin-bottom: 1px;
}

.card__subtitle3 {
    font-weight: 400;
    font-size: 40px;
    margin: 0;
    margin-left: 113px;
    margin-bottom: 1px;
    line-height: 52px;
}

.quote {
    margin: 0;
    margin-left: 284px;
    font-size: 15px;
    line-height: 150%;
}

.star {
    width: 140px;
    height: 140px;
    position: absolute;
    top: 242px;
    left: -49px;
}

.star img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
}

.eclipses-img {
    /* width: 642.98px; */
    width: 564.98px;

    height: 646.58px;
    position: absolute;
    top: 285.55px;
    right: 84.02px;
    transform: rotate(359deg);
}

.eclipses-img img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
}

.slider__button {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 421px;
    right: 28.3px;
    cursor: pointer;
}

.slider__button img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
}

.eclipses-img {
    display: none;
}

.eclipse-fillgrey {
    position: absolute;
    left: 176.49px;
    bottom: 133.84px;
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
    bottom: 258.7px;
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
    bottom: 136.05px;
    width: 385.88px;
    height: 200px;
    border-radius: 50%;
    transform: rotate(320.71deg);
    z-index: 3;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fullimg {
    width: 328px;
    height: 292px;
    position: relative;
    transform: rotate(40.23deg);
}

.eclipse-cutimg img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}

.eclipse-pagecount {
    position: absolute;
    left: 21px;
    bottom: 31.72px;
    width:101.49px ;
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
    /* line-height: 64px; */
}



@media screen and (min-width: 768px) {
    .card {}
}


@media screen and (min-width: 1440px) {
    .card {
        position: relative;
        width: calc(100% - 83px);
    }

    .eclipses-img {
        display: block;
    }
}






@media screen and (min-width: 1441px) {
    .card {
        position: relative;
        width: calc(100% - 83px);
    }
}

@media screen and (min-width: 1700px) {

    .card__content {
        text-align: center;
    }
}



/* .card {
    position: relative;
    width: 1370px;
    height: 708px;
    background-color: #027D84;
    border-radius: 0 90px 90px 0;
    border: 1px solid black;
    overflow: hidden;
    color: #FFFFFF;
}

.eclipse {
    position: absolute;
    left: 84.2px;
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


.card__content {
    padding: 116px 252px 205px 160px;
}

.card__title {
    font-weight: bold;
    font-size: 60px;
    line-height: 64px;
    margin: 0;
    margin-bottom: 5px;
}

.card__subtitle1 {
    font-weight: 400;
    font-size: 60px;
    text-shadow:
        2px 2px 4px rgba(0, 0, 0, 0.5),
       
        -1px -1px 0 rgba(0, 0, 0, 0.8),
        1px -1px 0 rgba(0, 0, 0, 0.8),
        -1px 1px 0 rgba(0, 0, 0, 0.8),
        1px 1px 2px rgba(0, 0, 0, 0.5);
    margin: 0;
    margin-left: 43px;
    margin-bottom: 2px;
    line-height: 70px;

}

.card__subtitle2 {
    font-weight: 400;
    font-size: 60px;
    margin: 0;
    margin-left: 289px;
    margin-bottom: 3px;


}

.card__subtitle3 {
    font-weight: 400;
    font-size: 60px;
    margin: 0;
    margin-left: 141px;
    margin-bottom: 41px;
}

.quote {
    margin: 0;
    margin-left: 284px;
    font-size: 15px;
    line-height: 150%;
}

.star {
    width: 160px;
    height: 160px;
    position: absolute;
    top: 357px;
    left: 0px;
}

.star img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
}

.eclipses-img {
    width: 642.98px;
    height: 646.58px;
    position: absolute;
    top: 49.55px;
    right: 84.02px;
}

.eclipses-img img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
}

.slider__button {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 294px;
    right: 74.3px;
    cursor: pointer;
}

.slider__button img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
} */
</style>