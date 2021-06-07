const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
//const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log("NODE_ENV: ", env.NODE_ENV); // 'development | production'
  console.log("Production: ", env.production); // false

  return {
    mode: "development",
    entry: {
      index: {
        import: './src/index.ts',
        dependOn: 'tailwindcss',
      },
      tailwindcss: './src/tailwindcss.ts',
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    target: "web",
    devtool: "eval-source-map",
    watchOptions: {
      ignored: './node_modules/',
      aggregateTimeout: 500, // delay before reloading
      poll: 1000 // enable polling since fsevents are not supported in docker
    },
    devServer: {
      host: "0.0.0.0",
      disableHostCheck: true,
      port: 8081,
      writeToDisk: true,
      contentBase: path.join(__dirname, "dist"),
      hot: true,
      overlay: {
        warnings: false,
        errors: true
      }
    },
    plugins: [
      new ESLintPlugin({
        failOnError: true,
        failOnWarning: false,
        emitWarning: true,
        //eslintPath: path.resolve(__dirname, ".eslintrc.json")
      }),
      new CopyPlugin({
        patterns: [
          { from: "./src/img", to: "./img" },
        ],
      }),
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
        title: "development",
        template: "src/index.hbs",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
        ignoreOrder: false,
      }),
    ],
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
            {
              loader: 'eslint-loader',
              options: {
                  failOnError: true,
                  failOnWarning: false,
                  emitWarning: true,
              },
          }],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                importLoaders: 2,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                postcssOptions: {
                  config: path.resolve(__dirname, "postcss.config.js"),
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.hbs$/,
          loader: "handlebars-loader",
        },
        {
          test: /\.php$/,
          use: [
            {
              loader: 'raw-loader',
              options: {
                esModule: false,
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.svg/,
          type: "asset/inline",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(csv|tsv)$/i,
          use: ["csv-loader"],
        },
        {
          test: /\.xml$/i,
          use: ["xml-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };
};