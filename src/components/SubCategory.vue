<template>
  <section class="l-Blog">
    <BlogNavbar />
    <BlogHeader />
    <BlogFeaturedMiniArticle />
    <BlogSidebar />
    <BlogCardVideos />
    <Footer />

  </section>
</template>

<script>

  import BlogNavbar from "../views/BlogNavbar.vue"
  import BlogHeader from "../views/BlogHeader"
  import BlogCardVideos from "../views/BlogCardVideos"
  import BlogFeaturedMiniArticle from "../views/BlogFeaturedMiniArticle"
  import BlogSidebar from "../views/BlogSidebar"
  import Footer from "../views/Footer"
  

  export default {
    name: 'Blog',
    components: {
      BlogNavbar,
      BlogHeader,
      BlogFeaturedMiniArticle,
      BlogSidebar,
      BlogCardVideos,
      Footer
    }
  }
</script>

<style scoped>
.l-Blog{
  display: grid;
  grid-template-columns: 70% 30% ;
  grid-template-areas: 
  "nav nav"
  "header header"
  "miniArticle miniArticle"
  "videos videos"
  "footer footer";
   background: #f8f8f8;
        overflow-x: hidden;


}
.info-bar{
  grid-area: nav;
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
.videos { 
  grid-area: videos;
}
@media (min-width: 600px) {
  .l-Blog{
  display: grid;
  grid-template-columns: 80% 20% ;
  grid-template-areas:
  "nav nav" 
  "header header"
  "miniArticle miniAraticle"
  "videos videos"
  "footer footer";
   background: #f8f8f8;
}
}
@media (min-width: 1100px) {
  .l-Blog{
  display: grid;
  grid-template-columns: 70% 30% ;
  grid-template-areas:
  "nav nav" 
  "header header"
  "miniArticle sidebar"
  "videos videos"
  "footer footer";
   background: #f8f8f8;

}
}
</style>