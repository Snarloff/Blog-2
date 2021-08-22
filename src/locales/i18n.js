import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'pt-br': {

  },

  'en': {

  },

  'es': {
    
  }
}


const i18n = new VueI18n({
    locale: 'pt-br', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n
