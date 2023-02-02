<template>
    <main>
        <section
            class="h-screen py-36 flex items-center justify-center bg-[url('@/assets/bg-seo.png')] bg-no-repeat bg-center">
            <div class="mb-12 md:mb-0 border-2 rounded-lg border-red-50 p-10">
                <form>
                    <a href="/"><img src="@/assets/logo.png" class="mx-auto mb-10" alt=""></a>
                    <!-- Email input -->
                    <div class="my-3 flex flex-col items-center justify-center">
                        <h1 class="text-2xl">Hi, <span class="text-gray-50">Mike David</span></h1>
                        <img src="@/assets/user.jpg" class="h-24 border-2 border-white rounded-full m-4" />
                        <p class="text-gray-500 text-xs inline-flex text-wrap ">You're required to verify your BVN
                            number kindly input your number and submit</p>
                    </div>
                    <div class="mb-6">

                        <input type="text"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                            placeholder="BVN Verication No" />
                    </div>

                    <!-- Submit button -->
                    <button type="submit"
                        class="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded-lg shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true" data-mdb-ripple-color="light">
                        verify now
                    </button>
                </form>

            </div>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'BvnVerification'
});
</script>