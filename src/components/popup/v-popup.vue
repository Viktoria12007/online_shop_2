<template>
<div class="popup_wrapper" ref="popup_wrapper">
<div class="v-popup">
  <div class="v-popup__header">
      <span>{{popupTitle}}</span>
      <span class="cross_btn btn">
          <i class="material-icons"
          @click="closePopup"
          >
          close</i>
      </span>
  </div>
  <div class="v-popup__content">
      <slot></slot>
  </div>
  <div class="v-popup__footer">
      <button class="close_modal btn" @click="closePopup">Close</button>
      <button class="submit_btn btn"
      @click="rightBtnAction">
      {{rightBtnTitle}}</button>
  </div>
</div>
</div>
</template>

<script>

export default {
   name: 'v-popup',
   components: {

   },
   props: {
       popupTitle: {
           type: String,
           default: 'Popup name'
       },
       rightBtnTitle: {
           type: String,
           default: 'Ok'
       }
   },
   data() {
       return {
        
    }
   },
   computed: {
    
   },
   methods: {
      closePopup() {
          this.$emit('closePopup');
      },
      rightBtnAction() {
          this.$emit('rightBtnAction');
      }
    },
   watch: {},
   mounted() {
       document.addEventListener('click', (e) => {
           if (e.target === this.$refs['popup_wrapper']) {
             this.closePopup();
           }
       })
   }
}
</script>

<style lang="scss">
.popup_wrapper {
    background: rgba(64,64,64, .4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .v-popup {
    position: fixed;
    z-index: 20;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    max-width: 100%;
    max-height: 100%;
    padding: 16px;
    background: $white-color;
    box-shadow: 0 0 17px 0 #e7e7e7;
    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .submit_btn {
      padding: 8px;
      color: $white-color;
      background: $green-bg;
    }
    .close_modal {
      padding: 8px;
      color: $white-color;
      background: red;
    }
    .cross_btn {
        color: #333333;
        background: transparent;
    }
  }
</style>