/* webpack config file */
// opt/property interfaces
module.exports = {
  entry: './main.js', // path to the entry file; bundling; dependency graph
  output: {
    filename: 'bundle.js' // filename of the bundled file; at the default path
  },
  module: {
    rules:[ // modules matching rules
      {
        test: /\.css$/, // match all .css file
        use: [ 'style-loader', 'css-loader' ] // use the loaders
      },
    ]
  }
};
