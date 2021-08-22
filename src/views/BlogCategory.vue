<template>
  <div v-for="subcategory in subcategories" :key="subcategory.id">
        <div v-if="subcategory.categoryId == category.id">
          <router-link class="sub-name" :to="'/blog/' + category.slug + '/' + subcategory.slug + '/' + subcategory.id">
            {{ subcategory.title }}          
          </router-link>
          <router-view :key="$route.fullPath" />
        </div>
      </div>
</template>

<script>
  import axios from 'axios'


const url = "https://miguelblog-api.glitch.me";


  export default {
    data() {
      return {
        data: undefined,
        subcategories: undefined,
        error: undefined
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

<style>

</style>