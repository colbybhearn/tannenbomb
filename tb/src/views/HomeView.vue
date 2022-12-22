<template>
  <div class="home">

    <div id="header wob">
      <section >
      <h1 class="TextOnFire">TannenBomb</h1>
      <div id="raft">
        <span id="tree" class="boujee-text" style="display:inline-block;">🎄</span>
      </div>
      <h1 class="TextOnFire">2022 </h1>
      <br />
      <i><b>Farewell Christmas Tree & Hello '23!</b></i>
      </section>
    </div>
    <br />
    
    <div id="axia2 wob">
      <span class="sep">❤️</span>
      <section>
        <h2>Benefiting<br/> <a href="https://axiacenter.org/" class='axia' style=""><b>Axia Pregnancy Center</b></a></h2>
      
      <div style="">
        <p style="width:65%;text-align: center;margin:auto">
        100% of all donations go directly to Axia, which provides free and confidential care, treating patients with Value, Worth, and Dignity.
      </p>
        <br/>
        <br/>
        Donations collected in person and through <a href="https://venmo.com/u/ChelseyAlyse" target="_blank">Chelsey's Venmo</a>
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
          <h2>6 on New Year's Eve</h2>
          <ul>
            <li><b>6:00</b> Enjoy Hot cocoa bar and Christmas music</li>
            <li><b>6:55</b> Pre-tree Mortar Shells</li>
            <li><b>7:00</b> Firework show and Christmas tree burning</li>
          </ul>
        </section>
      </div>

      <br/>
      <div id="please2 wob">
        <span class="sep">🤩</span>
        <section >
        <h2>Come Prepared for the Fun</h2>
          <ul style="list-style-type:none;">
            <li>📨 RSVP through the E-vite or text Chelsey (<a href="tel:2142638906">214-263-8906</a>)</li>
            <li>❄️ Bring chairs to relax and ear protection for kiddos</li>
            <li>🚗 Please do <i>not</i> park in front yards</li>
          </ul>
        </section>
      </div>

      <div id="location2 wob">
        <span class="sep">📍</span>
        
        <section>
          <h2>Where To Be</h2>
          <a href="https://goo.gl/maps/ypf8wdmet9u5S8ke7">
          <p>10862 Lost Creek 
          <br />
          Whitehouse TX, 75791</p>
        </a>
      
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.6202360797924!2d-95.23454558511311!3d32.21446228114556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8648329b53d1631b%3A0x4e48b7b1d53a65c3!2s10862%20Lost%20Creek%2C%20Whitehouse%2C%20TX%2075791!5e0!3m2!1sen!2sus!4v1671693495576!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    </div>
  
    <footer>Copyright 2022. Created by The Codesmiths</footer>
    
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
  width: fit-content;
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
  font-size: 3em;
}


iframe {
  border-radius:15px;
}

footer {
font-size: .8em;
}
</style>