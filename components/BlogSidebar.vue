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
          <router-link class="dropdown-item" :to="localePath({ name: 'blog-subcategory-id', params: { id: subcategory.id } })">{{ subcategory.title }}</router-link>
        <router-view :key="$nuxt.$route.path" />
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
      error: undefined
    }
  },

  created: async function(){

    await this.$axios.post('/category/all').then((data) => {

      if (!data['data']['data']['status']) {
        this.error = data['data']['data']
      }
      this.data = data['data']['data']
    })

    await this.$axios.post('/subcategory/all').then((sub) => {

      if (!sub['data']['data']['status']) {
        this.error = sub['data']
      }
      this.subcategories = sub['data']['data']
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
