<template>
  <section class="l-Blog">

    <BlogNavbar />
    <BlogHeader />


    <!-- <h4 class="miniArticle__article">Esta página não foi encontrada! :(</h4> -->
    <h4 class="miniArticle__article">{{ error }} - Ooops... você está perdido? :(</h4>
    <NuxtLink :to="localePath('/')">Home</NuxtLink>

    <BlogSidebar />
    <Footer />

  </section>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error',
  }
</script>

<style>
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
  padding: 0;
  line-height: 0.9375rem;
  letter-spacing: 0.025rem;
  color: #A28A7F;
  padding-bottom: 1.875rem;
  border-bottom: 0.125rem double #42494F;
  position: relative;
  margin: 20px 0 0 0;
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
.miniArticle__article-box{
 background-color: #fafafa;;
 display: grid;
 gap: 0.3125rem;
 grid-template-areas:
 "img title button"
 "img title button"
"img title button"
 ;
 min-width: 300px;
 grid-template-columns: 1fr 3fr 1fr;
 border-radius: .5rem 0 0 .5rem ;

 box-shadow: 0px 2px 4px 0px #00000024;

 box-shadow: 0px 3px 4px 0px #0000001F;

 box-shadow: 0px 1px 5px 0px #00000033;

}
.miniArticle__subtitle{
  font-family: Telegraf-Regular , sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 0.9375rem;
  margin: 1.5rem 0 1.5rem 0 !important;
  letter-spacing: 0.025rem;

  color: #A28A7F;
  grid-area: info;

}
.miniArticle__img{
  grid-area: img;
  max-width: 100%;
  object-fit: contain;
  background-color: #404042;
  border-radius: .5rem 0 0 .5rem ;
    display: grid;
  margin: 0;
}
.miniArticle__articleInfos{
  grid-area: title;
  padding: 0.625rem;
}
.miniArticle__author{
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.25rem;
  letter-spacing: 0rem;
  color: #000000DE;
  font-family: Telegraf-Regular ;
}
.miniArticle__description{
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3125rem;
  letter-spacing: 0.0156rem;
  color: #00000099;
  font-family: Telegraf-Regular ;
}
.miniArticle__button{
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
  max-height: 50px;
  border-radius: .2rem;
  display: grid;
  margin: 0.625rem;
  padding: 0.3125rem;
  text-decoration: none;
  transition: .4s ease ;
  align-items: center;
}
.miniArticle__button:hover, .miniArticle__button--gray:hover{
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
.l-Blog{
  display: grid;
  grid-template-columns: 3fr ;
  grid-template-areas:
  "header header"
  "article sidebar"
  "miniArticle sidebar"
  "footer footer"
  ;
  background: #f9f9f9;
}
.header{
  grid-area: header;
}
.article {
  grid-area: article;
}
.sidebar{
  grid-area: sidebar;
}
.miniArticle{
  grid-area: miniArticle;
}
.footer{
  grid-area: footer;
}

</style>
