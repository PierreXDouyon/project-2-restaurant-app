<template>
  <div class="member-restaurants-elements">
    <MemberHeaderComponent />
    <TitleComponent title="Available Restaurants" />
    <RestaurantsListComponent />
    <FooterComponent />
    <ScrollUpComponent />
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent.vue";
import MemberHeaderComponent from "@/components/MemberHeaderComponent.vue";
import RestaurantsListComponent from "@/components/RestaurantsListComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ScrollUpComponent from "@/components/ScrollUpComponent.vue";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

export default {
  name: "MemberRestaurantsView",
  components: {
    TitleComponent,
    MemberHeaderComponent,
    RestaurantsListComponent,
    FooterComponent,
    ScrollUpComponent,
  },
  setup() {
    const userInfo = useUserStore();
    const router = useRouter();
    return { userInfo, router };
  },
  data: function () {
    return {
      resevedRestaurants: [
        { name: "test1", date: "2023-08-27", seats: "12,14" },
        { name: "test2", date: "2023-08-28", seats: "15,17" },
        { name: "test3", date: "2023-08-29", seats: "19,21" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.member-restaurants-elements {
  margin-top: 0%;
  padding-bottom: 40px;
}
.member-restaurants-elements .title-element {
  margin-top: 4%;
}
</style>
