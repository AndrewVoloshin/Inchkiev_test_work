<template>

    <div class="dynamic-blocks">

        <div class="sort-buttons">
            <button @click="sortBy('popularity')">Популярність</button>
            <button @click="sortBy('release_date')">Дата релізу</button>
            <button @click="sortBy('vote_average')">Оцінка</button>
        </div>



        <div class="dynamic-blocks__container">



            <div class="dynamic-blocks__content"
                 v-for="movie in movies"
                 :key="movie.id">
                <div class="block__img">
                    <img :src='this.picUrl + movie.poster_path'
                         :alt="movie.title" />
                </div>
                <div class="block__text">
                    <h3>{{ movie.title }}</h3>
                    <p class="block__description">{{ movie.overview }}</p>
                </div>
            </div>



        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            movies: [],
            sortByCriteria: 'popularity',


            moviesUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=3685d3eb8695f087227e0ee980f3ae4d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
            picUrl: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/',
        };
    },
    //   computed: {
    //     sortedMovies() {
    //       return this.movies.slice().sort((a, b) => {
    //         if (this.sortByCriteria === 'popularity') {
    //           return b.popularity - a.popularity;
    //         } else if (this.sortByCriteria === 'release_date') {
    //           return new Date(b.release_date) - new Date(a.release_date);
    //         } else if (this.sortByCriteria === 'vote_average') {
    //           return b.vote_average - a.vote_average;
    //         }
    //       });
    //     }
    //   },
    methods: {
        async fetchMovies() {
            try {
                const response = await fetch(this.moviesUrl);
                const data = await response.json();
                const processedData = data.results.slice(0, 5);
                return processedData
            } catch (error) {
                console.error('Error fetching movies:', error);
                return []
            }
        },
        sortBy(criteria) {
            this.sortByCriteria = criteria;
        }
    },
    async mounted() {
        this.movies = await this.fetchMovies();
        console.log(this.movies);
    }
};
</script>

<style scoped>
.dynamic-blocks {
    display: flex;
    justify-content: center;
}

.dynamic-blocks__container {
    width: 1020px;
    height: 324px;
}

.dynamic-blocks__content {
    display: flex;
    align-items: center;
    gap: 46px;
    margin-bottom: 37px;
    padding: 27px 0 33px 40px;
    background-color: #C4C4C4;
}

.dynamic-blocks__content:first-child {
    border: 1px solid black;
}


.dynamic-blocks__content:nth-child(even) {

    padding: 30px 40px 30px 53px;
    justify-content: space-between;

}

.dynamic-blocks__content:nth-child(even) .block__img {
    order: 2;
}

.dynamic-blocks__content:nth-child(even) .block__text {
    order: 1;
    margin-top: -9px;
}

.block__img {
    position: relative;
    width: 380px;
    height: 264px;
    flex-shrink: 0;
}

.block__img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

h3 {
    font-size: 30px;
    line-height: 64px;
    font-weight: 400px;
    margin: 0;
    margin-bottom: 21px;
}

.block__text {
    margin-top: 10px;
    overflow: hidden;
}

.block__description {
    width: 269px;
    height: 45px;
    font-size: 14px;
    line-height: 15px;
    font-weight: 400px;
}
</style>
