<template>
  
    <h3 class="text-center display-6 fw-bold ">Education</h3>
    <div class="container">
      <div class="row justify-content-center gap-5">
          <div class="card p-0" v-for="education in education" style="width: 15rem;" :key="education.id">
              <img :src="education.logo" id="img" class="card-img-top" alt=" " loading="lazy">
              <div class="card-body">
                  <h5 class="card-head">
                      {{ education.institution
                      }}:
                  </h5>
                  <h5 class="card-head">
                      <p>{{education.major}}</p>
                      {{ education.year }}
                  </h5>
              </div>
          </div>
      </div>
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

</style>
