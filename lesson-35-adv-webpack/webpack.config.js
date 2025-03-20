const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    stat: './statistics.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? '[name].bundle.[contenthash].js' : '[name].js',
  },
  target: 'web',
  devServer: {
    port: 4200,
    hot: false
  },
  devtool: isProd ? false :'source-map',
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      title: 'My super Project - Main!',
      chunks: ['main', 'stat']
    }),
    new HTMLWebpackPlugin({
      filename: 'about.html',
      template: path.resolve(__dirname, 'src/about.html'),
      title: 'My super Project - About!',
      chunks: ['main']
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.png'),
          to: path.resolve(__dirname, 'dist'),
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].min.css'
    }),
    new EslintWebpackPlugin({
      extensions: ['js'], // Визначаємо розширення файлів для перевірки
      fix: false, // Вмикаємо автоматичне виправлення помилок
      configType: 'eslintrc'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource'
      },
      {
        test: /\.js$/, // Відповідає усім .js файлам
        exclude: /node_modules/, // Виключає папку node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // Використовує preset-env для транспіляції сучасного JS
          }
        }
      },
      {
        test: /\.ts$/, // Вказуємо, що файл з розширенням .ts повинен бути оброблений
        exclude: /node_modules/, // Виключаємо директорію node_modules з обробки
        use: {
          loader: 'babel-loader', // Використовуємо babel-loader для компіляції
          options: {
            presets: [
              '@babel/preset-env', // Перетворення ES6+ у сумісний код JavaScript
              '@babel/preset-typescript' // Додавання підтримки TypeScript
            ]
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // Оптимізація загального коду для всіх типів чанків
    },
    minimizer: [
      new TerserPlugin() // Мінімізація JS файлів
    ]
  }
};