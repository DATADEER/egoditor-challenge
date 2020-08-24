<template>
  <div class="whoareyou__container">
    <h3 class="whoareyou__title subtitle">{{ $t("titles.whoareyou") }}</h3>
    <p class="whoareyou__explainer">{{ $t("whoareyou.explain") }}</p>
    <div class="whoareyou__wrapper">
      <div class="whoareyou-tile__container">
        <i class="whoareyou-tile__icon fas fa-briefcase "></i>
        <p class="whoareyou-tile__title">{{ $t("whoareyou.business") }}</p>
      </div>
      <div class="whoareyou-tile__container">
        <i class="whoareyou-tile__icon fas fa-store "></i>
        <p class="whoareyou-tile__title">{{ $t("whoareyou.agency") }}</p>
      </div>
      <div class="whoareyou-tile__container">
        <i class="whoareyou-tile__icon fas fa-hand-holding-heart"></i>
        <p class="whoareyou-tile__title">{{ $t("whoareyou.nonprofit") }}</p>
      </div>
      <div class="whoareyou-tile__container">
        <i class="whoareyou-tile__icon fas fa-graduation-cap "></i>
        <p class="whoareyou-tile__title">{{ $t("whoareyou.educational") }}</p>
      </div>
      <div class="whoareyou-tile__container">
        <i class="whoareyou-tile__icon fas fa-user "></i>
        <p class="whoareyou-tile__title">{{ $t("whoareyou.private") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component({})
export default class WhoAreYou extends Vue {}
</script>

<style lang="scss" scoped>
@import "./../css/variables.scss";

.whoareyou__title {
  margin-bottom: 0;
}

.whoareyou__explainer {
  margin-bottom: $spacer-5;
  color: $text-dark-gray;
}

.whoareyou__wrapper {
  display: flex;
  flex-wrap: wrap;
}

.whoareyou-tile__container {
  cursor: pointer;
  min-width: 10rem;
  background-color: white;
  border-radius: 15px;
  padding: $spacer-5;
  box-shadow: $box-shadow-bottom-right-subtle;
  font-weight: $weight-bold;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: $spacer-5;
  margin-bottom: $spacer-5;
  user-select: none;
  transition: box-shadow 0.1s linear;
  &:hover {
    box-shadow: none;
  }
  &:active {
    box-shadow: inset 5px 5px 15px 0px rgba(0, 0, 0, 0.05);
  }
}

.whoareyou-tile__icon {
  font-size: $size-bigger;
  margin-bottom: $spacer-4;
}

.whoareyou-tile__title {
  color: $link-blue;
  text-transform: uppercase;
  margin-bottom: $spacer-2;
}
</style>
