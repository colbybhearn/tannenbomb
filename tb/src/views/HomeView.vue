<template>
  <div class="home">

    <div id="header wob">
      <section >
      <h1 class="TextOnFire">TannenBomb</h1>
      <div id="raft">
        <span id="tree" class="boujee-text" style="display:inline-block;">🎄</span>
      </div>
      <h1 class="TextOnFire">2024 </h1>
      <br />
      <i><b>Glowing bright into '25!</b></i>
            
      </section>
    </div>
    <br />
    
    <div id="axia2 wob">
      <span class="sep">❤️</span>
      <section>
        <h2>Benefiting<br/> <a href="https://axiacenter.org/" class='axia' style=""><b>Axia Pregnancy Center</b></a></h2>
      
      <div>
        <p>
        100% of all donations go to Axia.<br/>
        Providing free and confidential care.<br/>
        Treating patients with Value, Worth, and Dignity.
        <br/>
        
      </p>
        <br/>
        <div style="margin: auto;display: inline-block;">

        <h3>Bring a cash donation or give online!</h3>

        <div style="display:flex; flex-wrap: row; justify-content: space-between;">
          <div class="payListItem">            
            <a href="https://cash.app/$livingalternatives/20" target="_blank">
              <img src="@/assets/payment/cashApp.png" class="payLogo" style="width:140px">
            </a>
          </div>
          <div class="payListItem">            
            <a href="https://venmo.com/u/Living-Alternatives" target="_blank"><img src="@/assets/payment/VenmoIcon.webp" class="payLogo" style="width:100px;background:#008cff;padding:10px;border-radius: 15px;"></a>
          </div>
          <div class="payListItem">
            <a href="https://www.paypal.com/paypalme/livingalternatives/20" target="_blank"><img src="@/assets/payment/PayPal-Monogram-FullColor-RGB.png" class="payLogo" style="width:100px">
            </a>
          </div>
            
          <!-- <li>
            via <a href="https://venmo.com/u/ChelseyAlyse" target="_blank">Chelsey's Venmo</a>
          </li> -->
          
        </div>

        See <a href="https://giving.livingalternatives.org/?_gl=1*1vfftqr*_ga*MTc4OTM3MDQ5OS4xNzM0NTU0Nzkw*_ga_MMPH5E7L9K*MTczNDU1NDc4OS4xLjEuMTczNDU1NjA2NC4wLjAuMA.." target="_blank">AXIA's website</a> for more options and to setup monthly giving!

        </div>
        
        <br />  
        <!-- <img src="./../assets/venmoqr.png" style="width:15%" /> -->
      </div>
    </section>
      
      
    </div>
    <br />
    <br />
      <div id="schedule2 wob">
        <span class="sep">🕰️</span>
        <section >
          <div style="margin: auto;display: inline-block;">
            <h2>5PM on New Year's Eve</h2>
            <ul>
              <li><b>5:00</b> Order some <a href="https://www.facebook.com/p/Sauce-Belly-100086469321950/">Sauce Belly</a> tacos! Enjoy the hot cocoa bar, and Christmas music</li>
              <li><b>6:55</b> Pre-tree Mortar Shells</li>
              <li><b>7:00</b> Firework show and Christmas tree burning</li>
            </ul>
          </div>
        </section>
      </div>

      <br/>
      <div id="please2 wob">
        <span class="sep">🤩</span>
        <section >
          <h2>Come Prepared for the Fun</h2>
          <div style="margin: auto;display: inline-block;">
            <ul style="list-style-type:none;">
              <li>📨 RSVP via E-vite or text Chelsey at <a href="sms:2142638906">214-263-8906</a></li>
              <li>🙉 Ear protection for sensitive ears</li>
              <li>❄️ Bring chairs and check the temps</li>
              <li>🚗 Please do <i>not</i> park in front yards</li>
            </ul>
          </div>
        </section>
      </div>

      <div id="location2 wob">
        <span class="sep">📍</span>
        
        <section>
          <h2>Where To Be</h2>
          <p>Hosted by Colby and Chelsey Hearn and the Lost Creek neighborhood</p>
          <br/>
          <a href="https://goo.gl/maps/Ykaqbq7YL2WawzFV9" target="blank">
          <p>Lost Creek 
          <br />
          Whitehouse TX, 75791</p>
        </a>
    </section>  
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.598971019766!2d-95.23423388485423!3d32.2150351197336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8648329ca6b89893%3A0x7411cacb7ca4f0b0!2sLost%20Creek%2C%20Whitehouse%2C%20TX%2075791!5e0!3m2!1sen!2sus!4v1671746369929!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    </div>
  
    <footer>Copyright 2023. Created by <a href="https://thecodesmiths.io" >The Codesmiths</a></footer>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>


