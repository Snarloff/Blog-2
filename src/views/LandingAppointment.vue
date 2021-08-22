<template>
  <section class="appointment" id="appointment">
    <div class="appointment__text-container">
      <h2 class="appoitment__title"> Dermatologista - Miguel Ceccarelli</h2>
      <h3 class="appointment__text">
        <strong
          >Ciência dermatológica para o cuidado de suas unhas, pele e
          cabelo.</strong
        >
      </h3>
      <div class="map">

      </div>

      <p class="appointment__text">Endereços:<br> 
Dermoclinic - Rua Voluntários da Patria 45, grupo 302/303 - Botafogo, Rio de Janeiro - RJ, CEP 22270-000.<br>
Telefone: (21) 2527-2103<br>
Whatsapp: (21) 99302-1903</p>
      <p class="appointment__text">Ambar Saúde - Av. das Américas, 2480 - Bloco 2, Sala 125 - Barra da Tijuca, Rio de Janeiro - RJ, CEP 22640-101.<br>
Telefone: (21) 3094-2453<br>
Whatsapp: (21) 99218-9718</p>
      <p class="appointment__text">Consultório Leblón- 
Av Ataulfo de Paiva, 255, salas 605 e 606, Leblón, Rio de Janeiro, RJ, CEP  22440-032<br> Telefone: (21) 3094-2453 <br> Whatsapp: (21) 99218-9718
</p>
    </div>
  <GMapMap :center="center" :zoom="10" style="width: 100%; height: 500px" >
    <GMapCluster :zoomOnClick="true">
      <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
        @click="openMarker(m.id)"
        @closeclick="openMarker(m.id)"
        >
          <GMapInfoWindow
        :opened="openedMarkerID === m.id"
      >
        <div class="info-window"> {{m.position.name}}</div>
      </GMapInfoWindow>
        </GMapMarker>
    </GMapCluster>
  </GMapMap>
  </section>

</template>

<script>
  export default {
  data() {
    return {
      openedMarkerID: null,
      center: { lat: -22.9453464, lng: -43.3224271 },
      markers: [{
          position: {
            lat: -22.9995752,
            lng: -43.3389548,
            name: "Ambar - Saúde & Bem-Estar",
          }, 
        },
        {
          position: {
            lat: -22.950709,
            lng: -43.182945,
            name:  "Clinica Dermatológica Dra. Regina Casz Schechtman"  ,

          }
        },
         {
          position: {
            lat: -22.9839958,
            lng: -43.2206466,
            name:  "Dr. Miguel Ceccarelli, Dermatologista (Doenças das unhas - Onicoloogia)"  ,

          }
        },
      ]
    };
  },
  methods: {
    openMarker(id) {
       this.openedMarkerID = id
    }
  }
};
</script>
<style scoped>
* {
  font-family: Telegraf-Regular , sans-serif;
}
.appointment {
  background: #7a695f;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1.25rem;
  gap: 10px;
}

.appointment__title {
  font-family: Telegraf-Regular  ;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0.625rem 0;
}
.appointment__text > strong {
  font-family: Telegraf-Regular  ;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0.625rem 0;

}
.card__link{
 color: #18191F;

}
.appointment__text {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0.625rem 0;

}
.appointment__link {
  font-family: Telegraf-Regular  ;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0px;
  color: #fff;
  text-decoration: none;
  margin: 20px 0;
  transition: 0.4s ease-in-out;
  display: grid;
  justify-content: end;
}
.appointment__link:hover {
  text-decoration: underline;
}
.appointment__card{
    display: grid;
    grid-template-columns: minmax(100px, 200px);
    grid-template-areas: 
    "img text"
    "img text"
    "buttons buttons"
    ;
    max-width: 90%;
    background: #fff;
    border-radius: .5rem;
      color: #18191F;

    gap: 0 20px;
}
.appointment__img{
    width: 115px;
    height: 180px;
    grid-area: img;
    margin: -1px 0 0 -1px;
    border-radius: .5rem 0 0 .0rem;
}
.appointment__card-text-container{
    grid-area: text;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.stars{
  width: 45%;
  display: block;
}
.appointment__card-title{
    max-width: 100%;
    font-size: 1.125rem;
    padding: 10px 0;
}
.appointment__span{
    max-width: 100%;
    font-size: 1rem;
    padding: 5px 0;
}
.appointment__span--center{
    max-width: 100%;
    font-size: 1rem;
    padding: 5px 0;
    text-align: center;
}
.appoitment__card-buttons{
    grid-area: buttons;
    display: flex;
    flex-direction: column;
}
.buttons__container{
  display: flex;
  flex-wrap: wrap;
}
.p-button, .t-button{
  font-family: Telegraf-Regular  ;
    font-weight: 500;
    height: 30px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 3px;
    font-size: 15px;
    line-height: 18px;
    padding: 0 5px;
    color: #18191F ;
    background-color: #fff;
    border-color: #dcdfe3;
    border: 1px solid  #dcdfe3;
    max-width: 150px;
    width: 110px;
    text-decoration: none;
    margin:  5px auto;
}
.p-button:hover, .t-button:hover{
   background-color: #f8f8f8;
  border: 1px solid  #dcdfe3;
}
.svg-icon:not(.svg-icon-v2) {
    display: inline-block;
    fill: #98a1ab;
    height: 16px;
    position: relative;
    padding-right: 2.5px;
}
@media (min-width: 425px) {
  .appointment__card{
    display: grid;
    grid-template-columns: minmax(100px, 200px);
    grid-template-areas: 
    "img text"
    "img buttons"
    "img buttons"
    ;
    background: #fff;
    border-radius: .5rem;
      color: #18191F;

    gap: 0 15px;
    max-width: 400px;
    max-height: 210px;
    
}
.appointment__span--center {
    text-align: initial;
}
.appointment__img{
    grid-area: img;
    border-radius: .5rem 0 0 .5rem;
    width: 115px;
}
.appoitment__card-buttons{
    grid-area: buttons;
    display: flex;
}
.buttons__container{
  display: flex;
  flex-wrap: nowrap;
}
.p-button, .t-button{
 margin: 5px 5px 5px 0;

}
}
.info-window{
    font-family: Telegraf-Regular  ;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
   color: #18191F;


}
@media (min-width: 768px) {
  .appointment{
    padding: 2.125rem;
  }
    .appointment__card{
    display: grid;
    grid-template-columns: minmax(100px, 200px);
    grid-template-areas: 
    "img text"
    "img buttons"
    "img buttons"
    ;
    background: #fff;
    border-radius: .5rem;
      color: #18191F;

    gap: 0 18px;
    max-width: 400px;
    max-height: 210px;

}
.appointment__img {
    grid-area: img;
    border-radius: .5rem 0 0 .5rem;
}
}
@media (min-width: 1024px) {
    .appointment{
        display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-areas: "text map";
    padding: 4.125rem;
  }
  .map{
    grid-area: map;
  }
  
}
</style>