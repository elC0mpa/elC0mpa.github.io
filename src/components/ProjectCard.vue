<template>
  <div class="project-card">
    <img
      class="project-card__image"
      :src="require(`../assets/projects/${item.image}.webp`)"
    />
    <div class="project-card__info-container">
      <div class="project-card__info-container--title-description-container">
        <span class="project-card__title">{{ item.title }}</span>
        <span class="project-card__description">{{ item.description }}</span>
      </div>
      <div class="project-card__info-container--links-container">
        <a class="project-card__link" :href="item.repoURL" target="_blank">FE Repo</a>
        <a v-if="item.beRepoURL" class="project-card__link" :href="item.demoURL" target="_blank">BE Repo</a>
        <a class="project-card__link" :href="item.demoURL" target="_blank">Demo</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationButton",
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
  setup(props) {
    return { props };
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  background-color: white;
  border-radius: 8px;
  position: relative;
  &__title {
    font-size: 2.5rem;
    font-weight: 600;
  }
  &__description {
    font-size: 1.8rem;
  }
  &__link {
    font-size: 2.5rem;
  }
  &__info-container {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    top: 0;
    transition: all 1s;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    &--title-description-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    &--links-container {
      display: flex;
      justify-content: space-around;
    }
  }
  &__image {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  &:hover {
    > div {
      opacity: 1;
    }
  }
}
</style>
