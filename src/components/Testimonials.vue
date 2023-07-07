<template>
    <div>
        <div class="container-fluid">
            <div class="row justify-content-center gap-5">
                <div class="col" v-for="testimonial in testimonials" :key="testimonials.id">
                    <div class="card p-0" style="width: 15rem">
                        <img :src="testimonial.image" class="card-img-top" alt=" ">
                        <div class="card-body">
                            <h5>{{testimonial.personName}}</h5>
                          <p class="card-text overflow-auto">
                            {{testimonial.message}}
                        </p>
                        </div>
                      </div>
                </div>
            </div>       
        </div>
    </div>
    
</template>

<script>
export default {
    computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted(){
    this.$store.dispatch("getTestimonials")
  }
}
</script>

<style scoped>
.card-img-top {
    height: 18rem;
}

.container-fluid {
    display: flex;
    justify-content: space-evenly;
    align-items: stretch
}

.gap-5 {
    gap: 5rem!important;
}

.overflow-auto {
    height: 18rem;
}
</style>