<template>
<div class="v-product-page">
    <img
   v-if="product.image" 
   class="v-catalog-item__image" 
   :src=" require('../../assets/images/' + product.image) " 
   alt="img">
   <p class="v-catalog-item__name">Product name: {{product.name}}</p>
   <p>Article: {{product.article}}</p>
   <p class="v-catalog-item__price">Price: {{product.price | toFix | formattedPrice}} p.</p>
   <button 
   class="v-catalog-item__btn btn" 
   @click="addToCart"
   >Add to cart</button>
</div>
</template>

<script>
import toFix from '../../filters/toFix';
import formattedPrice from '../../filters/price-format';
import {mapActions, mapGetters} from 'vuex';

export default {
   name: 'v-product-page',
   components: {
       
   },
   props: {
      
   },
   data() {
       return {
          
       }
   },
   filters: {
      toFix,
      formattedPrice 
   },
   computed: {
    ...mapGetters([
        'PRODUCTS'
    ]),
    product() {
     let result = {}
     this.PRODUCTS.map((item) => {
         if (item.article === this.$route.query.product) {
             result = item;
         }
     })
     return result;
    }
   },
   methods: {
    ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
    ]),
    addToCart() {
       this.ADD_TO_CART(this.product);
     }
   },
   watch: {},
   mounted() {
       this.GET_PRODUCTS_FROM_API()
   }
}
</script>

<style lang="scss">

</style>