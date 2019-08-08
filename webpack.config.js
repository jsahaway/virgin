const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");

const config = {
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 3000
    // hot: true,
  },
  entry: "./src/core/index.js",
  // entry: "./src/core/index.onscroll.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.html$/,
        include: path.join(__dirname, "src", "index.html"),
        use: {
          loader: "html-loader",
          options: {
            removeComments: true,
            attrs: ["link:href"]
          }
        }
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(svg|png)$/,
        use: "file-loader"
      }
      // {
      //   test: /\.png$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         mimetype: "image/png"
      //       }
      //     }
      //   ]
      // }
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   loader: "file-lodader",
      //   options: {
      //     publicPath: "assets/favicon"
      //   }
      // }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: "src/favicons", to: "public" },
      // { from: "src/assets", to: "public" },
      { from: "src/robots.txt", to: "" },
      { from: "src/sitemap.xml", to: "" }
    ]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/favicons/favicon.ico",
      inject: true,
      minify: true
      // appMountId: 'app',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new ManifestPlugin(),
    new CleanWebpackPlugin()
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};

module.exports = config;
