module.exports = {
<<<<<<< HEAD
  entry: __dirname + '/client/src/index.jsx',
=======
  entry: path.join(__dirname, '/client/src/index.jsx'),
  resolve: { extensions: ['.js', '.jsx'] },
>>>>>>> master
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
      {
<<<<<<< HEAD
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
=======
        test: [/\.css$/],
        use: ['style-loader', 'css-loader'],
      },
>>>>>>> master
    ],
  },
  output: {
    filename: 'bundle.js',
<<<<<<< HEAD
    path: __dirname + '/client/dist',
=======
    path: path.join(__dirname, '/client/dist'),
>>>>>>> master
  },
};
