<template>
  <div class="title-element">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "TitleComponent",
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title-element {
  font-size: 40px;
  font-family: Oswald;
  color: #57a957;
  text-shadow: 1px 1px #767575;
}

@media (min-width: 576px) {
  .title-element {
    font-size: 65px;
  }
}

@media (min-width: 768px) {
  .title-element {
    font-size: 80px;
    text-shadow: 1.5px 1.5px #767575;
  }
}
</style>
