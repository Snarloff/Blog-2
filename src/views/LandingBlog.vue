<template>
  <section class="blog" id="blog">
    <div class="grid-blog">
      <h2 class="blog__title">Visite nosso blog</h2>
      <h3 class="blog__title" v-show="error != undefined">{{ error }}</h3>
      <div class="blog__card" v-for="category in data" :key="category.id">
        <router-link to="/blog/home/" class="blog__card-img">
          <img class="blog__img" :src="category.image" :alt="category.title">
        </router-link>
        <h3 class="blog__title" >
          <router-link class="blog__card-title" to="/blog/home/">{{ category.title }}</router-link> </h3>
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
          error: undefined,
          data: undefined
        }
      },
      created: async function(){
        await axios.get(String(url) + '/api/v1/categories').then((data) => {

          if (!data['data']['status']) {
            this.error = data['data']['data']
          }

          this.data = data['data']['data']
        })
      }
    }
  </script>
  <style scoped>
  * {
    font-family: Telegraf-Regular , sans-serif ;
  }
  .blog {
    background: #404041;
    padding: 40px 20px;
  }
  .grid-blog {
    max-width: 80%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  .blog__title {
    font-family: Telegraf-Regular ;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 64px;
    letter-spacing: 0em;
    color: #FDE6DC;
    text-align: center;
    grid-area: title;
  }
  .blog__card-img {
    display: block;
  }
  .blog__card-title {
    font-family: Telegraf-Regular ;
    color: #FDE6DC;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0em;
    text-decoration: none;
    margin: 10px 0;
    display: block;
  }
  .blog__card-title:hover {
    color: rgba(253, 230, 220, .8) ;
  }
  .blog__card{
   display: block;
   margin: 0 auto;
   max-width: 350px;
 }
 .blog__img{
  max-width: 100%;
}
@media (min-width: 500px) {
  .grid-blog {
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 
    "title title title"
    "artigo artigo artigo"
    "artigo artigo artigo"
    "artigo artigo artigo"
    ;
    gap: 20px;
  }
}
@media (min-width: 768px) {
  .grid-blog {
    display: grid;

    grid-template-columns: repeat(3, minmax(200px, 400px));
    grid-template-areas: 
    "title title title"
    "artigo artigo artigo"
    "artigo artigo artigo"
    ;
    gap: 20px;
  }
}
</style>