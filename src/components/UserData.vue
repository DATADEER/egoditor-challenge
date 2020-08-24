<template>
  <div class="user-data__container">
    <h3 class="user-data__title subtitle">{{ $t("titles.primarycontact") }}</h3>
    <p class="user-data__explainer">{{ $t("whoareyou.explain") }}</p>
    <v-form>
      <v-container class="user-data-form__container" fluid>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              class="user-data__input"
              v-model="contactData.firstname"
              outlined
              dense
              :label="$t('userdata.firstname')"
              type="text"
            />
            <v-text-field
              class="user-data__input"
              v-model="contactData.lastname"
              outlined
              dense
              :label="$t('userdata.lastname')"
              type="text"
            />
            <v-text-field
              class="user-data__input"
              v-model="contactData.phone"
              outlined
              dense
              :label="$t('userdata.phone')"
              type="text"
            />
            <v-text-field
              class="user-data__input"
              v-model="contactData.company"
              outlined
              dense
              :label="$t('userdata.company')"
              type="text"
            />
            <v-text-field
              class="user-data__input"
              v-model="contactData.street"
              outlined
              dense
              :label="$t('userdata.street')"
              type="text"
            />
          </v-col>
          <v-col cols="8">
            <v-text-field
              class="user-data__input user-data__input--city"
              v-model="contactData.city"
              outlined
              dense
              :label="$t('userdata.city')"
              type="text"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              class="user-data__input"
              v-model="contactData.zip"
              outlined
              dense
              :label="$t('userdata.zip')"
              type="text"
            />
          </v-col>
          <v-col cols="12">
            <v-select
              :items="availableCountries"
              v-model="contactData.country"
              outlined
              dense
              :label="$t('userdata.country')"
            ></v-select>
            <v-text-field
              class="user-data__input"
              v-model="contactData.website"
              outlined
              dense
              :label="$t('userdata.website')"
              type="text"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="user-data__footer">
      <button @click="saveContactData" class="user-data__button--save">
        {{ $t("save") }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import { UsageData } from "@/interfaces/UsageData.interface";
import { ContactData } from "@/interfaces/ContactData.interface";
import axios from "axios";
import { API_URL } from "@/common/constants";

@Component({})
export default class UserData extends Vue {
  contactData: ContactData | {} = {};
  get availableCountries() {
    return [
      { value: "germany", text: this.$t("lang.germany") },
      { value: "poland", text: this.$t("lang.poland") },
      { value: "usa", text: this.$t("lang.usa") }
    ];
  }

  async saveContactData() {
    const contactDataRequest = axios.post(`${API_URL}/contact`);
    const contactDataResponse = await contactDataRequest;
  }

  async mounted() {
    const contactDataRequest = axios.get(`${API_URL}/contact`);
    const contactDataResponse = await contactDataRequest;
    this.contactData = contactDataResponse.data;
  }
}
</script>

<style lang="scss">
@import "./../css/variables.scss";
.v-input.user-data__input.user-data__input--city {
  margin-right: $spacer-3;
}
</style>

<style lang="scss" scoped>
@import "./../css/variables.scss";

.user-data__title {
  margin-bottom: 0;
}

.user-data__explainer {
  margin-bottom: $spacer-5;
  color: $text-dark-gray;
}

.user-data__button--save {
  align-self: flex-end;
  border-radius: $border-radius-round;
  background-color: $disabled-background-gray;
  color: $disabled-text-gray;
  padding: $spacer-3 $spacer-4;
  font-weight: $weight-bolder;
  float: right;
}

.user-data-form__container {
  padding: 0;
}
</style>
