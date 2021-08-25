<template>
<div class="v-catalog-item">
    <v-popup 
    v-if="isInfoPopupVisible"
    @closePopup="closeInfoPopup"
    rightBtnTitle="Add to cart"
    :popupTitle="product_data.name"
    @rightBtnAction="addToCart"
    >
    <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
   <div>
   <p class="v-catalog-item__name">{{product_data.name}}</p>
   <p class="v-catalog-item__price">Price: {{product_data.price | toFix | formattedPrice}} p.</p>
   <p class="v-catalog-item__category">Category: {{product_data.category}}</p>
   </div>
    </v-popup>
   <img 
   class="v-catalog-item__image" 
   :src=" require('../../assets/images/' + product_data.image) " 
   alt="img"
   @click="productClick">
   <p class="v-catalog-item__name">{{product_data.name}}</p>
   <p class="v-catalog-item__price">Price: {{product_data.price | toFix | formattedPrice}} p.</p>
   <button class="v-catalog-item__show-info btn"
   @click="showInfoPopup"
   >
   Show info</button>
   <button 
   class="v-catalog-item__btn btn" 
   @click="addToCart"
   >Add to cart</button>
</div>
</template>

<script>
import vPopup from '../popup/v-popup.vue';
import toFix from '../../filters/toFix';
import formattedPrice from '../../filters/price-format';

export default {
   name: 'v-catalog-item',
   components: {
       vPopup
   },
   props: {
       product_data: {
           type: Object,
           default() {
             return {}
           }
       }
   },
   data() {
       return {
           isInfoPopupVisible: false,
       }
   },
   filters: {
       toFix,
       formattedPrice
   },
   computed: {},
   methods: {
       addToCart() {
           this.$emit('addToCart', this.product_data)
       },
       showInfoPopup() {
         this.isInfoPopupVisible = true;
       },
       closeInfoPopup() {
         this.isInfoPopupVisible = false;
       },
       productClick() {
         this.$emit('productClick', this.product_data.article)
       }
   },
   watch: {},
   mounted() {
       
   }
}
</script>

<style lang="scss">
.v-catalog-item {
    width: 250px;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 0 8px 0 #e0e0e0;
    &__image {
        width: 100px;
    }
    &__show-info {
      background: lightgray !important;
      margin-right: 10px;
    }
} 
</style>