/* webpack config file */
var HtmlwebpackPlugin = require('html-webpack-plugin'); // import the module
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// opt/property interfaces
module.exports = {
  entry: './main.js', // path to the entry file for bundling
  output: {
    filename: 'bundle.js' // filename of the bundled file, at the default path
  },
  plugins: [
    new HtmlwebpackPlugin({ // set the plugin
      title: 'Webpack-demos', //create a html, html title
      filename: 'index.html' // html name
    }),
    new OpenBrowserPlugin({ // set the plugin
      url: 'http://localhost:8080' // open a new tab at the url
    })
  ]
};
