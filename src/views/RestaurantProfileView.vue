<template>
  <div class="restaurant-profile-elements" :key="forceKey">
    <RestaurantHeaderComponent />
    <DeleteConfirmComponent
      v-if="is_deleting"
      :content="deletecontent"
      v-on:delete-action="handleDeleteConfirm"
    />
    <StoreConfirmComponent v-if="is_created" :Storecontent="Storecontent" />
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
    <UserRestaurantsListComponent
      v-if="restaurants.length"
      :restaruntArr="restaurants"
      v-on:delete-userRestaurant="DeleteRestaurant"
    />
    <FooterComponent />
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent.vue";
import RestaurantHeaderComponent from "@/components/RestaurantHeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import UserRestaurantsListComponent from "@/components/UserRestaurantsListComponent.vue";
import DelButtonComponent from "@/components/DelButtonComponent.vue";
import StoreConfirmComponent from "@/components/StoreConfirmComponent.vue";
import DeleteConfirmComponent from "@/components/DeleteConfirmComponent.vue";
import { getUserRestaurnts, deleteRestaurnt } from "@/api/restaurant";
import { deletetProfile } from "@/api/auth";
import { useRestaurantStore } from "@/store/restaurant";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

export default {
  name: "RestaurantProfileView",
  components: {
    TitleComponent,
    RestaurantHeaderComponent,
    FooterComponent,
    UserRestaurantsListComponent,
    ButtonComponent,
    DelButtonComponent,
    DeleteConfirmComponent,
    StoreConfirmComponent,
  },
  setup() {
    const userInfo = useUserStore();
    const useRestaurantInfo = useRestaurantStore();
    const router = useRouter();
    return { userInfo, router, useRestaurantInfo };
  },
  data: function () {
    return {
      days: ["M", "T", "W", "TH", "F", "S", "SN"],
      restaurantName: "",
      forceKey: 0,
      categoryName: "",
      is_created: false,
      delete_restaurant_id: "",
      Storecontent: "The restaurant was created successfully!",
      seat: 1,
      is_deleting: false,
      categoryOptions: [
        { label: "Italian Food", value: "Italian Food" },
        { label: "French Food", value: "French Food" },
        { label: "Asian Food", value: "Asian Food" },
        { label: "Eastern Food", value: "Eastern Food" },
      ],
      deletecontent: "Are you deleting this retaurant?",
      selectedButtonValues: [],
      restaurants: [],
    };
  },
  methods: {
    getRestaurantName(event) {
      this.restaurantName = event;
    },
    handleCreateRestaurant() {
      this.router.push({ name: "RestaurantCreateView" });
    },
    DeleteRestaurant(restaurantId) {
      this.is_deleting = true;
      this.delete_restaurant_id = restaurantId;
    },
    async handleDeleteConfirm(val) {
      if (val) {
        if (this.delete_restaurant_id != "") {
          let deleteObj = { _id: this.delete_restaurant_id };
          let deleted_restaurant = await deleteRestaurnt(deleteObj);
          if (deleted_restaurant.data.result.status == 4) {
            this.is_deleting = false;
            window.location.reload();
          }
        } else {
          let deletedUser = { id: this.userInfo.userId };
          const deleted_profile = await deletetProfile(deletedUser);
          if (deleted_profile.data.result.status == 4) {
            this.userInfo.setUserId("");
            this.userInfo.setDeletedProfile(true);
            localStorage.removeItem("userId");
            this.router.push({ name: "home" });
          }
        }
      } else {
        this.delete_restaurant_id = "";
        this.is_deleting = false;
      }
    },
    handleDeleteProfile() {
      this.is_deleting = true;
      this.delete_restaurant_id = "";
      this.deletecontent = "Are you deleting the profile?";
    },
    getCategoryName(event) {
      this.categoryName = event;
    },
    async getUserRestaurantsLst() {
      if (this.userInfo.userId == "") {
        this.userInfo.setUserId(localStorage.getItem("userId"));
      }
      let userobj = { userId: this.userInfo.userId };
      const restaurantLst = await getUserRestaurnts(userobj);
      this.restaurants = restaurantLst.data.results.results;
    },
  },
  created() {
    this.getUserRestaurantsLst();
    if (this.useRestaurantInfo.storConfirm) {
      if (this.useRestaurantInfo.is_created) {
        this.Storecontent = "The restaurant was created successfully!";
      } else {
        this.Storecontent = "The restaurant was updated successfully!";
      }
      this.is_created = true;
      setTimeout(() => {
        this.is_created = false;
        this.useRestaurantInfo.setStoreConfirm(false);
      }, 3000);
    }
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
  justify-content: center;
  gap: 17px;
  padding-top: 25px;
}
.days-open-element {
  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.member-profile-elements {
  margin-top: 0%;

  .title-element {
    margin-top: 2%;
  }
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

  &:hover {
    background: white;
    color: black;
  }
}

.auth-elements .confirm-element {
  margin-top: 20px;
}

@media (min-width: 576px) {
  .profile-delete {
    gap: 40px;
  }
}
</style>
