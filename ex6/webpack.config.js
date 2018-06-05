var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/* webpack config file */
// opt/property interfaces
module.exports = {
    entry: './main.jsx', // path to the entry file for bundling
    output: {
        filename: 'bundle.js' // filename of the bundled file, at the default path
    },
    module: {
        rules: [ // module matching rules
            {
                test: /\.jsx?$/, // all .js[x] file
                exclude: /node_modules/, // exclude the path
                use: {
                    loader: 'babel-loader', // use the loader
                    options: { // loader opts
                        presets: ['es2015', 'react'] // translation rules: ES6, React
                    }
                }
            },
            {
                test: /\.css$/, // all .css files
                use: [
                    {
                        loader: 'style-loader' // use the loader
                    },
                    {
                        loader: 'css-loader', // use the loader
                        options: { // loader opts
                            modules: true // enable scoped CSS in a JS module
                        }
                    }
                ]
            }
        ]
    }
};
