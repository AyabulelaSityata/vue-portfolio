<template>
  <div>
    <h2>Resume</h2>
    <Education />
    <Experience />
    <Skills />
  </div>
</template>

<script>
import Education from "../components/Education.vue";
import Experience from "../components/Experience.vue";
import Skills from "../components/Skills.vue";
export default {
  components: {
    Education,
    Experience,
    Skills,
  },
};
</script>

<style scoped>

</style>
