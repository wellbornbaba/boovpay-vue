<template>
    <main>
        <section class="md:h-screen py-36 flex items-center bg-[url('@/assets/bg-seo.png')] bg-no-repeat bg-center">
            <div class="px-6 h-full text-gray-800">
                <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div class="hidden md:block grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class=" w-full" alt="Sample image" />
                    </div>
                    <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form>
                            <a href="/"><img src="@/assets/logo.png" class="mx-auto mb-10" alt=""></a>
                            <!-- Email input -->
                            <div class="mb-6">
                                <input type="text"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address" />
                            </div>

                            <!-- Password input -->
                            <div class="mb-6">
                                <input type="password"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password" />
                            </div>

                            <div class="flex justify-between items-center mb-6">
                                <div class="form-group form-check">
                                    <input type="checkbox"
                                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck3" checked />
                                    <label class="form-check-label inline-block text-gray-800"
                                        for="exampleCheck2">Remember me</label>
                                </div>
                                    <RouterLink :to="{ path: '/reset-password' }" class="text-gray-600 hover:text-red-700 focus:text-red-700 active:text-red-800 duration-200 transition ease-in-out" 
            >Forgot password?</RouterLink>
                            </div>

                            <!-- Submit button -->
                            <button type="submit"
                                class="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded-lg shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true" data-mdb-ripple-color="light">
                                Sign in
                            </button>
                            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <RouterLink :to="{ path: '/register' }" class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Register</RouterLink>
                                </p>

                            <div
                                class="flex items-center my-6 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                <p class="text-center font-semibold mx-4 mb-0">OR Continue with</p>
                            </div>

                            <div class="flex justify-evenly sm:ml-auto sm:mt-0 mt-4 ">
                                <a class="text-gray-100 p-2 bg-blue-900 rounded-full space-x-2 hover:bg-blue-600 cursor-pointer">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a class="text-gray-100 p-2 bg-blue-300 rounded-full space-x-2 hover:bg-blue-400 cursor-pointer">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="text-gray-100 p-2 bg-red-300 rounded-full space-x-2 hover:bg-red-400 cursor-pointer">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a class="text-gray-100 p-2 bg-blue-700 rounded-full space-x-2 hover:bg-blue-500 cursor-pointer">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                        </path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
     
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Login'
});
</script>