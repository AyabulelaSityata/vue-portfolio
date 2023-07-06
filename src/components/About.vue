<template>
  <div class="about">
    <h1>About</h1>
    <div class="container-fluid" v-if="info">
      <div class="row">
        <div class="col">
          <img
            class="img-fluid rounded-circle"
            src="https://i.postimg.cc/Jz8jBxL0/C12-Ayabulela-Sityata-2.jpg"
            alt=""
          />
        </div>
        <div class="col bio" v-for="info in info" :key="info.id">
          <h3>Basic Info</h3>
          <p>{{ info.name }}</p>
          <p>{{ info.birth }}</p>
          <p>{{ info.place }}</p>
          <p>{{ info.cell }}</p>
          <p>{{ info.alternative }}</p>
        </div>
      </div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
export default {
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
.image {
  width: 500px;
  height: 500vh;
}
</style>
