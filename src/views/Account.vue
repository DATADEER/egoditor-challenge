<template>
  <div class="account__container"></div>
</template>

<script>
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component({})
export default class Account extends Vue {}
</script>

<style lang="scss" scoped>
@import "./../css/variables.scss";

.account__container {
  background-color: $lightest-gray;
}
</style>
