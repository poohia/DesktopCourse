const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "www"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Pendu",
      template: "src/index.html",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "www"),
    compress: true,
    port: 4000,
  },
};
