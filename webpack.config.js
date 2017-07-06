var webpack = require('webpack');

var path = require('path');

var ImageminPlugin = require('imagemin-webpack-plugin').default

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'assets/js/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CopyWebpackPlugin([{
              from: 'assets/media/'
            }]),
        new ImageminPlugin(
            { 
                test: /\.(jpe?g|png|gif|svg)$/i,
                optipng: {
                    optimizationLevel: 9
                },
                gifsicle: {
                    optimizationLevel: 3
                }
            }
        )
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
};