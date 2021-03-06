const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },

  devServer: {
    publicPath: "/build",
    contentBase: "/build",
    hot: true,
    port: 8080,
    proxy: {
      "/": "http://localhost:3000"
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-flow"
            ],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'],
      }
    ]
  }
};
