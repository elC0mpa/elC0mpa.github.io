<template>
  <div class="skills">
    <div
      class="skills__container"
      ref="container"
      :class="{ 'is-reverse': isReverse }"
    >
      <img
        v-for="(skill, index) in skills"
        :key="index"
        :src="require(`../assets/${skill}.svg`)"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, reactive, ref, toRefs } from "vue";
export default {
  name: "Skills",
  setup() {
    const state = reactive({
      skills: [
        "html5",
        "css3",
        "javascript",
        "typescript",
        "sass",
        "tailwindcss",
        "antdesign",
        "react",
        "redux",
        "mobx",
        "vuejs",
        "nuxt",
        "svelte",
        "nodejs",
        "express",
        "mongodb",
      ],
      scrollValue: -100,
      timerId: undefined,
      isReverse: false,
    });

    const container = ref(null);
    onMounted(() => {
      state.timerId = setInterval(() => {
        state.isReverse ? (state.scrollValue -= 2) : (state.scrollValue += 2);
        if (
          !state.isReverse
            ? state.scrollValue >
              container.value?.scrollWidth - container.value?.offsetWidth + 100
            : state.scrollValue < -100
        ) {
          state.isReverse = !state.isReverse;
        }
        container.value.scrollLeft = state.scrollValue;
      }, 35);
    });

    onUnmounted(() => {
      clearInterval(state.timerId);
    });

    return {
      ...toRefs(state),
      container,
    };
  },
};
</script>

<style lang="scss">
.skills {
  max-width: 100vw;
  &__container {
    display: flex;
    gap: 2rem;
    align-items: center;
    max-width: 80rem;
    overflow-x: auto;
    margin: 0 auto;
    > img {
      height: 9rem;
      @include responsive(small-bp) {
        height: 6rem;
      }
    }
    > img:nth-child(3) {
      height: 7rem;
      @include responsive(small-bp) {
        height: 4.5rem;
      }
    }
    > img:nth-child(15) {
      height: 4rem;
      filter: invert(99%) sepia(98%) saturate(0%) hue-rotate(353deg)
        brightness(108%) contrast(100%);
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
