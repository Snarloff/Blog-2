<template>
  <div class="sidebar mt-4">
    <div class="dropdown mb-2" v-for="category in data" :key="category.id">
      <button v-if="language == 'br' || language == undefined" class="button btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        {{ category.title }}
      </button>
      <button v-else-if="language == 'en'" class="button btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        {{ category.titleEn }}
      </button>
      <button v-else class="button btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        {{ category.titleEs }}
      </button>

    <ul class="dropdown-menu">
      <li v-for="subcategory in subcategories" :key="subcategory.id">
        <div v-if="subcategory.categoryId == category.id">
          <!-- <a href="#">Batata-Doce</a> -->
          <NuxtLink v-if="language == 'br' || language == undefined" class="dropdown-item" :to="localePath({ name: 'blog-subcategory-id', params: { id: subcategory.id } })">{{ subcategory.title }}</NuxtLink>
          <NuxtLink v-else-if="language == 'en'" class="dropdown-item" :to="localePath({ name: 'blog-subcategory-id', params: { id: subcategory.id } })">{{ subcategory.titleEn }}</NuxtLink>
          <NuxtLink v-else class="dropdown-item" :to="localePath({ name: 'blog-subcategory-id', params: { id: subcategory.id } })">{{ subcategory.titleEs }}</NuxtLink>
      </div>
    </li>
  </ul>
</div>
</div>
</template>
<script>

export default {

  component: true,

  head: {
    link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' }],
    script: [{ src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' }],
  },

  data() {
    return {
      data: undefined,
      subcategories: undefined,
      language: this.$nuxt.$i18n.locale,
      error: undefined
    }
  },

  created: async function(){

    await this.$axios.post('/category/all').then((data) => {

      // console.log(data);

      if (!data['data']['data']['status']) {
        this.error = data['data']['data']
        // console.log(data)
      }
      this.data = data['data']['data']
    }).catch((err) => {
      console.log(err)
    })

    await this.$axios.post('/subcategory/all').then((sub) => {

      // console.log(sub['data']['data']);

      if (!sub['data']['data']['status']) {
        this.error = sub['data']['data']['message']
        // console.log(sub)
      }
      this.subcategories = sub['data']['data']
    }).catch((err) => {
      console.log(err)
    })
  }


}
</script>

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
