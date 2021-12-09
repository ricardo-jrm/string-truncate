const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
