import { ref, onMounted, onUnmounted } from 'vue';

const MOBILE_BREAKPOINT = 768;

export function useMobile() {
    const isMobile = ref(window.innerWidth < MOBILE_BREAKPOINT);

    const updateIsMobile = () => {
        isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
    };

    onMounted(() => {
        window.addEventListener('resize', updateIsMobile);
        updateIsMobile();
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateIsMobile);
    });

    return isMobile;
}