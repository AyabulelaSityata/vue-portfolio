<template>
    <div>
        <div class="test-container" v-if="testimonials">
            <div class="row">
                <div v-for="testimonial in testimonials" :key="testimonial.id" class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-content-center mb-4">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img v-bind:src="testimonial.image" alt="">
                            </div>
                            <div class="flip-card-back">
                                <p>{{ testimonial.message }}</p>
                                <p>{{ testimonial.relationship }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div v-else>
            Loading
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
.test-container {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: column nowrap;
    overflow-x: hidden;
    background-size: cover;
    margin-top: 2rem;
}
.flip-card {
    background-color: transparent;
    width: 20em;
    height: 25em;
    border-radius: 1.5em;
}

.flip-card-front img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.flip-card-inner {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    transition: all 0.5s ease-in-out;
  
}
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg)
}
.flip-card-front, .flip-card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
}

.flip-card-back {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateY(180deg);
    background-color: var(--darkCOLOR);

}
.flip-card .flip-card-inner .flip-card-front img,
.flip-card .flip-card-inner .flip-card-back {
    border-radius: 1.5rem;
}

</style>