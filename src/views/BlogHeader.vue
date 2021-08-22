<template>
  <header class="header">
    <div class="header__content">
      <img
      class="header__img"
      src="../assets/capa.png"
      alt="Logo Dr. Miguel Cecarelli"
      />
    </div>

    <!-- MENU AQUI -->

    <nav class="header__menu">
      <ul class="menu__container">
        <li class="menu__card">
          <router-link to="/" class="menu__link">
            <img class="menu__img" alt="Ilustração do Dermatologista, Miguel Ceccarelli" src="../assets/capa--destaque.png">
            <p class="menu__text">Home</p>

          </router-link>
        </li>

        <li class="menu__card" v-for="category in data" :key="category.id">
          <router-link class="menu__link" :to="{name: 'ShowSubs', query: {
            category: category.slug.toLowerCase(),
            id: category.id
          }}">
            <img class="menu__img" alt="Ilustração do Dermatologista, Miguel Ceccarelli" :src="category.image">
            <p class="menu__text">{{ category.title }}</p>
            
          </router-link>
        </li>          

      </ul>
    </nav>
  </header>
</template>

<script>
  // import { Slide } from 'vue-burger-menu'
  import axios from 'axios'

const url = "https://miguelblog-api.glitch.me";
  export default {
    components: {
      // Slide
    },
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
.header {
  display: grid;
  grid-template-areas: 
  "info-bar info-bar"
  "content content"
  ;
}

.header__content{
  grid-area: content;
  margin-bottom: -0.0625rem;
  background-color: #404042;
}
.header__img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
  margin-bottom: -1px;
  margin-top: 25px;
    max-height: 500px;
}
.header__menu{
  background: #42494F;
  display: none;
  grid-area: menu;
}

.menu__container{
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-direction: column;

}
.menu__card{
  max-width: 80px;
  min-width: 50px;
  width: 80px;
  height: 125px !important;
  display: grid;
  place-content: center;
}
.menu__text{
  font-size: 0.875rem;
  margin: 0;
}
.menu__link{
  display: grid;
  justify-content: center;
  gap: 0.625rem;
  padding: 0.625rem;
  height: 130px !important;
  color: #fff;
  text-decoration: none;
  transition: .4s ease;
  text-align: center;
  font-size: 0.875rem;
}
.menu__link:hover{
  text-decoration: none;
  color: #fff;

}
.menu__card:hover{
  background: #404041;
}

.menu__img{
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
.mobile-button{
  display: grid;
  border: 1px solid transparent;
  transition: .4s ease;
  padding: 5px;
}
.mobile-button:hover{
  border: 1px solid rgba(0,0,0, .1);
}
@media (min-width: 600px) {
  .header {
    display: flex;
    flex-direction: column;
  }
  
  .header__menu{
    display: flex;
  }

  .menu__container{
    flex-direction: row;

  }
}
</style>