<template>
  <div class="app__wrap">
    <div class="app__container">
      <SliderApp />
      <FeedbackForm />
      <DynamicBlocks />
    </div>
  </div>
</template>

<script>
import SliderApp from './components/SliderApp'
import FeedbackForm from './components/FeedbackForm.vue'
import DynamicBlocks from './components/DynamicBlocks.vue'


export default {
  name: 'App',
  components: {
    SliderApp,
    FeedbackForm,
    DynamicBlocks
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}

* {
  box-sizing: border-box;
}


</style>
