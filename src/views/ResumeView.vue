<template>
    <div>
        <h2>Resume</h2>
        <div v-for="item in education" :key="item">
            <h4>Institution: {{ item.institution }} </h4>
            <p>Grade: {{ item.grade }}</p>
            <p>Certificate: {{ item.certificate }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            education() {
                return this.$store.state.education
            }
        },
        mounted() {
            this.$store.dispatch('getEducation');
        },
    }
</script>

<style scoped>

</style>