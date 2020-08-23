<template>
  <nav>
    <div class="left-nav__container">
      <div class="logo__container">
        <img
          class="logo__img"
          src="./../assets/imgs/logo-icon-blue.svg"
          alt="egoditor logo"
        />
        <h2 class="logo__text">QR Code Generator</h2>
      </div>
      <div class="vertical-separator"></div>
      <i class="fas fa-angle-left arrow-left__icon"></i>
      <i class="fas fa-bars menu__icon"></i>
    </div>
    <div class="right-nav__container">
      <img
        @click="setLanguage('en')"
        class="flag__icon"
        :class="{ active: isCurrentLanguage('en') }"
        src="./../assets/imgs/flags/en.svg"
        alt="uk flag"
      /><img
        @click="setLanguage('de')"
        class="flag__icon"
        :class="{ active: isCurrentLanguage('de') }"
        src="./../assets/imgs/flags/de.svg"
        alt="german flag"
      />
      <div class="vertical-separator"></div>
      <i class="fas fa-bell bell__icon"></i>
      <i class="fas fa-question-circle question__icon"></i>
      <div class="vertical-separator"></div>
      <i class="fas fa-user user__icon"></i>
      <span class="account_link">{{ $t("account") }}</span>
    </div>
  </nav>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  setLanguage(langCode) {
    this.$i18n.locale = langCode;
  }
  isCurrentLanguage(langCode) {
    return this.$i18n.locale === langCode;
  }

  mounted() {
    this.$i18n.locale = "en";
  }
}
</script>

<style lang="scss" scoped>
@import "./../css/variables.scss";

.fas {
  color: $light-blue;
  font-size: 1.2rem;
  cursor: pointer;
}

.flag__icon {
  width: 1.4rem;
  margin-right: $spacer-4;
  cursor: pointer;
  opacity: 0.2;
  &.active {
    opacity: 1;
  }
}

.bell__icon,
.question__icon {
  margin-right: $spacer-5;
}

.user__icon {
  margin-right: 0.5rem;
}

.vertical-separator {
  border-left: 2px solid $light-gray;
  height: 15px;
}

nav {
  width: 100%;
  display: flex;
  align-items: center;
  padding: $spacer-5 $spacer-4;
  box-shadow: 0px 2px 5px 0px rgba(168, 168, 168, 0.6);
}

.left-nav__container {
  display: inline-flex;
  align-items: center;
  margin-right: auto;

  .vertical-separator {
    margin-left: 3.5rem;
    margin-right: $spacer-5;
  }
}

.right-nav__container {
  display: inline-flex;
  align-items: center;

  .vertical-separator {
    margin-right: $spacer-5;
  }
}

.logo__container {
  display: flex;
  align-items: center;
  position: relative;
}
.logo__img {
  width: 1.6rem;
  margin-right: 0.5rem;
}
.logo__text {
  color: $title-blue;
  font-size: $size-big;
  font-weight: $weight-bolder;
  letter-spacing: -0.1rem;

  &:after {
    position: absolute;
    content: "PRO";
    right: -2rem;
    letter-spacing: 0rem;
    color: $white;
    border-radius: 3px;
    font-size: 0.7rem;
    background-color: deepskyblue;
    padding: 0.2rem 0.2rem;
  }
}

.account_link {
  width: 65px;
  color: $link-blue;
  font-weight: 700;
  font-size: $size-regular;
  cursor: pointer;
}
</style>

<i18n>
{
"en": {
"account": "Account"
},
"de": {
"account": "Konto"
}
}
</i18n>
