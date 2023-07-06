<template>
  <div>
    <h2>Resume</h2>
    <div class="row">
      <div class="col-6">
        <div class="card mb-3" style="max-width: 540px;" v-for="info in info" :key="info.id">
          <div class="row g-0">
            <div class="col-md-4">
              
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ info.name }}</h5>
                <p class="card-text">{{ info.birth }}</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        <Education />
      </div>
      <div class="col-6">
        <Experience />
      </div>
    </div>
    <div class="row">
      <div class="col"> 
        <Skills />
      </div>
      <div class="col">

      </div>
    </div>
    
    
    
   
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
  computed: {
    info() {
      return this.$store.state.info;
    },
  },
  mounted() {
    this.$store.dispatch("getInfo");
  },
};
</script>

<style scoped>
.col-md-4{
  background-color: black;
}

</style>
