/* webpack config file */
var webpack = require('webpack'); // import the module
var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')) // refer to the webpack env variable
});

// opt/property interfaces
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [devFlagPlugin] // execute the code, in the dev env
};
