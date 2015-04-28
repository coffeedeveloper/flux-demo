module.exports = {
  entry: './client.js',
  output: {
    path: './build',
    filename: 'client.js'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      //{ test: /\.jsx$/, loader: 'jsx-loader?harmony' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
};
