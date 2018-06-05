/* webpack config file */
// opt/property interfaces
module.exports = {
    entry: './main.js', // path to the entry file for bundling; dependency graph
    output: {
        filename: 'bundle.js' // filename of the bundled file, at the default path
    },
    module: {
        rules: [ // module matching rules
            {
                test: /\.(png|jpg)$/, // all .png|.jpg file
                use: {
                    loader: 'url-loader', // use the loader
                    options: { // opts for the loader
                        limit: 8192 // limit for data URL
                    }
                }

            }
        ]
    }
}
