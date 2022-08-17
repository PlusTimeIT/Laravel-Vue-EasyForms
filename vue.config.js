const { VuetifyLoaderPlugin } = require("vuetify-loader");

module.exports = {
  chainWebpack: config => config.resolve.set("symlinks", false),
  configureWebpack: {
    entry: "./src/index.js",
    output: {
      libraryExport: "default"
    },
    externals: ["vuetify", "vue", "axios", "vuetify/lib"],
    plugins: [new VuetifyLoaderPlugin()]
  }
};
