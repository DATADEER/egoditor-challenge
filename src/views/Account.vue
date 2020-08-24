<template>
  <div class="account__container">
    <div class="user-data__card">
      <Profile :profileData="profileData" class="profile-component"></Profile>
      <UserData></UserData>
    </div>
    <div>
      <Usage class="usage-component" :usage-data="usageData"></Usage>
      <WhoAreYou></WhoAreYou>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import Usage from "@/components/Usage.vue";
import WhoAreYou from "@/components/WhoAreYou.vue";
import axios from "axios";
import UserData from "@/components/UserData.vue";
import Profile from "@/components/Profile.vue";
import ProfileData from "@/components/Profile.vue";

@Component({ components: { Profile, UserData, Usage, WhoAreYou } })
export default class Account extends Vue {
  @Prop(Object) profileData: ProfileData | {} = {};
}
</script>

<style lang="scss" scoped>
@import "./../css/variables.scss";

.account__container {
  background-color: $lightest-gray;
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  grid-column-gap: $spacer-8;
  padding: $spacer-7 $spacer-8;

  @media (max-width: $screen-small) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-column-gap: 0;
    padding: 0 $spacer-3;
  }
}

.usage-component {
  margin-top: $spacer-5;
  margin-bottom: 6rem;
}

.profile-component {
  margin-bottom: $spacer-7;
}

.user-data__card {
  border-radius: $border-radius-regular;
  padding: $spacer-5 $spacer-6;
  background-color: $white;
  box-shadow: $box-shadow-bottom-right-subtle;
}
</style>
