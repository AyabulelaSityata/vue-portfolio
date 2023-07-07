<template>
    <div class="home ">
        <div class="overlay"></div>
        <h1>Hello, I'm Ayabulela Sityata and this is my resume.</h1>
        <img class="mypic" src="https://i.postimg.cc/HkFCg8yW/C12-Ayabulela-Sityata-1.jpg" alt="me">
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
    background-size:cover;
    min-height: 100vh;
    background-attachment: fixed;
    background-repeat: no-repeat;
}
h1{
    margin-top: -40%;
      
        animation: backInDown; 
        animation-duration: 2s;
        color: white; 
}
.overlay {
    width: 100% !important;
    height: 100% !important;
    background-color: rgba(00, 00, 00, 0.5);
}

.mypic {
    height: 18rem;
    width: 13rem;
    border-radius: 20px 0px 20px 0px;
}
.mypic {
    box-shadow: gray -1px 1px 100px;
    translate: 1000ms;
}
</style>