<template>
	<!-- Scroll To Top Start-->
	<div id="scroll-to-top" class="fixed bottom-20 right-10 bg-red-500 text-white p-5 rounded-lg cursor-pointer z-50 hidden">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
		  </svg>
	</div>
    <!-- Scroll To Top End -->
	<RouterView />
</template>


<script setup lang="ts">
import { defineComponent, onMounted } from "vue";
import { RouterView } from "vue-router";
import {initCarousels, initDropdowns  } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
    initCarousels();
    initDropdowns();
});

</script>

