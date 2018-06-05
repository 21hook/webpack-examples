/* webpack config file */
// opt/property interfaces
module.exports = {
  entry: './main.jsx', // path to the entry file for bundling, dependency graph
  output: {
    filename: 'bundle.js' // the filename of the bundle file, at the default path
  },
  module: {
    rules: [
        {
            test: /\.jsx?$/, // match all .js[x] files
            exclude: /node_modules/, // exclude the path
            use: {
              loader: 'babel-loader', // use the loader
              options: {
                presets: ['es2015', 'react'] // translation rules: react, ES6
              }
            }
        }

    ]
  }
}
