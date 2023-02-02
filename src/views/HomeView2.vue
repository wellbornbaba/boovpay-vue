<template>
  <Header></Header>
  <main class="holder">
    <Hero></Hero>
    <HomeSectionTip></HomeSectionTip>
    <ProductList></ProductList>
    <section id="cta-section" class="py-28 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/2 p-8">
            <img
              src="@/assets/blog-1.png"
              alt="image"
              class="w-full animated fadeInUp in-view shadow-xl rounded-lg"
            />
          </div>
          <div class="w-full lg:w-1/2 p-8">
            <h2
              class="
                text-6xl
                font-extrabold
                animated
                fadeInUp
                in-view
                text-red-500
                mb-6
              "
            >
              Use more products for lower rates
            </h2>
            <p class="text-gray-600 animated fadeInUp in-view mb-7">
              Looking for even lower transaction fees? When you use more than
              one Yoco product, we aggregate your sales to give you the best
              possible rates.
            </p>
            <a
              href="#"
              class="
                bg-red-500
                py-4
                px-6
                text-white
                rounded-lg
                animated
                fadeInUp
                mt-7
              "
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
    <animated-component>
    <section class="bg-red-50 px-5 md:px-10 relative py-32">
      <div class="container mx-auto md:grid md:grid-cols-2 md:gap-10">
        <div class="w-full md:col-span-1 pl-10 mb-6">
          <h3 class="text-4xl lg:text-6xl md:text-5xl font-extrabold animate__animated animate__bounceInUp">
            Accept card payments online
          </h3>
          <p class="text-gray-700 mt-10 text-ellipsis animate__animated animate__fadeInUp">
            Send unlimited click-to-pay invoices to your customers for free. Get
            paid online without a website. Send a payment link in any chat! Get
            paid on your WooCommerce, Wix, Shopify or Shopstar store.
          </p>
          <ul class="list-none text-slate-400 mt-8">
            <li class="mb-1 flex text-gray-700 text-ellipsis">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-green-600 text-xl mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              24/7 Network availability
            </li>
            <li class="mb-1 flex text-gray-700 text-ellipsis">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-green-600 text-xl mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              Low Interest rate per transactions
            </li>
            <li class="mb-1 flex text-gray-700 text-ellipsis">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-green-600 text-xl mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              Customerize printout label
            </li>
            <li class="mb-1 flex text-gray-700 text-ellipsis">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-green-600 text-xl mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              100% battery life span
            </li>
            <li class="mb-1 flex text-gray-700 text-ellipsis">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-green-600 text-xl mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              Easy app logs
            </li>
          </ul>
        </div>
        <div class="w-full md:col-span-1 overflow-x-hidden overflow-hidden">
          <div class="relative">
            <div
              class="
                overflow-hidden
                absolute
                md:h-[550px]
                h-[400px]
                md:w-[550px]
                w-[400px]
                bg-gray-200/40
                dark:bg-gray-900/40
                bottom-1/2
                translate-y-1/2
                left-0
                right-0
                mx-auto
                z-0
                rounded-full
              "
            ></div>
            <img
              src="@/assets/classic02.png"
              class="mx-auto relative z-2"
              alt=""
            />
            <div
              class="
                md:w-72
                w-64
                absolute
                md:-top-4
                top-0
                ltr:lg:left-0
                rtl:lg:right-0
                ltr:md:-left-14
                rtl:md:-right-14
                ltr:left-0
                rtl:right-0
                z-3
                animate__animated animate__slideInDown
              "
            >
              <div
                class="
                  p-5
                  bg-white
                  dark:bg-slate-900
                  rounded-md
                  shadow
                  dark:shadow-gray-800
                "
              >
                <h5 class="text-lg font-semibold mb-2">Your Funds</h5>
                <span class="text-2xl font-bold">&#8358; 48,756.55</span>

                <img src="@/assets/fund.png" class="rounded-md mt-5" alt="" />
              </div>
            </div>

            <div class="md:w-[350px] w-72 absolute top-1/3 left-1/4 z-4 animate__animated animate__zoomInRight">
              <div
                class="p-5 bg-red-400 rounded-md shadow dark:shadow-gray-800"
              >
                <img src="@/assets/visaa.png" class="h-16" alt="" />

                <div class="pt-5">
                  <h5 class="text-lg font-bold text-white">
                    •••• •••• •••• 9856
                  </h5>

                  <div class="flex justify-between text-gray-50 mt-4">
                    <p>Emeka Adeola Ahmad</p>
                    <span>
                      Exp:
                      <span>01/24</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src="@/assets/feature-item-1.png"
            alt="Image 3"
            class="
              w-32
              h-32
              absolute
              top-0
              right-0
              -mt-12
              -mr-22
              transform
              transition
              duration-300
              ease-in-out
              hover:scale-150 hover:opacity-75
            "
          />
          <img
            src="@/assets/more-feature.png"
            alt="Image 4"
            class="
              w-32
              h-32
              absolute
              top-0
              left-0
              -mt-24
              -ml-212
              transform
              transition
              duration-300
              ease-in-out
              hover:scale-150 hover:opacity-75
              object-cover object-center
            "
          />
        </div>
      </div>
    </section>
