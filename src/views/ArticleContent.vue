<template>
  <section class="Blog article">
    <article class="blog__article">
      <h2 class="blog__title">Em destaque / {{ title }}</h2>
      <img class="blog__img" :src="image" :alt="title">

      <p class="blog__text">{{ short }}</p>

      <div v-html="body">
        
      </div>


    </article>
  </section>
</template>

<script>
  import axios from 'axios'
  
const url = "https://miguelblog-api.glitch.me";
  export default {
    data(){
      return {
        subcategory: String(this.$route.query.id),
        subcategoryName: String(this.$route.query.subcategory),
        articleId: this.$route.query.articleId,
        category: String(this.$route.query.category),
        title: undefined,
        short: undefined,
        image: undefined,
        slug: undefined,
        body: undefined,
        keys: undefined,
        data: undefined
      }
    },

    watch: {
      '$route.query.article': function(){
        this.subcategory = String(this.$route.query.id),
        this.articleId = String(this.$route.query.articleId),
        this.category = String(this.$route.query.category)
        this.executeData()
      }
    },

    created(){
      this.executeData()
    },

    methods: {
      async executeData(){
        await axios.get(String(url) + '/api/v1/articles?articleId=' + this.articleId).then((data) => {

        if (!data['data']['status']) {
          this.error = data['data']['data']
        }
        this.data = data['data']['data']
        this.title = this.data[0]['title']
        this.short = this.data[0]['short']
        this.image = this.data[0]['image']
        this.slug = this.data[0]['slug']
        this.keys = this.data[0]['keys']
        this.body = this.data[0]['body']
      })
      }
    },
}
</script>

<style scoped>
* {
  font-family: Telegraf-Regular , sans-serif;
}

.blog__article{
  padding: 2.125rem  1.25rem 0 1.25rem;
}
.blog__title{
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.9375rem;
  letter-spacing: 0.025rem;
  color: #A28A7F;

}
.blog__img{
  max-width: clamp(290px, 450px, 60%);
  display: grid;
  margin: auto;
}
.blog__text{
  color: #575757;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5625rem;
  letter-spacing: 0px;
  padding: 1.25rem 0;
  text-align: center;
}
.blog__button{
  text-decoration: none;
  background: #7A695F;
  width: 100px;
  padding: 0.9375rem;
  color: #fff;
  text-align: center;
  border-radius: 0.5rem;
  display: grid;
  margin: auto;

}

</style>