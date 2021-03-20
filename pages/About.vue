 <template> <div class="container">
      <div class="columns is-vcentered is-multiline">
        <div class="column hero-body is-half-tablet is-one-half-widescreen">
          <div class="indexhero-text has-text-centered">
              <h3> Hi, let's get connected! </h3><br>
          
                <p class="has-text-left">Hi, My name is Andrew Kim and I am the co-founder of <b>PUPPYOUS.COM.</b> I started this website/blog to provide quality products for dogs and good information for dog-parents <br><br>

Although dogs have been with us more than 10,000+ years, we are still learning new things about our furry companions.

While we are continuing to relearn about dogs, my first commitment to comsumers is that we will provide good products in quality and looks. Second, we will try our best to bring you good information on dogs, from picking the best breed to potty training your puppy. We will make sure to deliver you with good contents.</p><br>
             
              <nuxt-link to="/blog/news"class="button is-twitter">
               View Articles
              </nuxt-link>
          </div>
        </div>
        <div class="column is-half-tablet is-one-half-widescreen"> 
            <img
              src="https://images.ctfassets.net/80g45033v4tf/63IDbt2v0lBynjVg9QTQDh/d554fa5d4df1e71957d77a9369a151c8/homepage-image.webp"
              alt="A model is holding a puppy" />
           
        </div>
      </div>  



        <div class="conainter contact-form">
          <h3 class="has-text-left">Contact Us</h3>
          <p>Email: bark@puppyous.com </p>
          <p>Tel: 281-620-1200</p>
          <p>Location: Los Angeles, CA </p>
          <br><br>
<p><b>Contact Form</b></p>
      <div id="contact-form">
        
            <form action="https://api.form-data.com/f/hcpbhwifqfhflst8m41ig"
      method="post" >
                <div>
                    <label>Your Name</label>
                    <div>
                        <input style="margin-top: 5px; background-color: #fff; height:35px; width:95%; text-indent: 5px; border-radius:0px;border: 1px solid;" 
                        type="text" name="first_name" placeholder="Enter your name" required="required">
                    </div>
                </div>
                <br>
                <div>
                    <label>Email address</label>
                    <div>
                        <input style="margin-top: 5px;background-color: #fff; height:35px; width:95%; text-indent: 5px; border-radius:0px;border: 1px solid;" 
                        type="email" name="email" placeholder="Enter your email address" required="required">
                    </div>
                </div>
                <br>
                  <div>
                    <label>Questions or Concerns</label>
                    <div>
                        <input style="margin-top: 5px;background-color: #fff; height:120px; width:95%; text-indent: 5px; border-radius:0px;border: 1px solid;" 
                        type="email" name="email" placeholder="Enter your message" required="required">
                    </div>
                </div>
        
              
                <br>
                
     
                <input type="hidden" name="utf8" value="✓">
                <button class="button is-danger"type="submit">SUBMIT</button>
            </form>
        </div> </div>



    </div>
</template>

<script>
export default {
    metaInfo: {
        title: 'puppyous.com'
    },
}
<script>
