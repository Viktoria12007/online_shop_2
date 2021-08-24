<template>
<div class="v-main-wrapper">
    <v-header />
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>
import vHeader from './layouts/v-header.vue'

export default {
   name: 'v-main-wrapper',
   components: {
       vHeader
   },
   props: {},
   data() {
       return {
           title: 'v-main-wrapper.vue',
       }
   },
   computed: {},
   methods: {},
   watch: {},
   mounted() {
       
   }
}
</script>

<style>
.v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
}
</style>