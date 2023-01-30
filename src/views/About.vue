<template>
  <div class="about">
    <div class="about__bio-skills-container">
      <bio />
      <skills />
    </div>
  </div>
</template>

<script>
import Bio from "@/components/Bio.vue";
import Skills from "@/components/Skills.vue";
export default {
  name: "About",
  components: {
    Bio,
    Skills,
  },
};
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__bio-skills-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
