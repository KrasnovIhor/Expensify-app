const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env.production;
  const mode = isProduction ? "production" : "development";
  const CSSExtract = new MiniCssExtractPlugin({
    filename: "[name].css",
  });
  const cssLoader = {
    loader: "css-loader",
    options: {
      sourceMap: true,
    },
  };
  const sassLoader = {
    loader: "sass-loader",
    options: {
      sourceMap: true,
    },
  };

  return {
    mode,
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    plugins: [CSSExtract],
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/i,
          use: [MiniCssExtractPlugin.loader, cssLoader, sassLoader],
        },
      ],
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};
