<template>
  <section>
    <LandingHeader />
    <LandingAbout />
    <LandingAppointment />
    <LandingBlog />
    <Footer />
  </section>
</template>
<script>
  import LandingHeader from "../views/LandingHeader"
  import LandingAbout from "../views/LandingAbout"
  import LandingAppointment from "../views/LandingAppointment"
  import LandingBlog from "../views/LandingBlog"
  import Footer from "../views/Footer"


  export default {

    name: 'Home',
    components: {
     LandingHeader,
     LandingAbout,
     LandingAppointment,
     LandingBlog,
     Footer
   },

   metaInfo: {

     title: 'Home'
   }
}
</script>
