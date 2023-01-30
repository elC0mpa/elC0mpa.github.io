<template>
  <div class="main-info__icons">
    <img
      class="main-info__icons--first"
      :src="require(`../assets/${paths[0]}`)"
      :class="{
        show: startShowing,
        full_opacity: finishedFirstAnimation,
      }"
    />
    <img
      class="main-info__icons--second"
      :src="require(`../assets/${paths[1]}`)"
      :class="{
        show: startShowing,
        full_opacity: finishedSecondAnimation,
      }"
    />
    <img
      class="main-info__icons--third"
      :src="require(`../assets/${paths[2]}`)"
      :class="{
        show: startShowing,
        full_opacity: finishedThirdAnimation,
      }"
    />
  </div>
</template>

<script>
import { toRefs, reactive, onMounted } from "vue";
export default {
  name: "Icons",
  props: {
    paths: {
      type: Array,
      required: true,
    },
    startShowing: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const data = reactive({
      finishedFirstAnimation: false,
      finishedSecondAnimation: false,
      finishedThirdAnimation: false,
    });
    onMounted(() => {
      document
        .getElementsByClassName("main-info__icons--first")[0]
        .addEventListener(
          "animationend",
          () => (data.finishedFirstAnimation = true)
        );
      document
        .getElementsByClassName("main-info__icons--second")[0]
        .addEventListener(
          "animationend",
          () => (data.finishedSecondAnimation = true)
        );
      document
        .getElementsByClassName("main-info__icons--third")[0]
        .addEventListener(
          "animationend",
          () => (data.finishedThirdAnimation = true)
        );
    });
    return {
      ...toRefs(data),
      props,
    };
  },
};
</script>

<style lang="scss">
.main-info__icons {
  display: flex;
  align-items: center;
  &--first {
    opacity: 0;
    height: 9rem;
    &.show {
      animation-name: icons-show;
      animation-duration: 2s;
    }
  }
  &--second {
    opacity: 0;
    height: 9rem;
    animation-delay: 1s;
    &.show {
      animation-name: icons-show;
      animation-duration: 2s;
    }
  }
  &--third {
    opacity: 0;
    animation-delay: 2s;
    height: 7rem;
    width: 9rem;
    &.show {
      animation-name: icons-show;
      animation-duration: 2s;
    }
  }
}
</style>
