<template>
  <div class="account__container">
    <Usage :usage-data="usageData"></Usage>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import Usage from "@/components/Usage.vue";
import { UsageData } from "@/interfaces/UsageData.interface";
import axios from "axios";

@Component({ components: { Usage } })
export default class Account extends Vue {
  usageData: UsageData[] = [];
  async mounted() {
    const usageDataRequest = axios.get(
      "https://my-json-server.typicode.com/DATADEER/egoditor-mock-api/usage"
    );
    const usageDataResponse = await usageDataRequest;
    this.usageData = usageDataResponse.data;
  }
}
</script>

<style lang="scss" scoped>
@import "./../css/variables.scss";

.account__container {
  background-color: $lightest-gray;
}
</style>
