<template>
    <!-- <div> -->
        <Header />
        <main class="holder">
            <slot />
        </main>
        <Footer />
    <!-- </div> -->
</template>

<script lang="ts">

import Footer from "./Footer.vue";
import Header from "./Header.vue";
import { defineComponent } from 'vue'

export default defineComponent({
    components:{
    Header,
    Footer
  }
})

</script>