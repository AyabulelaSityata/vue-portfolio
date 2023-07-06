<template>
  <div class="about">
  <About/>
  </div>

  <div>
    <h2>Resume</h2>
    <Education />
    <Experience />
    <Skills />
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Education from "../components/Education.vue";
import Experience from "../components/Experience.vue";
import Skills from "../components/Skills.vue";

export default {
  components: {
    About,
    Education,
    Experience,
    Skills,
  }
}

</script>

<style scoped>
.about {
  background-color: #bbb;
}
</style>
