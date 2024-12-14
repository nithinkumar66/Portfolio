const path = require('path');

module.exports = {
  entry: './src/index.js',  // Your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Transpile JavaScript files
        exclude: /node_modules/,  // Do not transpile files in node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Add any other presets you need
          }
        }
      }
    ]
  }
};
