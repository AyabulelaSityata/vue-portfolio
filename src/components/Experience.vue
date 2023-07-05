<template>
  <div>
    <h3 class="text-center display-6 fw-bold">Work Experience</h3>
    <div class="experience" v-if="experience">
      <div class="exp-container mb-4" v-for="experience in experience" :key="experience.id">
        <h4>{{ experience.company }}</h4>
      <p>{{ experience.occupation }}</p>
      <p>{{ experience.description }}</p>
      <p>{{ experience.duration }}</p>
      </div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
export default {
  computed: {
    experience() {
      return this.$store.state.experience;
    },
  },
  mounted() {
    this.$store.dispatch("getExperience")
  },
};
</script>

<style scoped>
.exp-container {
  border-radius: 1rem;
  width: 80%;
  margin: auto;
  padding: 0.5rem;
  background-image: linear-gradient(#0000003a, #0000003f);
}
</style>
