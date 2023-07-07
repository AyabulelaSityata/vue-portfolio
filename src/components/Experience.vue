<template>
  <div class="container-fluid">
    <h3 class="text-center display-6 fw-bold ">Work Experience</h3>
    <div class="row justify-content-center gap-5">
      <div class="card p-0" v-for="experience in experience" style="width: 15rem;" :key="experience.id">
          <img :src="experience.logo" id="img" class="card-img-top" alt=" " loading="lazy">
          <div class="card-body">
              <h5 class="card-head">
                  {{ experience.company
                  }}:
              </h5>
              <h5 class="card-head">
                  <p>{{experience.description}}</p>
                  {{ experience.duration }}
              </h5>
          </div>
      </div>
  </div>
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

</style>
