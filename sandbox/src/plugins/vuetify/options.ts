import { VuetifyOptions } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { ThemeDefinition } from "vuetify";

const vuetifyTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#000000",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const Vuetify3Options: VuetifyOptions = {
  blueprint: md3,
  theme: {
    defaultTheme: "vuetifyTheme",
    themes: {
      vuetifyTheme,
    },
  },
};

export default Vuetify3Options;
