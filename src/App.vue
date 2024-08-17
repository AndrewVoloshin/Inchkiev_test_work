<template>
  <div class="app__wrap">
    <div class="app__container">
      <SliderApp class="slider"/>
      <FeedbackForm />
    </div>
  </div>
</template>

<script>
import SliderApp from './components/SliderApp'
import FeedbackForm from './components/FeedbackForm.vue'

export default {
  name: 'App',
  components: {
    SliderApp,
    FeedbackForm
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}

*{
  box-sizing: border-box;
}

.slider{
  height: 900px;
}
/* 
.app__wrap {
  display: flex;
  justify-content: center;
} */
</style>
