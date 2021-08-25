<template>
<div class="v-main-page">
   <h1 class="v-main-page__title">Online-shop</h1>
   <p>
    <router-link :to="{name: 'catalog'}">
        to Catalog
    </router-link>
   </p>
</div>
</template>

<script>

export default {
   name: 'v-main-page',
   components: {
       
   },
   props: {
     
   },
   data() {
       return {
          
       }
   },
   computed: {
    
   },
   methods: {
    
   },
   watch: {
      
   },
   mounted() {
    
   }
}
</script>

<style lang="scss">
.v-main-page {
    &__title {
        margin-bottom: 20px;
    }
}
</style>