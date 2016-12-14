var webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require("path");

var plugins = [];

plugins.push(new webpack.DefinePlugin({
  __DEV__: process.env.NODE_ENV === "developement",
  __HASH_HISTORY__: process.env.ROUTER_HISTORY === "hash",
  "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
}));

plugins.push(new HtmlWebpackPlugin({
  title: "Devil",
  filename: "index.html",
  template: "./src/index.tpl"
}))

if (process.env.NODE_ENV === "development") {
  plugins.push(new webpack.SourceMapDevToolPlugin(
    "[file].map", null, "../[resource-path]", "../[resource-path]"
  ));
}

module.exports = {
  entry: "./src/index.js",
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader?modules",
      exclude: [/flexboxgrid/, /material-design-icons/]
    }, {
      test: [/flexboxgrid\.css$/, /material-design-icons.*\.css$/],
      loader: "style-loader!css-loader"
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg).*$/,
      loader: "url-loader?limit=1000000"
    }, {
      test: /\.json$/,
      exclude: /node_modules/,
      loader: "json-loader"
    }]
  },
  output: {
    path: "build",
    filename: "[name].[chunkhash].js"
  },
  plugins: plugins
};
