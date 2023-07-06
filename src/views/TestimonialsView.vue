<template>
    <div class="test">
        <h2 class="test-heading">Testimonials</h2>
        <Testimonials/>
    </div>
</template>

<script>
import Testimonials from '@/components/Testimonials.vue';
    export default {
        components: {
            Testimonials
        }
    }
</script>

<style scoped>
.test {
    background-color: #bbb;
}
</style>