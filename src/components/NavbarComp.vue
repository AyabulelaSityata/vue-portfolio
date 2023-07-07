<template>
    <div id="navBar" class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
            <div class="container-fluid">
              <router-link class="navbar-brand" to="/home">
                <img class="logo rounded-circle" id="image" src="https://i.postimg.cc/7Lv7DRLC/a.png" alt="LOGO">
              </router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/home">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="nav-link" >About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/resume">Resume</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/testimonials">Testimonials</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/projects">Projects</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="contact">Contact</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
  nav {
    z-index: 100;
    color: white !important;
    background-image: linear-gradient(135deg, black, rgb(180, 180, 180)) !important;
    box-shadow: 0 0 4px black;
    padding: 20px;
  }

  #image{
    height:4rem;
    width:4rem;
  }
  a:nth-child(1){
    display:flex;
    justify-content: flex-start;
  } 

</style>