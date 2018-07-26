const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: [/\.css$/],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist'),
  },
};
