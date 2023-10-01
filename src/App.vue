<script setup>

import { RouterView } from 'vue-router'

import HeadBox from './views/HeadBox.vue';
//import LargeView from './views/LargeView.vue'
</script>


<template>

  <div class="container">
  <HeadBox> </HeadBox>
  
  <RouterView/>
  </div>

</template>

<script>
export default {
  name: 'App',
};
</script>
