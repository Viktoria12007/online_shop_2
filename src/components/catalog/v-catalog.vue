<template>
<div class="v-catalog">
  <router-link :to="{ name: 'cart', params: { cart_data: CART }}">
    <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
  </router-link>
   <h2>Catalog</h2>
    <v-select 
    :options="categories"
    @select="selectCategory" 
    :selected="selected"
    />
    <!-- <v-select 
    :options="categories"
    @select="selectCategory" 
    :selected="selected"
    :isExpanded="IS_DESKTOP"
    Изменение состояния приложения в зависимости от 
    изменения ширины экрана
    /> -->
   <div class="v-catalog__list">
   <v-catalog-item 
   v-for="product in filteredProducts"
   :key="product.article"
   :product_data="product"
   @addToCart="addToCart"/>
   </div>
</div>
</template>

<script>
import vSelect from '../v-select.vue';
import vCatalogItem from './v-catalog-item.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
   name: 'v-catalog',
   components: {
       vSelect,
       vCatalogItem
   },
   props: {},
   data() {
       return {
          categories: [
            {name: 'Все', value: 'all'},
            {name: 'Мужские', value: 'man'},
            {name: 'Женские', value: 'woman'}
          ],
          selected: 'Все',
          sortedProducts: []
    }
   },
   computed: {
     ...mapGetters([
       'PRODUCTS',
       'CART',
      //  'IS_DESKTOP'  Изменение состояния приложения в зависимости от 
      //  изменения ширины экрана
     ]),
     filteredProducts() {
       if (this.sortedProducts.length) {
         return this.sortedProducts
       }
       else {
         return this.PRODUCTS
       }
     }
   },
   methods: {
     ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
     ]),
     addToCart(data) {
       this.ADD_TO_CART(data);
     },
    selectCategory(option) { 
      this.sortedProducts = this.PRODUCTS.filter((product) => {
        return product.category === option.name
      })
      this.selected = option.name;
    }
   },
   watch: {},
   mounted() {
       this.GET_PRODUCTS_FROM_API()
       .then((response) => {
          if(response.data) {
            console.log('Data arrived!')
          }
       })
   }
}
</script>

<style lang="scss">
.v-catalog {
    &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    }
    &__link_to_cart {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 16px;
      border: 1px solid lightgray;
    }
} 
</style>