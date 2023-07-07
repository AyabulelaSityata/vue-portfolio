<template>
  <h3 class="text-center display-6 fw-bold">Skills</h3>
  <div class="eduction" v-if="skills">
    <div class="row">
      <div class="col" v-for="skills in skills" :key="skills.id">
        <img :src="skills.image" alt="">
      </div>
    </div>
  </div>
  <div v-else>Loading</div>
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

  margin: auto;
  padding: 0.5rem;
}

img {
  height:10rem;
  margin-top: 2rem;
  
}
</style>
