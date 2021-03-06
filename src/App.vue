<template>
  <v-app id="app">
    <Navbar></Navbar>
    <section class="main-content">
      <div class="head-section__container">
        <div class="company-title__container">
          <span
            @click="isEditingCompanyTitle = true"
            :contenteditable="isEditingCompanyTitle"
            class="company-title__input"
            :class="{ active: isEditingCompanyTitle }"
            ref="companyTitleInput"
            >{{ profileData.company }}</span
          >
          <button class="company-title__button" @click="handleCompanyTitle">
            <span v-if="isEditingCompanyTitle">
              {{ $t("save") }} <i class="fas fa-save"></i
            ></span>
            <span v-else>
              {{ $t("edit") }} <i class="fas fa-pencil-alt"></i
            ></span>
          </button>
        </div>
      </div>
      <div class="tab-nav__wrapper">
        <div class="tab-nav__container">
          <a
            @click="currentTab = tab"
            v-for="tab in availableTabs"
            :key="tab"
            :class="{ active: isSelectedTab(tab) }"
            >{{ $t(`titles.${tab}`) }}</a
          >
        </div>
      </div>
      <Account
        v-if="isSelectedTab('account')"
        :profileData="profileData"
      ></Account>
      <notifications group="default" />
    </section>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import Account from "@/views/Account.vue";
import axios from "axios";
import { API_URL } from "@/common/constants";
import { ProfileData } from "@/interfaces/ProfileData.interface";
import { logError, logSuccess } from "@/common/helper";

@Component({
  components: {
    Navbar,
    Account
  }
})
export default class App extends Vue {
  profileData: ProfileData | { company: string } = {
    company: "Loading..."
  };
  isEditingCompanyTitle = false;
  availableTabs = [
    "account",
    "settings",
    "usermanagement",
    "whitelabel",
    "apikeys",
    "billing"
  ];
  currentTab = "account";

  isSelectedTab(tab: string): boolean {
    return tab === this.currentTab;
  }

  async handleCompanyTitle(): Promise<void> {
    if (this.isEditingCompanyTitle) {
      this.profileData.company = (this.$refs
        .companyTitleInput as HTMLElement).innerText;
      try {
        const profileDataRequest = axios.post(
          `${API_URL}/profile`,
          this.profileData
        );
        await profileDataRequest;
      } catch (error) {
        logError(this.$t("messages.error.title"), error);
        return;
      }
      logSuccess(
        this.$t("messages.success.title"),
        this.$t("messages.success.text")
      );
    }
    this.isEditingCompanyTitle = !this.isEditingCompanyTitle;
  }

  async mounted() {
    try {
      const profileDataRequest = axios.get(`${API_URL}/profile`);
      const profileDataResponse = await profileDataRequest;
      this.profileData = profileDataResponse.data;
    } catch (error) {
      logError(this.$t("messages.error.title"), error);
      return;
    }
  }
}
</script>

<style lang="scss">
@import "./css/global.scss";
@import "./css/reset.scss";
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;600;700;900&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");
</style>

<style scoped lang="scss">
@import "./css/variables.scss";

.tab-nav__wrapper {
  margin-top: $spacer-7;
  box-shadow: $box-shadow-bottom-subtle;
}
.tab-nav__container {
  display: flex;
  padding-left: $spacer-7;
  color: $text-gray;
  font-size: $size-regular;
  font-weight: $weight-bold;
  a {
    cursor: pointer;
    margin-right: $spacer-6;
    &.active {
      padding: 0 $spacer-3 $spacer-3 $spacer-3;
      border-bottom: 2px solid $light-blue;
    }
  }
}

.head-section__container {
  margin-left: $spacer-7;
  margin-top: $spacer-6;
}

.company-title__container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.company-title__input {
  font-size: $size-bigger;
  font-weight: $weight-boldest;
  color: $title-blue;

  &.active {
    padding: $spacer-2;
    border: 1px solid $light-gray;
    border-radius: $border-radius-regular;
  }
}

.company-title__button {
  margin-left: $spacer-5;
  span {
    color: $link-blue;
    font-weight: $weight-bolder;
    font-size: $size-label;
    cursor: pointer;
    user-select: none;
  }
  i {
    margin-left: $spacer-2;
    font-size: $size-label;
  }
}
</style>
