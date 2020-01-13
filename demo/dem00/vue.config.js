module.exports = {
  // // The object will be merged into the final webpack config using webpack-merge.
  // configureWebpack: {
  //   plugins: [
  //     // new MyAwesomeWebpackPlugin()
  //   ]
  // },
  // // If you need conditional behavior based on the environment, or want to directly mutate the
  // // config, use a function (which will be lazy evaluated after the env variables are set). The
  // // function receives the resolved config as the argument. Inside the function, you can either
  // // mutate the config directly, OR return an object which will be merged
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // mutate config for production...
  //   } else {
  //     // mutate for development...
  //   }
  // },
  //
  // ////////////////
  // //
  // // OR
  // // The internal webpack config is maintained using webpack-chain.
  // // The library provides an abstraction over the raw webpack config,
  // // with the ability to define named loader rules and named plugins,
  // // and later "tap" into those rules and modify their options.
  //
  // chainWebpack: config => {
  //   // Adding a plugin
  //   config.plugin('prebuild').use(PreBuildPlugin, [ stats => {
  //     console.log('pre build')
  //   }]);
  //
  //   // # Modifying Options of a Loader
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .loader('vue-loader')
  //     .tap(options => {
  //       // modify the options...
  //       return options
  //     });
  //
  //   // GraphQL Loader
  //   config.module
  //     .rule('graphql')
  //     .test(/\.graphql$/)
  //     .use('graphql-tag/loader')
  //     .loader('graphql-tag/loader')
  //     .end();
  //
  //   // # Replacing loaders of a rule
  //   const svgRule = config.module.rule('svg');
  //
  //   // clear all existing loaders.
  //   // if you don't do this, the loader below will be appended to
  //   // existing loaders of the rule.
  //   svgRule.uses.clear();
  //
  //   // add replacement loader(s)
  //   svgRule
  //     .use('vue-svg-loader')
  //     .loader('vue-svg-loader');
  //
  //   // # Modifying Options of a Plugin
  //   config
  //     .plugin('html')
  //     .tap(args => {
  //       // args[0].template = '/Users/username/proj/app/templates/index.html'
  //       // return args
  //       return [/* new args to pass to html-webpack-plugin's constructor */]
  //     });
  // },
}
