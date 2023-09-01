<template>
  <div class="restaurant-profile-elements">
    <RestaurantHeaderComponent />
    <TitleComponent title="Restaurant Profile" />
    <div class="profile-delete">
      <ButtonComponent
        name="Create Restaurant"
        @button-clicked="handleCreateRestaurant"
      />
      <DelButtonComponent
        name="Profile Delete"
        @button-clicked="handleDeleteProfile"
      />
    </div>
    <UserRestaurantsListComponent />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TitleComponent from "@/components/TitleComponent.vue";
import RestaurantHeaderComponent from "@/components/RestaurantHeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import UserRestaurantsListComponent from "@/components/UserRestaurantsListComponent.vue";
import DelButtonComponent from "@/components/DelButtonComponent.vue";

export default {
  name: "RestaurantProfileView",
  components: {
    TitleComponent,
    RestaurantHeaderComponent,
    FooterComponent,
    UserRestaurantsListComponent,
    ButtonComponent,
    DelButtonComponent,
  },
  data: function () {
    return {
      days: ["M", "T", "W", "TH", "F", "S", "SN"],
      restaurantName: "",
      categoryName: "",
      seat: 1,
      categoryOptions: [
        { label: "Italian Food", value: "Italian Food" },
        { label: "French Food", value: "French Food" },
        { label: "Asian Food", value: "Asian Food" },
        { label: "Eastern Food", value: "Eastern Food" },
      ],
      selectedButtonValues: [],
    };
  },
  methods: {
    getRestaurantName(event) {
      this.restaurantName = event;
    },
    handleCreateRestaurant() {
      window.location.href = "/create-restaurant";
    },
    handleClearProfile() {
      console.log("--- clearing the profile");
    },
    handleDeleteProfile() {
      console.log("--- redireting the profile");
      window.location.href = "/login";
    },
    getCategoryName(event) {
      this.categoryName = event;
    },
  },
};
</script>

<style scoped lang="scss">
.restaurant-profile-actions {
  max-width: 400px;
  margin: auto;
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
}
.profile-delete {
  display: flex;
  margin: auto;
  justify-content: space-around;
}
.days-open-element {
  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.member-profile-elements {
  margin-top: 0%;
}
.member-profile-elements .title-element {
  margin-top: 2%;
}
.days-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid;
  background: pink;
  border-radius: 4px;
}

.days-item::hover {
  background: white;
  color: black;
}

.auth-elements .confirm-element {
  margin-top: 20px;
}
</style>
