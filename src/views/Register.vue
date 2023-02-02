<template>
    <main>
        <section class="md:h-screen py-36 flex items-center bg-[url('@/assets/bg-seo.png')] bg-no-repeat bg-center">
            <div class="px-6 h-full text-gray-800">
                <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div class="hidden md:block grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="w-full" alt="Sample image" />
                    </div>
                    <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form>
                            <a href="/"><img src="@/assets/logo.png" class="mx-auto mb-10" alt=""></a>
                            <!-- First Name input -->
                            <div class="mb-6">
                                <input type="text"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Full Name" />
                            </div>
                            <!-- Username input -->
                            <div class="mb-6">
                                <input type="text"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Username " />
                            </div>
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
                                        for="exampleCheck2">Accept Terms & Condition</label>
                                </div>
                            </div>

                            <!-- Submit button -->
                            <button type="submit"
                                class="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded-lg shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true" data-mdb-ripple-color="light">
                                Sign Up
                            </button>
                            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Already have an account?
                                    
                                    <RouterLink :to="{ path: '/login' }" class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Login</RouterLink>
                                </p>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>

        <div class="fixed bottom-3 ltr:right-3 rtl:left-3">
            <a href=""
                class="back-button btn btn-icon bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><i
                    data-feather="arrow-left" class="h-4 w-4"></i></a>
        </div>

        
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Register'
});
</script>