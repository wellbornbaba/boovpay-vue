<template>
  <header class="header-section">
    <nav
      class="
        leading-[4.4rem]
        border-red-200
        px-2
        md:px-4
        py-6
        dark:bg-gray-900
        fixed
        top-0
        w-full
        z-30
        transition
        ease-in-out
        duration-150
      "
      id="navbar"
    >
      <div
        class="
          flex flex-wrap
          items-center
          justify-between
          max-w-screen-xl
          mx-auto
        "
      >
        <a href="/" class="flex items-center">
          <img
            src="@/assets/logo.png"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
        </a>

        <div class="flex items-center md:order-2">
          <RouterLink
            :to="{ path: '/login' }"
            class="text-gray-100
              dark:text-white
              hover:bg-red-500
              focus:ring-4 focus:ring-slate-300
              font-medium
              rounded-lg
              text-sm
              px-4
              py-2
              md:px-5 md:py-2.5
              mr-1
              md:mr-2
              dark:hover:bg-red-700
              focus:outline-none
              dark:focus:ring-slate-800
            "
            id="navbarlink"
            >Login</RouterLink>

            <RouterLink
            :to="{ path: '/register' }"
            class="text-white
              bg-bvprimary
              hover:bg-red-500
              focus:ring-4 focus:ring-red-300
              font-medium
              rounded-lg
              text-sm
              px-4
              py-2
              md:px-5 md:py-2.5
              mr-1
              md:mr-2
              dark:bg-red-600 dark:hover:bg-bvprimary
              focus:outline-none
              dark:focus:ring-red-500
            "
            >Sign up</RouterLink>
         
          <button
            data-collapse-toggle="mega-menu"
            type="button"
            class="
              inline-flex
              items-center
              p-2
              ml-1
              text-sm text-red-500
              rounded-lg
              md:hidden
              hover:bg-red-100
              focus:outline-none focus:ring-2 focus:ring-gray-200
              dark:text-red-400 dark:hover:bg-red-700 dark:focus:ring-red-600
            "
            aria-controls="mega-menu"
            aria-expanded="false"
            id="togglemenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              aria-hidden="true"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class=" items-center justify-between hidden w-full text-sm md:flex md:w-auto md:order-1 z-10"
          id="mega-menu"
        >
          <ul
            class="
              flex flex-col
              mt-4
              font-medium
              md:flex-row md:space-x-8 md:mt-0
            "
          >
            <li class="group">
              <a
                href="#"
                id="navbarlink"
                class="
                  group-hover:border-b-2
                  group-hover:mb-2
                  group-hover:border-gray-50
                  group-hover:transition
                  group-hover:ease-in-out
                  flex
                  items-center
                  justify-between
                  w-full
                  pl-3
                  pr-4
                  font-medium
                  text-gray-100
                  mb-3
                  md:w-auto md:p-0
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:hover:text-red-500
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Card Machines
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-1 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <ul
                class="
                  absolute
                  hidden
                  group-hover:block
                  bg-white
                  rounded
                  shadow-md
                  py-2
                "
              >
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >Boov Easy Pay</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >Boov TAP</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >Boov Transact</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >Boov Biz Collect</a
                  >
                </li>
              </ul>
            </li>
            <li class="group">
              <a
                href="#"
                id="navbarlink"
                class="
                  group-hover:border-b-2
                  group-hover:mb-2
                  group-hover:border-gray-50
                  group-hover:transition
                  group-hover:ease-in-out
                  flex
                  items-center
                  justify-between
                  w-full
                  pl-3
                  pr-4
                  font-medium
                  text-gray-100
                  mb-3
                  md:w-auto md:p-0
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:hover:text-red-500
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Online Payments
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-1 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <ul
                class="
                  absolute
                  hidden
                  group-hover:block
                  bg-white
                  rounded
                  shadow-md
                  py-2
                "
              >
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >Overview</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >BoovPay Gateway</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >Developer Docs</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >BoovPay Link</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >BoovPay Voucher</a
                  >
                </li>
              </ul>
            </li>
            <li class="group">
              <a
                href="#"
                id="navbarlink"
                class="
                  group-hover:border-b-2
                  group-hover:mb-2
                  group-hover:border-gray-50
                  group-hover:transition
                  group-hover:ease-in-out
                  flex
                  items-center
                  justify-between
                  w-full
                  pl-3
                  pr-4
                  font-medium
                  text-gray-100
                  mb-3
                  md:w-auto md:p-0
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:hover:text-red-500
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Run Your Business
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-1 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <ul
                class="
                  absolute
                  hidden
                  group-hover:block
                  bg-white
                  rounded
                  shadow-md
                  py-2
                "
              >
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >BoovPay App</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >BoovPay Invoice</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >POS Integrations</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >Large Businesses</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >BoovPay Portal</a
                  >
                </li>
              </ul>
            </li>
            <li class="group">
              <a
                href="#"
                id="navbarlink"
                class="
                  group-hover:border-b-2
                  group-hover:mb-2
                  group-hover:border-gray-50
                  group-hover:transition
                  group-hover:ease-in-out
                  flex
                  items-center
                  justify-between
                  w-full
                  pl-3
                  pr-4
                  font-medium
                  text-gray-100
                  mb-3
                  md:w-auto md:p-0
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:hover:text-red-500
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Company
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-1 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <ul
                class="
                  absolute
                  hidden
                  group-hover:block
                  bg-white
                  rounded
                  shadow-md
                  py-2
                "
              >
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >About Us</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >Contact Us</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >Help Centre</a
                  >
                </li>
                <li>
                  <a
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    href="#"
                    >Faqs</a
                  >
                </li>
                <li>
                  <RouterLink
                    :to="{ path: '/terms-and-condition' }"
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    >Terms And Conditions</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    :to="{ path: '/policy-and-privacy' }"
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    >Policy And Privacy</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    :to="{ path: '/bvn' }"
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    >BVN Verification Page</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    :to="{ path: '/nin' }"
                    class="
                      block
                      px-4
                      py-2
                      text-gray-700
                      hover:bg-red-500 hover:text-white
                    "
                    >NIN Verification Page</RouterLink
                  >
                </li>
              </ul>
            </li>

            <li>
              <a
                href="#"
                id="navbarlink"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-100
                  border-b border-gray-100
                  hover:bg-gray-50
                  md:hover:bg-transparent md:border-0 md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-red-500
                  dark:hover:bg-gray-700 dark:hover:text-red-500
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Fees</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>


<!-- <script setup lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

</script> -->
