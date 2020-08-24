import Vue from "vue";
import VueI18n from "vue-i18n";
import TranslateResult = VueI18n.TranslateResult;

export function logSuccess(
  title: string | TranslateResult,
  text: string | TranslateResult
): void {
  Vue.notify({
    group: "default",
    type: "success",
    title: title.toString(),
    text: text.toString()
  });
}

export function logError(
  title: string | TranslateResult,
  text: string | TranslateResult
): void {
  Vue.notify({
    group: "default",
    type: "error",
    title: title.toString(),
    text: text.toString()
  });
}
