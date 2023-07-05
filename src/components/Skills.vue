<template>
  <div>
    <h3 class="text-center display-6 fw-bold">Skills</h3>
    <div class="skills-container mb-4" v-for="skill in skills" :key="skill.id">
      <h4>{{ skill.name }}</h4>
      <p>{{ skill.image }}</p>
      <p>{{ skill.level }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("getSkills");
  },
};
</script>

<style scoped>
.skills-container {
  border-radius: 1rem;
  width: 80%;
  margin: auto;
  padding: 0.5rem;
  background-image: linear-gradient(#0000003a, #0000003f);
}
</style>
