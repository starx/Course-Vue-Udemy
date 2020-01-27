module.exports = {
    outputDir: path.resolve(__dirname, "../../dist"),
    pwa: {
        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          swSrc: "src/firebase-messaging-sw.js"
        }
      }
}