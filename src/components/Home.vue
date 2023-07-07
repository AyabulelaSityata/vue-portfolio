<template>
    <div class="home ">
        
        <div class="overlay"></div>
       
    </div>
     <div class="h1">
        <p>Hello, I'm </p>
        <h2>Ayabulela Sityata </h2>
        <p>and this is my resume.</p>
        
     </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.home {
    width: 100%;
    height: 95vh;
    background-image: url(https://i.postimg.cc/Jz8jBxL0/C12-Ayabulela-Sityata-2.jpg);
    background-size:cover;
    min-height: 100vh;
    background-attachment: fixed;
    background-repeat: no-repeat;
}
h1{
    margin-top: -40%;
      
        animation: backInLeft; 
        animation-duration: 2s;
        color: white; 
}
.overlay {
    width: 100% !important;
    height: 100% !important;
    background-color: rgba(00, 00, 00, 0.7);
}
</style>