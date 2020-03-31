const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../../../dist'),
  devServer: {
    disableHostCheck: true,
    // public: 'js.test',
  },
  pwa: {
    name: 'dem0 - Stock trader',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
  transpileDependencies: [
    'vuetify',
  ],
};
