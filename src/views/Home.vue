<template>
  <div class="home">
    <main-info></main-info>
  </div>
</template>

<script>
// @ is an alias to /src
import MainInfo from "@/components/MainInfo.vue";

export default {
  name: "Home",
  components: {
    MainInfo,
  },
};
</script>

<style lang="scss">
.home {
  height: 100%;
}
</style>
