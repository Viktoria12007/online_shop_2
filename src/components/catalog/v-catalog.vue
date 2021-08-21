<template>
<div class="v-catalog">
  <router-link :to="{ name: 'cart', params: { cart_data: CART }}">
    <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
  </router-link>
   <h2>Catalog</h2>
   <div class="filters">
    <v-select 
    :options="categories"
    @select="setFilter" 
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
    <div class="range-slider">
      <input 
      type="range" 
      min="0" 
      max="1000" 
      step="10"
      v-model.number="minPrice"
      @change="setRangeSlider">
      <input 
      type="range" 
      min="0" 
      max="1000" 
      step="10"
      v-model.number="maxPrice"
      @change="setRangeSlider">
    </div>
    <div class="range-values">
      <p>Min: {{minPrice}}</p>
      <p>Max: {{maxPrice}}</p>
    </div>
    </div>
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
          sortedProducts: [],
          minPrice: 0,
          maxPrice: 1000
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
         return []
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
    setFilter(option) {
      this.sortedProducts = [...this.PRODUCTS];
      if(option) {
        this.selected = option.name;
      }
      this.sortedProducts = this.sortedProducts.filter(item => {
        return item.price >= this.minPrice && item.price <= this.maxPrice;
      })
      if (this.selected !== 'Все') {
        this.sortedProducts = this.sortedProducts.filter(product => {
        return product.category === this.selected;
        })
      }
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.setFilter();
     }
    },
   watch: {},
   mounted() {
       this.GET_PRODUCTS_FROM_API()
       .then((response) => {
          if(response.data) {
            console.log('Data arrived!');
            this.setFilter();
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
.filters {
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 .range-slider {
   width: 200px;
   margin: auto 16px;
   text-align: center;
   position: relative;
 }
 .range-slider svg, .range-slider input[type=range] {
   position: absolute;
   left: 0;
   bottom: 0;
 }
 input[type=range]::-webkit-slider-thumb {
   z-index: 2;
   position: relative;
   top: 2px;
   margin-top: -7px;
 }
</style>