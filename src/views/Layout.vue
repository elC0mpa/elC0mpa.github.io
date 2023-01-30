<template>
  <div class="main-layout">
    <navigation-button
      :items="[
        { label: 'Home', to: '/' },
        { label: 'About Me', to: '/about' },
        { label: 'Portfolio', to: '/portfolio' },
      ]"
    ></navigation-button>
    <router-view></router-view>
    <div class="main-layout__icons-container">
      <a href="https://github.com/elC0mpa" target="_blank"
        ><img src="../assets/github.svg"
      /></a>
      <a
        href="https://www.linkedin.com/in/jos%C3%A9-gabriel-companioni-benitez-93a873172/"
        target="_blank"
        ><img src="../assets/linkedin.svg"
      /></a>
      <a href="https://twitter.com/el_C0mpa?s=09" target="_blank"
        ><img src="../assets/twitter.svg"
      /></a>
      <a href="https://www.youtube.com/channel/UCEKs1YXXru5ZKwYh5QKS30w" target="_blank"><img src="../assets/youtube.svg" /></a>
    </div>
  </div>
</template>

<script>
import NavigationButton from "@/components/NavigationButton.vue";
export default {
  name: "Layout",
  components: {
    NavigationButton,
  },
};
</script>

<style lang="scss" scoped>
.main-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10rem 20%;
  width: 100vw;
  min-height: 100vh;
  background-image: url("../assets/home.webp");
  background-position: 40% 40%;
  background-size: cover;
  @include responsive(largest-bp) {
    padding: 10rem 15%;
  }
  @include responsive(large-bp) {
    padding: 10rem 10%;
  }
  @include responsive(medium-bp) {
    padding: 10rem 5%;
  }
  @include responsive(small-bp) {
    padding: 10rem 2%;
  }
  &__icons-container {
    position: absolute;
    left: 10px;
    bottom: 10px;
    a > img {
      filter: invert(99%) sepia(98%) saturate(0%) hue-rotate(353deg)
        brightness(108%) contrast(100%);
      margin-right: 5px;
    }
  }
}
</style>