<style>
html {
  color:lightgreen;
  background: black;
}

.wob{
  color:lightgreen;
  background: black;
}

section {
  /* width: fit-content; */
  width: 100%;
  margin: auto;
  padding: 10px;
  
}

div#schedule{
  box-shadow: red 0px 0px 28px 28px;
  background: red;  
}


div#please{
  background: green;
  box-shadow: green 0px 0px 10px 10px;
  /* box-shadow: inset -10px -10px 60px whitesmoke; */
}

div#location{
  background: silver;
  box-shadow: silver 0px 0px 10px 10px;
}

.axia{
  color:#FFADA2
}
div#axia{
  background: #FFADA2;
  box-shadow: #FFADA2 0px 0px 10px 10px;
  color: white;
}

.header{
  color: #fb7c02;
    /* background: #f70101; */
    margin: auto;
    width: 40%;
    text-align: left;
    display: block;
    font-size: 1.5em;
    border-radius: 8px;
    padding: 10px;
    transform: skewX(-15deg);
}

section h2 {
  margin-top: 0px;
  color:rgb(233, 233, 233);;
}

ul {
  text-align: left;
  padding-left: 0px;
}


div#header{
  background: black;
  box-shadow: black 0px 0px 10px 10px;
  /* box-shadow: inset -10px -10px 60px whitesmoke; */
}

.TextOnFire {
  font-size: 40px;
    font-family: Helvetica,Arial,sans-serif;
    font-weight: 100;
    background: -webkit-linear-gradient(#ff0000, #48ff00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


#tree2{
  animation-name: tree;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction:normal  ;
}
#tree{
  display:inline-block;
  margin-bottom:-4px;

}
#raft{
  border-bottom: double brown 6px;
  display:inline-block;
  margin-bottom: 8px;
}


@keyframes tree {
  from {
    font-size: 40px;
    font-family: Helvetica,Arial,sans-serif;
    font-weight: 100;
    background: red;
  }
  to {
    font-size: 40px;
    font-family: Helvetica,Arial,sans-serif;
    font-weight: 100;
    background: -webkit-linear-gradient(#ff0000, #48ff00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
  }
  
}

.boujee-text {
  --bg-size: 400%;
  --color-one: rgb(252, 63, 0);
  --color-two: hsl(40 95% 55%);
  font-size: clamp(3rem, 25vmin, 3rem);
  background: linear-gradient(
                90deg,
                var(--color-one),
                var(--color-two),
                var(--color-one)
              ) 0 0 / var(--bg-size) 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  
  animation: move-bg 2s infinite linear alternate, shake-it .1s infinite;
}

.shake {  
  animation: shake-it .1s infinite linear;
}

@keyframes shake-it {
  from{
    transform: rotate(-1deg)
  }
  to {
    transform: rotate(1deg)

  }
}

@keyframes move-bg {
  from{
    color: unset;    
  }
  to {
    background-position: var(--bg-size) 0;
    -webkit-text-fill-color: transparent;    
  }
}

a{
  
  color: lightgreen;
}

h1{
  margin-bottom: 0; 
  display:inline;
}

.sep{
  font-size: 4em;
}


iframe {
  border-radius:15px;
}

footer {
font-size: .8em;
}


p {
    width:90%;
    text-align: center;
    margin:auto;
  }

@media screen and (max-width: 480px) {
  p {
    width:65%;
    text-align: center;
    margin:auto;
  }
}

.payListItem{
  text-align: center;
  align-content: center;
  margin:auto 25px;
  
}

.payListItem a{
  text-decoration: none;
  
}

.payLogo{
}
</style>