</animated-component>
    <section
      class="
        text-gray-600
        py-30
        w-full
        table
        relative
        bg-[url(@/assets/blog-post-background-v1.jpg)] bg-center bg-no-repeat
      "
    >
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1
            class="
              text-4xl
              font-extrabold
              text-center
              title-font
              text-gray-900
              mb-4
            "
          >
            Smaller than banks, but big on service
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            <span class="text-black text-2xl font-bold">Boov</span>
            <span class="text-bvprimary text-2xl font-bold">Pay</span>
            POS Machines make its easier to make online payment and withdrawer
            at ease
          </p>
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Help Center</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">24/7 Support</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">FAQ's</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Live Chat</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Cash Advance</span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-red-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">Online Transfer</span>
            </div>
          </div>
        </div>
        <button
          class="
            flex
            mx-auto
            mt-16
            text-white
            bg-red-500
            border-0
            py-2
            px-8
            focus:outline-none
            hover:bg-red-600
            rounded
            text-lg
          "
        >
          Contact Us Now
        </button>
      </div>
    </section>

    <section class="text-gray-600 body-font bg-red-50 pt-22">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1
            class="
              text-4xl
              font-medium
              title-font
              text-gray-900
              lg:w-1/3 lg:mb-0
              mb-4
            "
          >
            Happy Customers who made the right decisions
          </h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            With
            <span class="text-black text-2xl font-bold">Boov</span>
            <span class="text-bvprimary text-2xl font-bold">Pay</span>
            POS Machines your small shops can grown to big business with ease
            money making with our POS Machines, so whu not join us.
          </p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="@/assets/shop2.png"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="@/assets/shop3.png"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="@/assets/shop1.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="@/assets/shop6.png"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="@/assets/shop4.png"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="@/assets/shop5.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-black">
      <div id="default-carousel" class="relative" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <!-- <div class="flex-wrap">
              <div class="w-full lg:w-1/2 p-8">
                <img
                  src="@/assets/blog-1.png"
                  alt="image"
                  class="w-full animated fadeInUp in-view shadow-xl rounded-lg"
                />
              </div>
              <div class="w-full lg:w-1/2 p-8">
                <h2
                  class="
                    text-6xl
                    font-extrabold
                    animated
                    fadeInUp
                    in-view
                    text-red-500
                    mb-6
                  "
                >
                  Use more products for lower rates
                </h2>
                <p class="text-gray-600 animated fadeInUp in-view mb-7">
                  Looking for even lower transaction fees? When you use more
                  than one Yoco product, we aggregate your sales to give you the
                  best possible rates.
                </p>
                <a
                  href="#"
                  class="
                    bg-red-500
                    py-4
                    px-6
                    text-white
                    rounded-lg
                    animated
                    fadeInUp
                    mt-7
                  "
                >
                  Learn More
                </a>
              </div>
            </div> -->
            <span
              class="
                absolute
                text-2xl
                font-semibold
                text-black
                -translate-x-1/2 -translate-y-1/2
                top-1/2
                left-1/2
                sm:text-3xl
                dark:text-gray-800
              "
            >
              First Slide
            </span>
            <img
              src="https://dummyimage.com/502x302"
              class="
                absolute
                block
                w-full
                -translate-x-1/2 -translate-y-1/2
                top-1/2
                left-1/2
              "
              alt="..."
            />
          </div>
          <!-- Item 2 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://dummyimage.com/502x302"
              class="
                absolute
                block
                w-full
                -translate-x-1/2 -translate-y-1/2
                top-1/2
                left-1/2
              "
              alt="..."
            />
          </div>
          <!-- Item 3 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://dummyimage.com/502x302"
              class="
                absolute
                block
                w-full
                -translate-x-1/2 -translate-y-1/2
                top-1/2
                left-1/2
              "
              alt="..."
            />
          </div>
        </div>
        <!-- Slider indicators -->
        <div
          class="
            absolute
            z-30
            flex
            space-x-3
            -translate-x-1/2
            bottom-5
            left-1/2
          "
        >
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="
            absolute
            top-0
            left-0
            z-30
            flex
            items-center
            justify-center
            h-full
            px-4
            cursor-pointer
            group
            focus:outline-none
          "
          data-carousel-prev
        >
          <span
            class="
              inline-flex
              items-center
              justify-center
              w-8
              h-8
              rounded-full
              sm:w-10 sm:h-10
              bg-white/30
              dark:bg-gray-800/30
              group-hover:bg-white/50
              dark:group-hover:bg-gray-800/60
              group-focus:ring-4 group-focus:ring-white
              dark:group-focus:ring-gray-800/70
              group-focus:outline-none
            "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="
            absolute
            top-0
            right-0
            z-30
            flex
            items-center
            justify-center
            h-full
            px-4
            cursor-pointer
            group
            focus:outline-none
          "
          data-carousel-next
        >
          <span
            class="
              inline-flex
              items-center
              justify-center
              w-8
              h-8
              rounded-full
              sm:w-10 sm:h-10
              bg-white/30
              dark:bg-gray-800/30
              group-hover:bg-white/50
              dark:group-hover:bg-gray-800/60
              group-focus:ring-4 group-focus:ring-white
              dark:group-focus:ring-gray-800/70
              group-focus:outline-none
            "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
    <animated-component animation-type="zoom">
    <section class="text-gray-600 body-font bg-gray-50 py-32 ">
      <div class="container px-5 mx-auto">
        <div class="grid grid-cols-1 pb-8 text-center">
          <h3
            class="
              mb-4
              md:text-3xl md:leading-normal
              text-2xl
              leading-normal
              font-semibold
              animate__animated animate__heartBeat animate__slower
            "
          >
            Our community
          </h3>

          <p class="text-slate-400 max-w-xl mx-auto mb-8  animate__animated animate__bounceInLeft">
            Start working with BoovPay and join our community that can provide
            everything you need to generate more income with our POS machines,
            awareness, drive traffic and connect.
          </p>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div
              class="
                h-full
                border-2 border-gray-200 border-opacity-60
                rounded-lg
                overflow-hidden
              "
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="@/assets/blog1.png"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="
                    mb-2
                    text-2xl
                    font-bold
                    tracking-tight
                    text-gray-900
                    dark:text-white
                  "
                >
                  How to get paid
                </h2>
                <!-- <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1> -->
                <p class="leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  consequatur consequuntur nam repudiandae delectus incidunt
                  ipsa earum quos corrupti neque soluta provident, recusandae
                  eveniet inventore cum vitae error dolorem vero.
                </p>
                <div class="flex items-center flex-wrap">
                  <a
                    href="#"
                    class="
                      text-red-500
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span
                    class="
                      text-gray-400
                      mr-3
                      inline-flex
                      items-center
                      lg:ml-auto
                      md:ml-0
                      ml-auto
                      leading-none
                      text-sm
                      pr-3
                      py-1
                      border-r-2 border-gray-200
                    "
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span
                    class="
                      text-gray-400
                      inline-flex
                      items-center
                      leading-none
                      text-sm
                    "
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 md:w-1/3">
            <div
              class="
                h-full
                border-2 border-gray-200 border-opacity-60
                rounded-lg
                overflow-hidden
              "
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="@/assets/blog1.png"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="
                    mb-2
                    text-2xl
                    font-bold
                    tracking-tight
                    text-gray-900
                    dark:text-white
                  "
                >
                  How to get paid
                </h2>
                <!-- <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1> -->
                <p class="leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  consequatur consequuntur nam repudiandae delectus incidunt
                  ipsa earum quos corrupti neque soluta provident, recusandae
                  eveniet inventore cum vitae error dolorem vero.
                </p>
                <div class="flex items-center flex-wrap">
                  <a
                    href="#"
                    class="
                      text-red-500
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span
                    class="
                      text-gray-400
                      mr-3
                      inline-flex
                      items-center
                      lg:ml-auto
                      md:ml-0
                      ml-auto
                      leading-none
                      text-sm
                      pr-3
                      py-1
                      border-r-2 border-gray-200
                    "
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span
                    class="
                      text-gray-400
                      inline-flex
                      items-center
                      leading-none
                      text-sm
                    "
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 md:w-1/3">
            <div
              class="
                h-full
                border-2 border-gray-200 border-opacity-60
                rounded-lg
                overflow-hidden
              "
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="@/assets/blog1.png"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="
                    mb-2
                    text-2xl
                    font-bold
                    tracking-tight
                    text-gray-900
                    dark:text-white
                  "
                >
                  How to get paid
                </h2>
                <!-- <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1> -->
                <p class="leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  consequatur consequuntur nam repudiandae delectus incidunt
                  ipsa earum quos corrupti neque soluta provident, recusandae
                  eveniet inventore cum vitae error dolorem vero.
                </p>
                <div class="flex items-center flex-wrap">
                  <a
                    href="#"
                    class="
                      text-red-500
                      inline-flex
                      items-center
                      md:mb-2
                      lg:mb-0
                    "
                  >
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span
                    class="
                      text-gray-400
                      mr-3
                      inline-flex
                      items-center
                      lg:ml-auto
                      md:ml-0
                      ml-auto
                      leading-none
                      text-sm
                      pr-3
                      py-1
                      border-r-2 border-gray-200
                    "
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span
                    class="
                      text-gray-400
                      inline-flex
                      items-center
                      leading-none
                      text-sm
                    "
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </animated-component>

    <section class="text-gray-600 body-font py-30">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1
            class="
              sm:text-3xl
              text-2xl
              font-medium
              title-font
              mb-4
              text-gray-900
            "
          >
            <span class="text-black text-2xl font-bold">Boov</span>
            <span class="text-bvprimary text-2xl font-bold">Pay</span>
            getting bigger and better
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            More users, reach and networks with our statistics growth more.
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-red-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path
                  d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"
                ></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-red-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                1.3K
              </h2>
              <p class="leading-relaxed">Users</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="text-red-500 w-12 h-12 mb-3 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                />
              </svg>

              <h2 class="title-font font-medium text-3xl text-gray-900">5</h2>
              <p class="leading-relaxed">POS</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="text-red-500 w-12 h-12 mb-3 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>

              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
              <p class="leading-relaxed">Branch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <Footer></Footer>
</template>


<script lang="ts">
import Footer from "../components/Footer.vue";
import ProductList from "../components/ProductList.vue";
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import HomeSectionTip from "../components/HomeSectionTip.vue";
import Pos from "../components/Pos.vue";
import { defineComponent } from 'vue'
import AnimatedComponent from "../components/AnimatedComponent.vue";

export default defineComponent({
    components:{
    Header,
    Footer,
    Hero,
    ProductList,
    HomeSectionTip,
    Pos,
    AnimatedComponent
  }
})
</script>