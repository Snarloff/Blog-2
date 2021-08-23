<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__box">
        <img src="~/assets/logo.svg" alt="Logo Miguel Ceccarelli" />
        <ul class="footer__item-img">
          <li class="footer__list">
            <a  target="blank"  href="https://mobile.twitter.com/migueldermato" class="footer__link--img"
              ><img
              src="~/assets/twitter-icon.svg"
              alt="Twitter do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
          </li>
          <li class="footer__list">
            <a target="_blank" href="https://www.instagram.com/dr.miguelceccarelli/" class="footer__link--img"
              ><img
              src="~/assets/instagram-icon.svg"
              alt="Instagram do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
          </li>
          <li class="footer__list">
            <a target="_blank" href="https://m.facebook.com/dr.miguelceccarelli/" class="footer__link--img"
              ><img
              src="~/assets/facebook-icon.svg"
              alt="Facebook do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
          </li>
                    <li class="footer__list">
            <a target="_blank" href="https://www.youtube.com/channel/UCw8lmvItGmYuJNlf8s_RsiQ" class="footer__link--img"
              ><img src="~/assets/youtube-icon.svg" alt="Youtube do Dermatologista Miguel Ceccarelli"
            /></a>
          </li>
                    <li class="footer__list">
            <a target="_blank" href="https://wa.me/5521992189718?%20text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr%20Ceccarelli" class="footer__link--img"
              ><img
              src="~/assets/whatsapp-icon.svg"
              alt="Whatsapp do Dermatologista Miguel Ceccarelli"
              class="info-bar__img"
          /></a>
          </li>
        </ul>
      </div>
      <div class="flex">
        <div class="footer__box">
          <h2 class="footer__box-title">MC</h2>
          <ul class="footer__item">
            <li class="footer__list">
              <a  href="/#about" class="footer__link">Sobre</a>
            </li>
            <li class="footer__list">
              <NuxtLink class="footer__link" :to="localePath('/blog')">Blog</NuxtLink>
            </li>
            <li class="footer__list">
              <a target="_blank" href="https://wa.me/5521992189718?%20text=Ola,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr%20Ceccarelli" class="footer__link">Contato</a>
            </li>
          </ul>
        </div>
        <div class="footer__box">
          <h2 class="footer__box-title">Links úteis</h2>
          <ul class="footer__item">
            <li class="footer__list">
              <a target="_blank" href="https://www.doctoralia.com.br/miguel-ceccarelli/dermatologista/rio-de-janeiro" class="footer__link">Doctoralia</a>
            </li>
            <li class="footer__list">
              <a target="_blank" href="/#appointment" class="footer__link">Agendamentos</a>
            </li>
            <li class="footer__list">
              <NuxtLink :to="localePath('/privacy')" class="footer__link">Política de privacidade</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
      component: true
  }
</script>

<style scoped>
* {
  font-family: Telegraf-Regular , sans-serif;
}
img {
  max-width: 100%;
}
.footer {
  background: #0b0d17;
  z-index: 1;
}
.footer__container {
  max-width: 80%;
  margin: 0 auto;
  padding: 1.125rem;
  display: flex;
  flex-direction: column;
}
.footer__item-img {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 15px;
  gap: 10px;
}
.flex{
display: flex;
  justify-content: space-around;

}
.footer__item {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
}

.footer__list,
.footer__link--img {
  z-index: 20000;
  display: block;
}
.footer__link--img:hover {
  opacity: 0.6;
}
.footer__box-title {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  color: #fff;
  padding: 15px;

}
.footer__link {
  color: #d9dbe1;
  text-decoration: none;
}
.footer__link:hover {
  color: #d9dbe1;
  text-decoration: underline;
}
@media (min-width:768px) {
    .footer__container{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        gap: 10px;
    }
.footer__item-img {
  list-style: none;
  display: flex;
  justify-content: inherit;
  padding: 15px;
  gap: 10px;
}
}
</style>
<script>
</script>
