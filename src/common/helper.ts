import Vue from "vue";

export function logSuccess(title: string, text: string): void {
  Vue.notify({
    group: "default",
    type: "success",
    title: title,
    text: text
  });
}

export function logError(title: string, text: string): void {
  Vue.notify({
    group: "default",
    type: "error",
    title: title,
    text: text
  });
}
