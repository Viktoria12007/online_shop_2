<template>
<div class="v-header">
    <router-link :to="{name: 'mainPage'}">
        <img src="../../assets/logo.png" alt="">
    </router-link>
     <div class="search-field">
      <input 
      type="text"
      v-model="searchValue"
      >
      <button class="search_btn btn">
        <i class="material-icons" @click="search(searchValue)">search</i>
      </button>
      <button class="search_btn btn">
        <i class="material-icons" @click="clearSearchField">cancel</i>
      </button>
    </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
   name: 'v-header',
   components: {
       
   },
   props: {
      
   },
   data() {
       return {
          searchValue: ''
       }
   },
   computed: {
    ...mapGetters([
        'SEARCH_VALUE'
    ])
   },
   methods: {
     ...mapActions([
       'GET_SEARCH_VALUE_TO_VUEX'
     ]),
     search(value) {
       this.GET_SEARCH_VALUE_TO_VUEX(value);
       if (this.$route.path !== '/catalog') {
         this.$router.push('/catalog');
       }
     },
     clearSearchField() {
       this.searchValue = '';
       this.GET_SEARCH_VALUE_TO_VUEX();
       if (this.$route.path !== '/catalog') {
         this.$router.push('/catalog');
       }
     }
   },
   watch: {
       
   },
   mounted() {
    
   }
}
</script>

<style lang="scss">
.v-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $green-bg;
    padding: 16px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    img {
      width: 50px;
    }
    .search-field {
      padding: 16px;
      position: relative;
      right: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      & input {
        margin-right: 10px;
      }
    }
    .search_btn {
      color: #333333;
      padding: 5px 5px;
      margin-right: 10px;
      background: transparent;
      border: none;
    }
  }
</style>