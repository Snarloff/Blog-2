<template>
  <section class="info-bar">
    <div class="info-bar__container">
      <figure class="menu-mobile-img__container">
        <!-- <router-link to="/" class="menu-mobile__link">
          <img
            class="menu-mobile__img"
            src="~/assets/icon.svg
            "
          />
        </router-link> -->
      </figure>
      <ul class="info-bar__item">
         <li class="info-bar__list">
               <a
            target="_blank"
            href="https://mobile.twitter.com/migueldermato"
            class="header__link--img"
            ><img
              src="~/assets/twitter-icon.svg"
              alt="Twitter do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
            </li>
        <li class="info-bar__list">
          <a target="_blank" href="https://www.instagram.com/dr.miguelceccarelli/" class="header__link--img"
            ><img
              src="~/assets/instagram-icon.svg"
              alt="Instagram do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
        </li>
            <li class="info-bar__list">
            <a target="_blank" href="https://m.facebook.com/dr.miguelceccarelli/" class="header__link--img"
            ><img
              src="~/assets/facebook-icon.svg"
              alt="Facebook do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
          </li>
            <li class="info-bar__list">
              <a target="_blank" href="https://www.youtube.com/channel/UCw8lmvItGmYuJNlf8s_RsiQ" class="header__link--img"
            ><img
              src="~/assets/youtube-icon.svg"
              alt="Youtube do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
            </li>
            <li class="info-bar__list">
            <a target="_blank" href="https://wa.me/5521992189718?%20text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr%20Ceccarelli" class="header__link--img"
            ><img
              src="~/assets/whatsapp-icon.svg"
              alt="Whatsapp do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
          </li>

      </ul>
      <div class="search-container">
        <label class="search__label" for="search"
          ><img
            class="search__img"
            src="~/assets/search.svg"
            alt="Pesquisar no Blog de"
        /></label>
        <input
          class="search__input"
          placeholder="Buscar"
          id="search"
          type="text"
          v-model="search"
          v-on:keyup.enter="onEnter"
        />
      </div>
      <p v-if="!closeNav" class="nav-icon" @click="toggleNav">
        <i class="fas fa-bars"></i>
      </p>
      <p v-if="closeNav" class="nav-icon" @click="toggleNav" >
        <i ref="close" class="fas fa-times"></i>
      </p>
      <nav class="menu-mobile ">
        <div class="menu-mobile__container" ref="nav">
          <ul class="menu-mobile__menu">
            <li class="menu__card">
              <router-link :to="localePath('/')" class="menu__link">
            <img class="menu__img" alt="Ilustração do Dermatologista, Miguel Ceccarelli" src="~/assets/capa--destaque.png">

                <p class="menu__text">Home</p>
              </router-link>
            </li>

            <li class="menu__card" v-for="category in data" :key="category.id">
               <router-link class="menu__link" :to="localePath('/')">
            <img class="menu__img" alt="Ilustração do Dermatologista, Miguel Ceccarelli" :src="category.image">

                <h2 class="menu__text">{{ category.title }}</h2>
               </router-link>
            </li>
          </ul>
          <ul class="info-bar__item--mobile">
            <li class="info-bar__list">
              <a
            target="_blank"
            href="https://mobile.twitter.com/migueldermato"
            class="header__link--img"
            ><img
              src="~/assets/twitter-icon.svg"
              alt="Twitter do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
            </li>

            <li class="info-bar__list">
            <a target="_blank" href="https://www.instagram.com/dr.miguelceccarelli/" class="header__link--img"
            ><img
              src="~/assets/instagram-icon.svg"
              alt="Instagram do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
          </li>
            <li class="info-bar__list">
              <a target="_blank" href="https://m.facebook.com/dr.miguelceccarelli/" class="header__link--img"
            ><img
              src="~/assets/facebook-icon.svg"
              alt="Facebook do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
            </li>
            <li class="info-bar__list">
            <a target="_blank" href="https://www.youtube.com/channel/UCw8lmvItGmYuJNlf8s_RsiQ" class="header__link--img"
            ><img
              src="~/assets/youtube-icon.svg"
              alt="Youtube do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
          </li>
            <li class="info-bar__list">
               <a target="_blank" href="https://wa.me/5521992189718?%20text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr%20Ceccarelli" class="header__link--img"
            ><img
              src="~/assets/whatsapp-icon.svg"
              alt="Whatsapp do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  </section>
