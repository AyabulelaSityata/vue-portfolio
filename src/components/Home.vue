<template>
    <div class="home ">
        
        <div class="overlay"></div>
       
    </div>
     <div class="h1">
        <h1 class="h1">Hello, I'm <br>Ayabulela Sityata <br>and this is my resume</h1>
        
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
    background-image: url(https://i.postimg.cc/9fpV1WKZ/land.jpg);
    background-attachment: fixed;
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