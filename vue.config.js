const { VuetifyLoaderPlugin } = require("vuetify-loader");
var nodeExternals = require("webpack-node-externals");
const path = require('path');

module.exports = {
  chainWebpack: config => config.resolve.set("symlinks", false),
  configureWebpack: {
    target: "node",
    entry: "./src/main.js",
    output: {
      libraryExport: "default"
    },
    resolve: {
      alias: {
        vue$: path.resolve('./node_modules/vue/dist/vue.runtime.esm.js'),
      },
    },
    externals: ["vuetify", "vue", "axios", "vuetify/lib"],
    //externals: [nodeExternals()],
    externalsPresets: {
      node: true // in order to ignore built-in modules like path, fs, etc.
    },
    plugins: [new VuetifyLoaderPlugin()]
  }
};
