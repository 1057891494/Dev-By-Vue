var webpack = require('webpack');
module.exports = {
    entry: ['./src/main.js'],
    output: {
        path: __dirname,
        filename: 'build/main.js'
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                loaders: ['style', 'css', 'sass']
            },
            {

                test: /\.(png)|(jpg)$/,
                loader: "url-loader"

            }
        ]
    }
};