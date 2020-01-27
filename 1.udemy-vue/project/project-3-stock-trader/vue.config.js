const path = require("path");
const webpack = require('webpack');

module.exports = {
  outputDir: path.resolve(__dirname, "../../dist"),
  devServer: {
    disableHostCheck: true,
    // public: 'js.test',
  },
  pwa: {
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: "src/sw.js"
    }
  },
  transpileDependencies: [
    'vuetify',
  ],
};
