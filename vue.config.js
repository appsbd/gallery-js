const path = require("path");

const plugins=[];
/*if(process.env.NODE_ENV === 'production'){
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  plugins.push(new BundleAnalyzerPlugin());
}*/

module.exports = {

  outputDir: path.resolve(__dirname, "../../assets/"),
  lintOnSave: false,
  productionSourceMap: false,
  publicPath:'',
  filenameHashing: false,
  css: {
    extract: (process.env.NODE_ENV === 'development' ? false : {
      filename: 'css/style.css',
    }),
    sourceMap: process.env.NODE_ENV === 'development'
  },

  configureWebpack: {
    output: {
      filename: 'js/script.js',
      //chunkFilename: 'js/[name].js'
    },
    optimization: {
      splitChunks: false
    },
    plugins: plugins
  },

}
