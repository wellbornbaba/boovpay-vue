<template>
    <div ref="target">
        <transition :name="animationType">
            <div v-if="isInViewport" class="animated-component">
                <slot />
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
    name: "AnimatedComponent",
    props: {
        animationType: {
            type: String,
            required: false,
            default: "fade"
        }
    },
    setup() {
        const target = ref();
        const isInViewport = ref(false);
        let animationObserved = false;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animationObserved) {
                    isInViewport.value = true;
                    animationObserved = true;
                }
            },
            {
                threshold: 0.5
            }
        );

        onMounted(() => {
            observer.observe(target.value);
        });

        return {
            isInViewport,
            target
        };
    }
});
</script>

<style scoped>
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
  transition: none;
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  transition: transform 300ms ease;
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.9);
}
</style>
