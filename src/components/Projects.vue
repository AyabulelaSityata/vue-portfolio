<template>
    <div class="container-fluid" v-if="projects">
      <div class="col-3" v-for="project in projects" :key="project.id">
        <div class="card" style="width: 18rem;">
          <img :src="project.image" class="card-img-top" alt="Image">
          <div class="card-body">
            <h5 class="card-title">{{project.name}}</h5>
            <p class="card-text">{{project.description}}</p>
            <div class="links">
              <a href="#" class="btn btn-primary">github</a>
              <a href="#" class="btn btn-primary">netflify</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading</div>
</template>

<script>
    export default {
      computed: {
            projects() {
                return this.$store.state.projects;
            }
        },
        mounted() {
            this.$store.dispatch("getProjects");
        }
    }
</script>

<style scoped>
.col {
  grid-auto-columns: auto;
}

.links {
  gap: 2rem;
}
</style>