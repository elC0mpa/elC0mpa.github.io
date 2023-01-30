<template>
  <div class="portfolio">
    <div class="portfolio__projects-container">
      <project-card
        v-for="(project, index) in projects"
        :item="project"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  components: { ProjectCard },
  name: "Portfolio",
  setup() {
    const state = reactive({
      projects: [
        {
          title: "Tic Tac Toe",
          description: "Just a tic tac toe game",
          repoURL: "https://github.com/elC0mpa/tic-tac-toe",
          demoURL: "https://elc0mpa.github.io/tic-tac-toe/",
          image: "tic-tac-toe"
        },
        {
          title: "Technology Quizzes",
          description: "Quizzes app about technology",
          repoURL: "https://github.com/elC0mpa/tech-quiz",
          demoURL: "https://elc0mpa.github.io/tech-quiz/",
          image: "quizz-app"
        },
        {
          title: "Iphone Calculator",
          description: "Just an Iphone Calculator",
          repoURL: "https://github.com/elC0mpa/iphone-calculator",
          demoURL: "https://elc0mpa.github.io/iphone-calculator/",
          image: "calculator"
        },
        {
          title: "Gateway Peripherals CRUD",
          description: "Two entities CRUD with relation between them",
          repoURL: "https://github.com/elC0mpa/gateway-peripheral-fe",
          demoURL: "https://elc0mpa.github.io/gateway-peripheral-fe/",
          beRepoURL: "https://github.com/elC0mpa/gateways-peripherals-BE",
          image: "crud"
        },
      ],
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
.portfolio {
  &__projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(350px,1fr));
    gap: 10px;
  }
}
</style>
