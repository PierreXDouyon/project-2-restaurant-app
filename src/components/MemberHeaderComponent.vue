<template>
  <div class="member-header-elements">
    <ButtonComponent name="SIGN-OUT" @button-clicked="handleLoginRedirect" />
    <ButtonComponent
      name="RESTAURANTS"
      @button-clicked="handleRestaurantRedirect"
    />
    <ButtonComponent name="PROFILE" @button-clicked="handleProfileRedirect" />
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "MemberHeaderComponent",
  components: {
    ButtonComponent,
  },
  methods: {
    handleLoginRedirect() {
      window.location.href = "/login";
    },
    handleRestaurantRedirect() {
      window.location.href = "/memberrestaurants";
    },
    handleProfileRedirect() {
      window.location.href = "/memberprofile";
    },
  },
};
</script>

<style scoped lang="scss">
.member-header-elements {
  display: flex;
  justify-content: space-around;
  max-width: 1800px;
  background-color: rgb(63, 63, 63);
  margin: -8px -18px;

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

.auth-elements .confirm-element {
  margin-top: 20px;
}

@media (min-width: 576px) {
  .button {
    font-size: 18px !important;
  }
}
</style>
