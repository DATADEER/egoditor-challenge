<template>
  <div class="profile__container">
    <h3 class="profile__title subtitle">{{ $t("titles.information") }}</h3>
    <div class="profile-tiles__container">
      <div class="profile-tile__container profile-tile__container--narrow">
        <p class="profile-tile__label">{{ $t("profile.customerid") }}</p>
        <p class="profile-tile__value">{{ profileData.customerId }}</p>
      </div>
      <div class="profile-tile__container profile-tile__container--narrow">
        <p class="profile-tile__label">{{ $t("profile.signupdate") }}</p>
        <p class="profile-tile__value">
          {{ toDisplayDate(profileData.signupDate) }}
        </p>
      </div>
      <div class="profile-tile__container profile-tile__container--narrow">
        <p class="profile-tile__label">{{ $t("titles.account") }}</p>
        <p class="profile-tile__value">{{ profileData.accountType }}</p>
      </div>
      <div class="profile-tile__container profile-tile__container--wide">
        <span class="profile-tile__label">{{ $t("profile.loginemail") }}</span>
        <div class="profile-tile-button__wrapper">
          <button class="profile-tile__button">
            {{ $t("profile.password") }}
          </button>
        </div>
        <span class="profile-tile__value">{{ profileData.email }}</span>
        <div class="profile-tile-button__wrapper">
          <button class="profile-tile__button">
            {{ $t("profile.changeemail") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import axios from "axios";
import { ProfileData } from "@/interfaces/ProfileData.interface";

@Component({})
export default class Profile extends Vue {
  @Prop(Object) profileData!: ProfileData | {};

  toDisplayDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}
</script>

<style lang="scss" scoped>
@import "./../css/variables.scss";

.profile__title {
  margin-bottom: $spacer-5;
}

.profile-tiles__container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: $spacer-4 $spacer-4;
}

.profile-tile__container {
  border: 1px solid $light-gray;
  padding: $spacer-4;
  border-radius: $border-radius-regular;
}

.profile-tile__container--narrow {
  width: 1fr;
  text-align: center;
}

.profile-tile__container--wide {
  grid-column: 1/4;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.profile-tile-button__wrapper {
  display: flex;
  justify-content: flex-end;
}

.profile-tile__button {
  color: $link-blue;
  font-weight: $weight-bolder;
  font-size: $size-label;
  cursor: pointer;
  user-select: none;
}

.profile-tile__label {
  font-size: $size-label;
  color: $text-gray;
  opacity: 0.7;
  text-transform: uppercase;
  font-weight: $weight-bolder;
}

.profile-tile__value {
  font-size: 1.1rem;
  color: $subtitle-blue;
  font-weight: $weight-bolder;
  margin-bottom: $spacer-2;
}
</style>
