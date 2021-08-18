<template>
<div class="v-select">
  <p class="v-select__title"
  @click="areOptionsVisible = !areOptionsVisible"
  >{{selected}}</p>
  <div class="options"
  v-if="areOptionsVisible">
    <p
    v-for="option in options"
    :key="option.value"
    @click="selectOption(option)"
    >
    {{option.name}}
    </p>
  </div>
</div>
</template>

<script>

export default {
   name: 'v-select',
   components: {},
   props: {
     options: {
         type: Array,
         default () {
             return []
         }
     },
     selected: {
         type: String,
         default: ''
     }
   },
   data() {
       return {
        areOptionsVisible: false,
       }
   },
   computed: {},
   methods: {
       selectOption(option) {
         this.$emit('select', option);
         this.areOptionsVisible = false;
       },
       hideSelect(e) {
           if (e.target !== document.querySelector(".v-select__title")) {
             this.areOptionsVisible = false;
           }
       }
   },
   watch: {},
   mounted() {
     document.addEventListener('click', this.hideSelect.bind(this), true);
   },
   beforeDestroy() {
     document.removeEventListener('click', this.hideSelect);
   }
}
</script>

<style lang="scss">
.v-select {
    position: relative;
    width: 200px;
    text-align: left;
    cursor: pointer;
    margin-bottom: 20px;
    background-color: #ffffff;
    &__title {
        padding: 10px;
        border: 1px solid lightgray;
    }
    & p {
        padding: 10px;
    }
}
.options {
    width: 100%;
    position: absolute;
    top: 40px;
    left: 0;
    border: 1px solid lightgray;
    background-color: #ffffff;
    & p:hover {
        background-color: lightgrey;
    }
}
</style>