<template>
  <div class="sidebar mt-4">
    <div class="dropdown mb-2" v-for="category in data" :key="category.id">
      <button
      class=" button btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >
      {{ category.title }}
    </button>

    <ul class="dropdown-menu">
      <li v-for="subcategory in subcategories" :key="subcategory.id">
        <div v-if="subcategory.categoryId == category.id">

          <router-link class="dropdown-item" :to="{name: 'SubCategory', query: {
            category: category.slug.toLowerCase(),
            subcategory: subcategory.slug.toLowerCase(),
            id:subcategory.id}}">
            {{ subcategory.title }} 
          </router-link>
          <router-view :key="$route.fullPath" />
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
<style scoped>
* {
  font-family: Telegraf-Regular , sans-serif;
}
.sidebar {
 padding: 0 10px;
  background: #f8f8f8;
  display: none;
}
.button {
  width: 100% !important;

}
.dropdown-menu{
  width: 100% !important;
  text-align: center;
}
@media (min-width: 1100px) {
  .sidebar{
    display: unset;
  }
}
</style>
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
