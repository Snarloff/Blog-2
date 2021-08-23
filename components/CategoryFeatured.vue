<template>
  <section class="miniArticle">

    <h2 class="miniArticle__subtitle">{{categoryTitle}}</h2>
    <div class="miniArticle__article--box">
      <div class="miniArticle_article" v-for="subcategory in data" :key="subcategory.id">
        <h4 class="miniArticle_subtitle">{{ subcategory.title }}</h4>
        <router-link class="miniArticle_button" :to="{ name: 'blog-subcategory-id', params: { id: subcategory.id } }">Ler mais  ➔
     </router-link>
   </div>

 </div>

</section>
</template>

<script>

  export default {

    head: {
      link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' }],
      title: 'my website title',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'my website description'
        }
      ],
    },

    data(){
      return {
        category: this.$route.params.id,
        categoryTitle: undefined,
        data: undefined
      }
    },

    created() {
      this.executeData()
    },

    // watch: {
    //   '$route.params.id': function(){
    //     this.category = this.$route.params.id
    //     this.executeData()
    //   }
    // },

    methods: {

      async executeData(){

        await this.$axios.post('/subcategory/category', { categoryId: this.category }).then((data) => {

          if (!data['data']['status']) {
            this.error = data['data']['data']['message']
          }

          this.data = data['data']['data']
          this.categoryTitle = data['data']['data'][0]['category.title'] || 'Não encontrado'
        })

      }

    }
  }
</script>

<style scoped>
* {
  font-family: Telegraf-Regular , sans-serif;
}
.miniArticle{
  padding:.875rem;
}

.miniArticle__title{
  font-size: 1.125rem;
  font-style: italic;
  font-weight: 700;
  line-height: 0.9375rem;
  letter-spacing: 0.025rem;
  color: #A28A7F;
  padding-bottom: 1.875rem;
  border-bottom: 0.125rem double #42494F;
  position: relative;
}
.miniArticle__title::after {
  content: "";
  position: absolute;
  bottom: -0.9375rem;
  left: 0px;
  width: 100%;
  height: 0.125rem;
  background-color: #42494F;
}
.miniArticle__title > span {
  color: rgba(0, 0, 0, 0.4);
}
.miniArticle__article--box{
 background-color: #fafafa;;
  padding: 5px;
 gap: 0 0.3125rem;
 grid-template-areas:
 "title title title"
 "button button button"

 ;
 min-width: 300px;
 grid-template-columns: 1fr 1fr;
 border-radius: .5rem 0 0 .5rem ;

 box-shadow: 0px 2px 4px 0px #00000024;

 box-shadow: 0px 3px 4px 0px #0000001F;

 box-shadow: 0px 1px 5px 0px #00000033;

}
.miniArticle_subtitle{
  font-family: Telegraf-Regular , sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 0.9375rem;
  margin: 1.5rem 0 1.5rem 0 !important;
  letter-spacing: 0.025rem;
  text-align: center;

  color: #A28A7F;
  grid-area: info;

}
.miniArticle_article{
  grid-area: title
  ;
}
.miniArticle_button{
  font-family: Telegraf-Regular , sans-serif;
  grid-area: button;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: 0px;
  text-align: center;
  color: #42494F;
  border:1px solid #42494F
  ;
  border-radius: .2rem;
  display: grid;
  margin: 0.625rem;
  padding: 0.3125rem;
  text-decoration: none;
  transition: .4s ease ;
  max-height: 50px;
  align-items: center;

}
.miniArticle_button:hover, .miniArticle_button--gray:hover{
  border: 1px solid rgba(0,0,0, .9);
}
.miniArticle__button--gray {
  display: grid;
  background: #E5E5E5;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: 0px;
  text-align: center;
  padding: 10px;
  max-width: 200px;
  margin: 15px auto;
  color: #000000DE;
  text-decoration: none;
  border:1px solid #E5e5e5;
  transition: .4s ease ;

}
</style>