</template>
<script>

export default {

  component: true,

  data() {
    return {
      data: undefined,
      subcategories: undefined,
      error: undefined,
      search: undefined,
      closeNav: false,
    };
  },

  created: async function () {

    await this.$axios.post('/category/all').then((data) => {
      if (!data["data"]["status"]) {
        this.error = data["data"]["data"];
      }
      this.data = data["data"]["data"];
    })

  },

  methods: {
    onEnter: function () {
      this.$router.replace({ name: 'blog-search-query', params: { query: this.search } });
    },
    toggleNav() {
      this.closeNav = !this.closeNav;
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active")
    }
  },
};
</script>

<style scoped>
* {
  font-family: Telegraf-Regular , sans-serif;
}

image {
  max-width: 100%;
}
.info-bar {
  padding: 0.3125rem 0 0.375rem 0;
  width: 100%;
  grid-area: info-bar;
  background: #40494f;
  margin-bottom: -1px;
  z-index: 190;
  position: fixed;
}
.info-bar__container {
  max-width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
.info-bar__item {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem;
  margin: 0;
}
.info-bar__link,
.info-bar__img {
  display: block;
}
.menu__img{
  width: 50px;
  height: 50px;
}
.search-container {
  padding: 0.3125rem;
  background: #fff;
  opacity: 1;
  border-radius: 0.25rem;
  display: flex;
}
.search__label,
.search__img {
  display: block;
  padding: 0.125rem;
  color: #3d3d3d;
}
.search__input {
  background: none;
  border: none;
  max-width: 150px;
  padding: 0 0.3125rem;
  color: #3d3d3d;
}
.menu-mobile {
  background: #40494f;
  display: none;
  margin: 0;
}
.menu-mobile-img__container {
  display: none;
  cursor: pointer;
}
.menu__card {
  max-width: 80px;
  min-width: 50px;
  width: 80px;
  height: auto;
  display: grid;
  place-content: center;
}
.menu__link {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem;
  color: #fff;
  text-decoration: none;
  transition: 0.4s ease;
  text-align: center;
  font-size: 0.875rem;
  width: 140px;
}
.menu__link:hover {
  text-decoration: none;
  color: #fff;
}
.menu__card:hover {
  background: #404041;
}
.menu__text {
  margin: 0 !important;
  font-size: 1rem;
}
.nav-icon {
  display: none;
}
.menu-mobile__link{
  width: 40px;
  height: 40px;
}

@media (max-width: 600px) {
  .info-bar__item {
    display: none;

  }
  .info-bar__container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }
  .menu-mobile {
    display: block;
  }
  .menu-mobile__container {
      display: grid;
        position: fixed;
        right: -200px;
        top: 0;
            width: 200px;
    height: 100vh;
        transition: 600ms ease-in-out all;
            display: grid;
    grid-template-rows: 10% 75% 5% 10%;
    grid-template-areas:
      "."
      "menu"
      "."
      "links";
      z-index: 100;
  }
  .menu-mobile__container.active {
    display: grid;
    grid-template-rows: 10% 75% 5% 10%;
    grid-template-areas:
      "."
      "menu"
      "."
      "links";
    position: fixed;
    background: #404041;
    right: 0;
    top: 0;
    width: 200px;
    height: 100vh;
  }
  .menu-mobile-img__container {
    display: grid;
    align-items: center;
    margin: 0;
  }
  .menu-mobile__img {
    height: 40px;
    width: 40px;
    display: grid;
    align-self: center;
  }
  .menu-mobile__menu {
    grid-area: menu;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
  }
  .info-bar__item--mobile {
    grid-area: links;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3125rem;
    margin: 0;
    padding: 0;
  }
  .info-bar__img {
    width: 25px;
    height: 25px;
  }
  .nav-icon {
    font-size: 2rem;
    display: grid;
    align-items: center;
    justify-content: flex-end;
    align-self: center;
    justify-self: flex-end;
    margin: 0;
    color: #fff;
    z-index: 200;
  }
  .fa-times {
    z-index: 200;
  }
}
</style>
