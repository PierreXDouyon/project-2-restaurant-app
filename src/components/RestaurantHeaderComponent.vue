<template>
  <div class="restaurant-header-elements">
    <ButtonComponent name="SIGN-OUT" @button-clicked="handleLoginRedirect" />
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "RestaurantHeaderComponent",
  components: {
    ButtonComponent,
  },
  methods: {
    handleLoginRedirect() {
      window.location.href = "/login";
    },
  },
};
</script>

<style scoped lang="scss">
.restaurant-header-elements {
  display: flex;
  justify-content: space-around;
  max-width: 1800px;
  background-color: rgb(63, 63, 63);
  margin: -8px -18px auto;

  .button {
    background: transparent;
    color: white;
    font-size: 13.75px;

    &:hover {
      color: #57a957;
      text-decoration: underline;
    }
  }
}

@media (min-width: 576px) {
  .button {
    font-size: 18px !important;
  }
}
</style>
