<template>
  <div class="bio">
    <img class="bio__img" src="../assets/me.webp" />
    <div class="bio__info">
      <p>Hello, my name is José Gabriel Companioni Benitez.</p>
      <p>
        I graduated from Automation Engineering in 2018 but I decided to develop
        a career as a Software Engineer.
      </p>
      <p>
        Despite of I can work as a Full Stack developer I prefer to work as a
        Front End developer because this is what I enjoy the most and the field
        in which I have more experience.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bio",
  setup(props, ctx) {
    const toogle = () => {
      ctx.emit("toogle");
    };
    return {
      toogle,
    };
  },
};
</script>

<style lang="scss">
.bio {
  display: flex;
  align-items: center;
  gap: 10px;
  @include responsive(large-bp) {
    flex-direction: column;
  }
  &__img {
    width: 80%;
    max-width: 400px;
    border-radius: 50%;
  }
  &__info {
    width: 95%;
    color: white;
    font-size: 2.5rem;
    text-align: center;
    @include responsive(small-bp) {
      font-size: 1.5rem;
    }
    > p {
      margin-bottom: 1rem;
    }
  }
}
</style>
