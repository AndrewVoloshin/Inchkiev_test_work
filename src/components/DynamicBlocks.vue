<template>

    <div class="sort-buttons">
        <div class="sort-buttons__container">
            <label class="sort-button">
                <input type="radio"
                       name="sort"
                       @change="sortByAlphabetically()" />
                відсортувати блоки за заголовком відповідно до алфавітного порядку
            </label>
            <label class="sort-button">
                <input type="radio"
                       name="sort"
                       @change="sortByPicLeftT()" />
                вивести всі блоки у форматі "зображення - зліва, текст - справа"
            </label>
            <label class="sort-button">
                <input type="radio"
                       name="sort"
                       @change="sortByChessPattern()" />
                вивести всі блоки у форматі "зображення - зліва, текст - справа" і навпаки в шаховому порядку
            </label>
        </div>
    </div>

    <div class="dynamic-blocks">
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
            styleEChessPattern: null,
            moviesUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=3685d3eb8695f087227e0ee980f3ae4d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
            picUrl: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/',
        };
    },

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

        sortByAlphabetically() {
            this.movies.sort((a, b) => a.title.localeCompare(b.title));
        },

        sortByPicLeftT() {
            if (this.styleChessPattern) {
                document.head.removeChild(this.styleChessPattern);
                this.styleChessPattern = null;
            }

        },

        sortByChessPattern() {
            if (this.styleChessPattern) return
            this.addStyleChessPattern()
        },

        addStyleChessPattern() {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = `
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
            `;
            this.styleChessPattern = style;
            document.head.appendChild(style);
        },
    },
    async mounted() {
        this.movies = await this.fetchMovies();
        this.addStyleChessPattern()
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

.sort-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 79px;
    margin-bottom: 90px;
}

.sort-buttons__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    margin-left: -47px;
}

.sort-button input[type="radio"] {
    width: 15px;
    height: 15px;
}

.sort-button {
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    gap: 19px;
}

@media (max-width: 768px) {
    .dynamic-blocks__container {
        width: 100%;
        padding: 0 15px;
    }

    .dynamic-blocks__content {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 20px 15px;
    }

    .block__img {
        width: 100%;
        max-width: 380px;
    }

    .block__text {
        width: 100%;
        margin-top: 10px;
    }

    .block__description {
        width: 100%;
        height: auto;
        font-size: 14px;
    }

    h3 {
        font-size: 24px;
        line-height: 32px;
    }

    .sort-buttons__container {
        margin-left: 20px;
    }
}

@media (max-width: 480px) {
    .sort-buttons__container {
        margin-left: 20px;
    }

    .dynamic-blocks__content {
        padding: 15px 10px;
    }

    h3 {
        font-size: 20px;
        line-height: 28px;
    }

    .block__description {
        font-size: 12px;
        line-height: 14px;
    }
}
</style>
