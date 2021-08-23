<template>
  <section class="videos">
    <div class="videos-container">
      <div class="card-video" v-for="video in data" :key="video.id">
        <h2 class="card-video__title">Dr. Miguel Ceccarelli</h2>
        <h3 class="card-video__subtitle">{{ video.title }}</h3>
        <iframe
        max-width="300"
        height="200"
        v-bind:src="video.url"
        :title="video.title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        alt="Vídeo do Dermatologista Miguel Ceccarelli"
        ></iframe>
        <p class="card-video__description">{{ video.short }}</p>
      </div>
    </div>
  </section>
</template>


<script>

  export default {
    data() {
      return {
       data: undefined,
       error: undefined
     }
   },

   created: async function(){

    await this.$axios.post('/videos/all').then((data) => {

      if (!data['data']['data']['status']) {
        this.error = data['data']['data']['message']
      }
      
      this.data = data['data']['data']
    })
   }

 }

</script>

<style scoped>
* {
  font-family: Telegraf-Regular , sans-serif;
}
.videos {
  display: grid;
  padding: 0.625rem 0;
}
.videos-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;


}
.card-video{
  box-shadow: 0px 2px 4px 0px #00000024;


  box-shadow: 0px 3px 4px 0px #0000001F;

  box-shadow: 0px 1px 5px 0px #00000033;
  padding: 10px 0;
}
.card-video__description{
  max-width: 290px;

  padding: 0.3125rem 0.3125rem;

}
.card-video__title{
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.875rem;
  letter-spacing: 0.0094rem;
  color: #000000DE;
  padding: 0 0.3125rem;
  max-width: 290px;


}
.card-video__subtitle{
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3125rem;
  letter-spacing: 0.0156rem;
  color: #00000099;
  padding: 0.3125rem 0.3125rem;
  max-width: 290px;




}
@media (min-width: 600px) {
 .videos-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

}
</style>
