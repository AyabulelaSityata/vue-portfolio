<template>
    <div class="contact">
        <h2>Contact</h2>
        <section class="contact d-flex flex-column align-items-center p-5 gap-3">
        
            <form action="https://formspree.io/f/xayzkyva" method="post" class="bg-black w-50 p-5 rounded-4">
              
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label text-white">Full name</label>
                <input type="text" class="form-control" name="name" placeholder="eg. John Whick">
              </div>
        
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                <input type="email" class="form-control" name="Email" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
              </div>
        
             
        
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label text-white">Message</label>
                <textarea  class="form-control" name="message" id="" cols="30" rows="3"></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        
          </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.contact {
    background-color: #bbb;
}
</style>