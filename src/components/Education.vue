<template>
  <div>
    <h3 class="text-center display-6 fw-bold">Education</h3>
    <div class="education" v-if="education">
      <div class="edu-container mb-4" v-for="edu in education" :key="edu.id">
        <h4>{{ edu.institution }}</h4>
        <p>{{ edu.major }}</p>
        <p>{{ edu.year }}</p>
      </div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
  },
  mounted(){
    this.$store.dispatch("getEducation")
  }

};
</script>

<style scoped>
.edu-container {
  border-radius: 1rem;
  width: 80%;
  margin: auto;
  padding: 0.5rem;
  background-image: linear-gradient(#0000003a, #0000003f);
}
</style>
