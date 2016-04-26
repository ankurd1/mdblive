module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  }
}
