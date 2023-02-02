<template>
    <div class="relative overflow-hidden bg-white">
        <video autoplay loop muted
            class="absolute inset-0 z-1 w-auto min-w-full min-h-full max-w-none animate__animated animate__fadeIn animate__slow">
            <source src="@/assets/logo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div class="absolute inset-0 bg-black/30 z-2"></div>

        <div class="relative container z-3">
            <div class="pt-32 pb-80 sm:pt-32 sm:pb-40 lg:pt-56 lg:pb-48 z-3">
                <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div class="sm:max-w-lg">
                        <h1 class="
                            font
                            text-4xl
                            font-bold
                            tracking-tight
                            text-white
                            sm:text-6xl
                            ">
                            BoovPay POS machine available
                        </h1>
                        <p class="mt-4 text-base text-red-50">
                            Join over 650 000 small business owners using BoovPay to get paid and grow.
                        </p>
                    </div>
                    <div>
                        <div class="mt-10">
                            <!-- Decorative image grid -->
                            <div aria-hidden="true" class="
                        pointer-events-none
                        lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl
                    ">
                                <div class="
                        absolute
                        transform
                        sm:left-1/2 sm:top-0 sm:translate-x-8
                        lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8
                        ">
                                    <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
                                        <div class="flex-shrink-0 gap-y-6 lg:gap-y-8">
                                            <div class="h-5/6 w-5/6 overflow-hidden rounded-lg pt-24 pr-8">
                                                <img src="@/assets/apps.png" alt=""
                                                    class="h-full w-full object-cover object-bottom" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <RouterLink
                                :to="{ path: '/login' }"
                                class="inline-block
                                    rounded-md
                                    border border-transparent
                                    bg-bvprimary
                                    py-3
                                    px-8
                                    text-center
                                    font-medium
                                    text-white
                                    hover:bg-red-700
                                "
                                >Get Started <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-4 h-4 ml-2 inline-block" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
