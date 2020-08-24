<template>
  <div class="account__container">
    <Profile></Profile>
    <UserData></UserData>
    <Usage :usage-data="usageData"></Usage>
    <WhoAreYou></WhoAreYou>
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

@Component({ components: { Profile, UserData, Usage, WhoAreYou } })
export default class Account extends Vue {}
</script>

<style lang="scss" scoped>
@import "./../css/variables.scss";

.account__container {
  background-color: $lightest-gray;
}
</style>
