const { VuetifyLoaderPlugin } = require("vuetify-loader");
module.exports = {
  chainWebpack: config => config.resolve.set("symlinks", false),
  configureWebpack: {
    target: "node",
    entry: "./src/main.js",
    output: {
      libraryExport: "default"
    },
    externals: ["vuetify", "vue", "axios", "vuetify/lib"],
    externalsPresets: {
      node: true // in order to ignore built-in modules like path, fs, etc.
    },
    plugins: [new VuetifyLoaderPlugin()]
  }
};
