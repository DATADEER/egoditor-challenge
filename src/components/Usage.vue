<template>
  <div class="usage__container">
    <h3 class="usage__title subtitle">{{ $t("titles.usage") }}</h3>
    <div class="usage-tiles__wrapper">
      <div
        v-for="stats in usageData"
        class="usage-tile__container"
        :key="stats.title"
      >
        <p class="tile__title">{{ $t(`usage.${stats.title}`) }}</p>
        <p class="tile__value">{{ stats.value }}</p>
        <div class="tile__separator">&nbsp;</div>
        <p v-if="stats.limit >= 0" class="tile__limit">{{ stats.limit }}</p>
        <p v-else class="tile__limit">Unlimited</p>
        <div class="tile-footer__wrapper">
          <button v-if="stats.title === 'users'" class="tile__upgrade">
            {{ $t("usage.addusers") }}
          </button>
          <button v-else class="tile__upgrade">UPGRADE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import { UsageData } from "@/interfaces/UsageData.interface";
import axios from "axios";
import { API_URL } from "@/common/constants";
import { logError } from "@/common/helper";

@Component({})
export default class Usage extends Vue {
  usageData: UsageData[] = [];
  async mounted() {
    try {
      const usageDataRequest = axios.get(`${API_URL}/usage`);
      const usageDataResponse = await usageDataRequest;
      this.usageData = usageDataResponse.data;
    } catch (error) {
      logError(this.$t("messages.error.title"), error);
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../css/variables.scss";

.usage__title {
  margin-bottom: $spacer-5;
}
.usage-tiles__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  @media (max-width: $screen-medium) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: $spacer-5;
  }
}

.usage-tile__container {
  border: 1px solid $light-gray;
  padding: $spacer-5;
  margin-right: $spacer-5;
  border-radius: $border-radius-regular;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.tile__title {
  color: $text-gray;
  opacity: 0.7;
  text-transform: uppercase;
  font-weight: $weight-bolder;
  font-size: $size-label;
  margin-bottom: $spacer-4;
}

.tile__value {
  color: $subtitle-blue;
  font-weight: $weight-bolder;
  font-size: $size-big;
  margin-bottom: $spacer-4;
}

.tile__separator {
  border-bottom: 1px solid $light-gray;
  width: 20px;
  transform: rotate(-15deg);
  margin-bottom: $spacer-4;
}

.tile__limit {
  font-style: italic;
  color: $text-gray;
  font-size: $size-regular;
  margin-bottom: $spacer-4;
}

.tile-footer__wrapper {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -13px;
}

.tile__upgrade {
  border-radius: $border-radius-round;
  background-color: $light-blue;
  color: $white;
  font-weight: $weight-bolder;
  font-size: $size-label;
  border: none;
  padding: $spacer-2 $spacer-3;
  text-transform: uppercase;
}
</style>
