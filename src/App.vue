<template>
  <div id="app">
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
            >{{ companyTitle }}</span
          >
          <div class="company-title__button" @click="saveCompanyTitle">
            <span v-if="isEditingCompanyTitle">
              {{ $t("save") }} <i class="fas fa-save"></i
            ></span>
            <span v-else>
              {{ $t("edit") }} <i class="fas fa-pencil-alt"></i
            ></span>
          </div>
        </div>
      </div>
      <div class="tab-nav__wrapper">
        <div class="tab-nav__container">
          <a class="active">{{ $t("pages.account") }}</a>
          <a>{{ $t("pages.settings") }}</a>
          <a>{{ $t("pages.usermanagement") }}</a>
          <a>{{ $t("pages.whitelabel") }}</a>
          <a>{{ $t("pages.apikeys") }}</a>
          <a>{{ $t("pages.billing") }}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";
import Account from "@/views/Account.vue";

@Component({
  components: {
    Navbar,
    Account
  }
})
export default class App extends Vue {
  companyTitle = "Egoditor GmbH"; //TODO: Fill with API Response
  isEditingCompanyTitle = false;

  saveCompanyTitle(): void {
    console.log("lang", this.$root.i18n);
    if (this.isEditingCompanyTitle) {
      this.companyTitle = this.$refs.companyTitleInput.innerText;
    }
    this.isEditingCompanyTitle = !this.isEditingCompanyTitle;
  }
}
</script>

<style lang="scss">
@import "./css/reset.scss";
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;600;700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");

@import "./css/variables.scss";

* {
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
}

#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $title-blue;
}

.fas {
  color: $light-blue;
  font-size: $size-icon;
  cursor: pointer;
}
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
  font-weight: $weight-bolder;
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
