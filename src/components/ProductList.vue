<template>
    <section class="
      text-gray-600
      bg-red-50
      dark:bg-gray-400 dark:text-white
      animate__animated animate__fadeIn pb-20
    ">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col">
                <div class="h-1 bg-red-200 rounded overflow-hidden">
                    <div class="w-24 h-full bg-red-500"></div>
                </div>
                <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                    <h1
                        class="sm:w-2/5 text-gray-900 text-4xl mb-2 sm:mb-0 font-extrabold animate__animated  animate__bounceInDown	 ">
                        Card Machines
                    </h1>
                    <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                        List of our POS machines and their prices.
                    </p>
                </div>
            </div>

            <div class="flex flex-wrap -mx-2 ">

                <div class="animate__animated  animate__bounceInDown relative p-4 w-full md:w-1/2 lg:w-1/4  mb-10 bg-red-100 rounded-xl shadow hover:shadow-md dark:hover:shadow-lg dark:shadow-gray-700 ease-in-out duration-500 ">
                    <div class="absolute inset-x-0 transform translate-y-px -top-1">
                        <div class="flex justify-center transform -translate-y-1/2 rounded-3xl">
                            <span class="
                  inline-flex
                  px-4
                  py-1
                  text-sm
                  font-bold
                  tracking-wider
                  uppercase
                  bg-white
                  border-8 border-red-100
                  text-gray-800
                  rounded-xl
                ">
                                Printer</span>
                        </div>
                    </div>
                    <div class="rounded-lg h-auto overflow-hidden py-8">
                        <img alt="content" class="
                object-center
                w-full
                transition
                duration-500
                ease-in-out
                transform
                hover:scale-150
              " src="@/assets/pos-manual-product.png" />
                    </div>
                    <h2 class="text-3xl font-bold text-red-700 mt-5">Boov Biz Collect</h2>
                    <div class="pt-2">
                        <img src="//a.storyblok.com/f/111633/x/1d80fc431d/yoco-khumo-print-grey.svg/m/" class="mb-4 h-5"
                            alt="Yoco Khumo - Touch pay, VISA, Mastercard, Apple pay" loading="lazy" width="260"
                            height="20" />
                        <p class="text-fs-13 lg:text-fs-14 inherit w-full lg:w-72 whitespace-normal overflow-hidden">
                            Our brand new smart card machine. Helps you grow with unlimited 4G
                            data, WiFi and a built-in printer.
                        </p>
                    </div>
                    <div class="flex flex-row my-4 justify-evenly items-center">
                        <p class="text-3xl font-medium lg:text-fs-14 text-gray mr-2">
                            <span class="text-2xl font-extrabold">&#8358;</span>50,000.00
                        </p>
                        <div class="relative">
                            <p class="
                  text-fs-13
                  lg:text-fs-14
                  text-gray
                  font-grotesk-25
                  line-through
                ">
                                &#8358;53,499.00
                            </p>
                        </div>
                    </div>

                    <div class="flex justify-evenly items-center">
                        <a href="#" class="
                inline-block
                rounded-md
                border border-transparent
                bg-bvprimary
                py-3
                px-2
                my-4
                text-center
                font-medium
                text-white
                hover:bg-red-700
                w-full
              ">Buy Now
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 ml-2 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </a>
                        <a href="#" class="
                inline-block
                py-3
                px-1
                my-4
                text-center
                font-medium
                text-gray-600
                hover:text-red-800
                w-full
              ">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2 inline-block hover:transition-transform"
                                viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="animate__animated  animate__bounceInLeft relative p-4 w-full md:w-1/2 lg:w-1/4   mb-10  bg-red-50 rounded-xl shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 ease-in-out duration-500 ">
                    <div class="absolute inset-x-0 transform translate-y-px -top-1">
                        <div class="flex justify-center transform -translate-y-1/2 rounded-3xl">
                            <span class="
                  inline-flex
                  px-4
                  py-1
                  text-sm
                  font-bold
                  tracking-wider
                  uppercase
                  bg-white
                  border-8 border-red-100
                  text-gray-800
                  rounded-xl
                ">
                                Popular</span>
                        </div>
                    </div>
                    <div class="rounded-lg h-auto overflow-hidden py-8">
                        <img alt="content" class="
                object-center
                w-full
                transition
                duration-500
                ease-in-out
                transform
                hover:scale-150
              " src="@/assets/pos-andriod-product.png" />
                    </div>
                    <h2 class="text-3xl font-bold text-red-700 mt-5">Boov Transact</h2>
                    <div class="pt-2">
                        <img src="//a.storyblok.com/f/111633/x/1d80fc431d/yoco-khumo-print-grey.svg/m/" class="mb-4 h-5"
                            alt="Yoco Khumo - Touch pay, VISA, Mastercard, Apple pay" loading="lazy" width="260"
                            height="20" />
                        <p class="text-fs-13 lg:text-fs-14 inherit w-full lg:w-72 whitespace-normal overflow-hidden">
                            Our brand new smart card machine. Helps you grow with unlimited 4G
                            data, WiFi and a built-in printer.
                        </p>
                    </div>
                    <div class="flex flex-row my-4 justify-evenly items-center">
                        <p class="text-3xl font-medium lg:text-fs-14 text-gray mr-2">
                            <span class="text-2xl font-extrabold">&#8358;</span>76,000.00
                        </p>
                        <div class="relative">
                            <p class="
                  text-fs-13
                  lg:text-fs-14
                  text-gray
                  font-grotesk-25
                  line-through
                ">
                                &#8358;83,499.00
                            </p>
                        </div>
                    </div>

                    <div class="flex justify-evenly items-center">
                        <a href="#" class="
                inline-block
                rounded-md
                border border-transparent
                bg-bvprimary
                py-3
                px-2
                my-4
                text-center
                font-medium
                text-white
                hover:bg-red-700
                w-full
              ">Buy Now
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 ml-2 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </a>
                        <a href="#" class="
                inline-block
                py-3
                px-1
                my-4
                text-center
                font-medium
                text-gray-600
                hover:text-red-800
                w-full
              ">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2 inline-block hover:transition-transform"
                                viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="animate__animated  animate__bounceInRight relative p-4 w-full md:w-1/2 lg:w-1/4 mb-10 bg-red-100 rounded-xl shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 ease-in-out  duration-500 ">
                    <div class="absolute inset-x-0 transform translate-y-px -top-1">
                        <div class="flex justify-center transform -translate-y-1/2 rounded-3xl">
                            <span class="
                  inline-flex
                  px-4
                  py-1
                  text-sm
                  font-bold
                  tracking-wider
                  uppercase
                  bg-white
                  border-8 border-red-100
                  text-gray-800
                  rounded-xl
                ">
                                Bluetooth</span>
                        </div>
                    </div>
                    <div class="rounded-lg h-auto overflow-hidden py-8">
                        <img alt="content" class="
                object-center
                w-full
                transition
                duration-500
                ease-in-out
                transform
                hover:scale-150
              " src="@/assets/pos-manual-product.png" />
                    </div>
                    <h2 class="text-3xl font-bold text-red-700 mt-5">Boov TAP</h2>
                    <div class="pt-2">
                        <img src="//a.storyblok.com/f/111633/x/1d80fc431d/yoco-khumo-print-grey.svg/m/" class="mb-4 h-5"
                            alt="Yoco Khumo - Touch pay, VISA, Mastercard, Apple pay" loading="lazy" width="260"
                            height="20" />
                        <p class="text-fs-13 lg:text-fs-14 inherit w-full lg:w-72 whitespace-normal overflow-hidden">
                            Our brand new smart card machine. Helps you grow with unlimited 4G
                            data, WiFi and a built-in printer.
                        </p>
                    </div>
                    <div class="flex flex-row my-4 justify-evenly items-center">
                        <p class="text-3xl font-medium lg:text-fs-14 text-gray mr-2">
                            <span class="text-2xl font-extrabold">&#8358;</span>39,000.00
                        </p>
                        <div class="relative">
                            <p class="
                  text-fs-13
                  lg:text-fs-14
                  text-gray
                  font-grotesk-25
                  line-through
                ">
                                &#8358;43,499.00
                            </p>
                        </div>
                    </div>

                    <div class="flex justify-evenly items-center">
                        <a href="#" class="
                inline-block
                rounded-md
                border border-transparent
                bg-bvprimary
                py-3
                px-2
                my-4
                text-center
                font-medium
                text-white
                hover:bg-red-700
                w-full
              ">Buy Now
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 ml-2 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </a>
                        <a href="#" class="
                inline-block
                py-3
                px-1
                my-4
                text-center
                font-medium
                text-gray-600
                hover:text-red-800
                w-full
              ">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2 inline-block hover:transition-transform"
                                viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="animate__animated  animate__bounceInUp relative p-4 w-full md:w-1/2 lg:w-1/4 mb-10 bg-red-50 rounded-xl shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 ease-in-out duration-500 ">
                    <div class="absolute inset-x-0 transform translate-y-px -top-1">
                        <div class="flex justify-center transform -translate-y-1/2 rounded-3xl">
                            <span class="
                  inline-flex
                  px-4
                  py-1
                  text-sm
                  font-bold
                  tracking-wider
                  uppercase
                  bg-white
                  border-8 border-red-100
                  text-gray-800
                  rounded-xl
                ">
                                Popular</span>
                        </div>
                    </div>
                    <div class="rounded-lg h-auto overflow-hidden py-8">
                        <img alt="content" class="
                object-center
                w-full
                transition
                duration-500
                ease-in-out
                transform
                hover:scale-150
              " src="@/assets/pos-mini-product.png" />
                    </div>
                    <h2 class="text-3xl font-bold text-red-700 mt-5">Boov Easy Pay</h2>
                    <div class="pt-2">
                        <img src="//a.storyblok.com/f/111633/x/1d80fc431d/yoco-khumo-print-grey.svg/m/" class="mb-4 h-5"
                            alt="Yoco Khumo - Touch pay, VISA, Mastercard, Apple pay" loading="lazy" width="260"
                            height="20" />
                        <p class="text-fs-13 lg:text-fs-14 inherit w-full lg:w-72 whitespace-normal overflow-hidden">
                            Our brand new smart card machine. Helps you grow with unlimited 4G
                            data, WiFi and a built-in printer.
                        </p>
                    </div>
                    <div class="flex flex-row my-4 justify-evenly items-center">
                        <p class="text-3xl font-medium lg:text-fs-14 text-gray mr-2">
                            <span class="text-2xl font-extrabold">&#8358;</span>24,000.00
                        </p>
                        <div class="relative">
                            <p class="
                  text-fs-13
                  lg:text-fs-14
                  text-gray
                  font-grotesk-25
                  line-through
                ">
                                &#8358;53,499.00
                            </p>
                        </div>
                    </div>

                    <div class="flex justify-evenly items-center">
                        <a href="#" class="
                inline-block
                rounded-md
                border border-transparent
                bg-bvprimary
                py-3
                px-2
                my-4
                text-center
                font-medium
                text-white
                hover:bg-red-700
                w-full
              ">Buy Now
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 ml-2 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </a>
                        <a href="#" class="
                inline-block
                py-3
                px-1
                my-4
                text-center
                font-medium
                text-gray-600
                hover:text-red-800
                w-full
              ">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2 inline-block hover:transition-transform"
                                viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Slider from './Slider.vue';

export default defineComponent({
    components: {
        Slider
    },
    data() {
        return {
            slides: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5']
        };
    }
});
</script>