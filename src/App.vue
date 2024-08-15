<template>
  <div class="app__wrap">
    <div class="app__container">
      <SliderApp />
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

.app__wrap {
  display: flex;
  justify-content: center;
}
</style>
