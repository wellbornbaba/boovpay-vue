<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
          {{ slide }}
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
//   import Swiper from 'swiper';
import Swiper from 'swiper';

  export default defineComponent({
    mounted() {
      new Swiper(this.$el, {
        slidesPerView: 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        }
      });
    },
    props: {
      slides: {
        type: Array,
        required: true
      }
    }
  });
  </script>
  