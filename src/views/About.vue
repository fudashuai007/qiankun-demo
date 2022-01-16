<template>
  <!-- <section class="app"> -->
    <!-- <transition>
      <router-view :key="key" />
    </transition> -->
    <div id="container"></div>
  <!-- </section> -->
  
</template>
<script>
import { start } from 'qiankun';
export default {
  name:"about",
    computed: {
    key() {
      return this.$route.path
    }
  },
  mounted() {
    if(!window.isQiankunStart){
      window.isQiankunStart = true;
      start();
    }
}
}
</script>
