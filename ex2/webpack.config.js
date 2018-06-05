/* webpack config module */
// opt/property interfaces

module.exports = {
  entry: { // entry files for the dependency graph; bundling/packing; more dependent modules
    bundle1: './main1.js', // path to the entry file
    bundle2: './main2.js',
  },
  output: {
    filename: '[name].js' // the bundled file, filename, at the current path; chunk names for the bundled files
  }
};
