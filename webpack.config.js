module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};