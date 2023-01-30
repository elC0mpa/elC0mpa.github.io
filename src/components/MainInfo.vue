<template>
  <div class="main-info">
    <h1
      class="main-info__greetings"
      :class="{ colors: finishedTypingGreetings }"
    ></h1>
    <pre><code v-if="!finishedTypingCode" class="main-info__developer"></code><highlightjs v-else class="main-info__developer" language="javascript" :code="code"/></pre>
    <icons
      :startShowing="finishedTypingCode"
      :paths="['html5.svg', 'css3.svg', 'javascript.svg']"
    />
  </div>
</template>

<script>
import Typed from "typed.js";
import { onMounted, reactive, toRefs } from "vue";
import Icons from "./Icons.vue";
export default {
  components: { Icons },
  name: "MainInfo",
  setup() {
    const optionsGreetings = {
      strings: ["Hello,<br/>I am Compa"],
      typeSpeed: 100,
      backDelay: 2000,
      showCursor: false,
      onComplete: function () {
        data.finishedTypingGreetings = true;
        new Typed(".main-info__developer", optionsDeveloper);
      },
    };
    const optionsDeveloper = {
      strings: [
        "> const type = typeof Compa;<br/>> console.log(`I am a ${type}`);",
      ],
      typeSpeed: 50,
      backDelay: 2000,
      showCursor: false,
      onComplete: function () {
        data.finishedTypingCode = true;
      },
    };
    const data = reactive({
      finishedTypingGreetings: false,
      finishedTypingCode: false,
      code: "> const type = typeof Compa;\n> console.log(`I am a ${type}`);\n'I am a Front End Developer'",
      finishedHtmlAnimation: false,
      finishedCssAnimation: false,
      finishedJsAnimation: false,
    });
    onMounted(() => {
      new Typed(".main-info__greetings", optionsGreetings);
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss">
pre {
  text-align: left;
  code.hljs.javascript {
    background: transparent;
    padding: 0;
  }
}
img.full_opacity {
  opacity: 1;
}
.main-info {
  height: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  &__greetings {
    font-size: 5rem;
    margin-bottom: 3.5rem;
  }
  &__developer {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 3.5rem;
  }
  &__icons {
    display: flex;
    align-items: center;
    &--html5 {
      opacity: 0;
      height: 9rem;
      &.show {
        animation-name: icons-show;
        animation-duration: 2s;
      }
    }
    &--css3 {
      opacity: 0;
      height: 9rem;
      animation-delay: 1s;
      &.show {
        animation-name: icons-show;
        animation-duration: 2s;
      }
    }
    &--javascript {
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
}
.colors {
  transition: color 2s;
  background: linear-gradient(to right bottom, $color-primary, white);
  color: transparent;
  background-clip: text;
}
</style>
