<template>
    <div class="projectsDiv">
        <h2>Projects</h2>
        <Projects/>
    </div>
</template>

<script>
import Projects from '@/components/Projects.vue';
export default {
    components: {
        Projects
    }
}
</script>

<style scoped>
.projectsDiv {
    background-color: #bbb;
}
</style>