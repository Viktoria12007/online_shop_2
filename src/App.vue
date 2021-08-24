<template>
  <div id="app">
    <v-main-wrapper></v-main-wrapper>
  </div>
</template>


<script>
import vMainWrapper from './components/v-main-wrapper.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    vMainWrapper
  },
  data() {
    return {
  
    }
  },
  computed: {
  ...mapGetters([
      'IS_MOBILE',
      'IS_DESKTOP'
    ])
  },
  methods: {
  ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP'
    ])
  },
  mounted() {
    // window.addEventListener('resize', () => {  // изменение состояния приложения,                                                
    //   if (window.innerWidth > 768) {           // в зависимости от размера экрана
    //     this.SET_DESKTOP();
    //     console.log('Desktop', this.IS_DESKTOP);
    //   }
    //   else {
    //     this.SET_MOBILE();
    //     console.log('Mobile', this.IS_MOBILE);
    //   }
    // })
  }
}
</script>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}
</style>
