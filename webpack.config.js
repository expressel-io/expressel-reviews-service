module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: [/\.jsx?/],
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
      {
        test: [/\.png$/],
        use: [
          'file-loader',
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist',
  },
};
