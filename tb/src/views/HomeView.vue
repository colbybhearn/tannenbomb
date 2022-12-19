<template>
  <div class="home">
    <div>
      <h1>🎄TannenBomb 2022 🔥</h1>
      <i>"Farewell Christmas tree & Welcome '23!"</i>
      <br/>
      <br/>
      <div id="schedule">
        <section >
          <h3>Here's the plan</h3>
          <ul>
            <li>6:00 Enjoy Hot cocoa bar and Christmas music</li>
            <li>6:55 Pre-tree Mortar Shells</li>
            <li>7:00 Firework show and Christmas tree burning</li>
            <li>7:10 The End!</li>
          </ul>
        </section>
      </div>

      <br/>
      <div id="please">
        <section >
          <span >Please be aware</span>
          <ul style="list-style-type:none;">
            <li> Let us know that you're coming!</li>
            <li>❄️ Bring chairs and blankets, ear protection for young'ins (it gets loud!) </li>
            <li>🚗 Do <i>not</i> park in front yards</li>
          </ul>
        </section>
      </div>

      <div id="location">
        <h3>See you here!</h3>
        <section>
          <p>10862 Lost Creek 
          <br />
          Whitehouse TX, 75791</p>
      
      <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.6202360797915!2d-95.2345455849031!3d32.21446228114558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8648329b53d1631b%3A0x4e48b7b1d53a65c3!2s10862%20Lost%20Creek%2C%20Whitehouse%2C%20TX%2075791!5e0!3m2!1sen!2sus!4v1671342926269!5m2!1sen!2sus" width="600" height="450" style="border:0;margin: auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    </div>
  

    <div id="axia">
      

      100% of all cash and venmo donations benefit <h2><a href="https://axiacenter.org/" style="text-decoration:none;color:white;"><b>Axia Pregnancy Center</b></a></h2>
      <div style="display:inline">
        Send to <br/><img src ="../assets/venmo.png" style="width:10%;background:transparent;" /><a href="https://venmo.com/u/ChelseyAlyse">https://venmo.com/u/ChelseyAlyse</a> 
        
      </div>
      <img src="./../assets/venmoqr.png" style="width:15%" />
      
    </div>

      <H1>TannenBomb 2020</H1>
      <img src="./../assets/2020 flame.jpeg" style="width:200px">
      
    </div>
    
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


section {
  width: fit-content;
  margin: auto;
  padding: 30px;
  color:whitesmoke;  
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

div#axia{
  background: #FFADA2;
  box-shadow: #FFADA2 0px 0px 10px 10px;
  color: white;
}

section span{
  text-align: left;
    display: block;
}


ul {
  text-align: left;
}


</style>