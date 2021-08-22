<template>
  <section class="about" id="about">
    <div class="about__content">
      <img src="../assets/miguel.png" class="about__img" alt="Dermatologista - Miguel Ceccarelli" />
      <div class="about__text-container">
        <h2 class="about__title">Sobre mim</h2>
        <p class="about__text">
          Olá, sou dermatologista (CRMRJ 52-0109245-6 / RQE 34414) e estou
          especializado em doenças das unhas e procedimentos de estética. Atendo
          presencialmente pacientes no meu consultório no Rio de Janeiro, e por
          telemedicina no Brasil e fora do país (atendo em português, espanhol e
          inglês).
        </p>
        <router-link :to="{name: 'ShowSubs', query: {
          category: 'sobre-mim',
          id: 1
        }}" class="about__link">Saber mais →</router-link>
      </div>
    </div>
    <div class="about__personal-data">
      <div class="about__container">
        <div class="about__data">
          <h3 class="about__data-title">500+</h3>
          <h4 class="about__data-text">Clientes satisfeitos</h4>
        </div>
        <div class="about__data">
          <h3 class="about__data-title">560+</h3>
          <h4 class="about__data-text">Tratamentos de sucesso</h4>
        </div>
        <div class="about__data">
          <h3 class="about__data-title">3</h3>
          <h4 class="about__data-text">Formações profissionais</h4>
        </div>
        <div class="about__data">
          <h3 class="about__data-title">10+</h3>
          <h4 class="about__data-text">Premiações</h4>
        </div>
      </div>
    </div>
    
  </section>
</template>
<script>

  import axios from 'axios'

const url = "https://miguelblog-api.glitch.me";
  export default {
    data() {
      return {
        data: undefined,
        subcategories: undefined,
        error: undefined,
        search: undefined,
      }
    },
    created: async function(){
      await axios.get(String(url) + '/api/v1/categories').then((data) => {

        if (!data['data']['status']) {
          this.error = data['data']['data']
        }
        this.data = data['data']['data']
      })

      await axios.get(String(url) + '/api/v1/subcategories').then((sub) => {
        if (!sub['data']['status']) {
          this.error = sub['data']['data']
        }
        this.subcategories = sub['data']['data']
      })
    }
  }

</script>
<style scoped>
* {
  font-family: Telegraf-Regular , sans-serif;
}
.about__content {
  background: #7a695f;
  display: grid;
}
.about__text-container {
  max-width: 600px;
  padding: 0 10px;
  color: #fde6dc;
  margin: 0 auto;
}
.about__img{
  display: grid;
  margin: 0 auto;
  width: 100%;
}
.about__title {
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: 3.375rem;
  letter-spacing: 0em;
  margin: 15px 0;
  text-align: center;
}
.about__text {
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0em;
  text-align: center;
}
.about__link {
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
.about__link:hover {
  text-decoration: underline;
}
.about__personal-data {
  background: #808184;
  color: #fff;
}
.about__container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 80%;
    margin: 0 auto;
    padding: 1.25rem;
    gap: 10px;
}
.about__data {
  border-bottom: 2px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  max-width: 250px;
}
.about__data-title{
font-size: 1.875rem;
font-style: normal;
font-weight: 800;
line-height: 4rem;
letter-spacing: 0em;

}
.about__data-text{
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.625rem;
letter-spacing: 0em;

}
@media (min-width: 768px) {
  .about__content {
    background: #7a695f;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .about__img{
    padding: 0 10px 0 20px;
  width: initial;
  }
  .about__text-container {
    max-width: 600px;
    color: #fde6dc;
  }
  .about__text, .about__title{
    text-align: initial;
  }
  .about__container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 80%;
    margin: 0 auto;
    padding: 1.25rem;
    gap: 10px;
}
.about__data-title{
    font-size: 2.5rem;
}
}
</style>