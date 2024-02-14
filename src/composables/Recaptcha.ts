import { ref, computed } from "vue";

export const recaptchaIsLoaded = ref<boolean>(false);
export const isRecaptchaLoaded = computed<boolean>(() => recaptchaIsLoaded.value);

export function loadRecaptcha(siteKey: string) {
  const win = window as any;
  if (win && !win.grecaptcha) {
    const recaptchaScript = document.createElement("script");
    document.head.appendChild(recaptchaScript);
    recaptchaScript.onload = () => {
      const win = window as any;
      win.grecaptcha.ready(() => {
        recaptchaIsLoaded.value = true;
      });
    };
    recaptchaScript.setAttribute("src", `https://www.google.com/recaptcha/api.js?render=${siteKey}`);
    console.log("recaptchaScript", recaptchaScript);
  }
}
