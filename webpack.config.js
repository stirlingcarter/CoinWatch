const path = require('path');
const webpack = require('webpack');

// For extracting css from sass
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSASS = new ExtractTextPlugin('[name].css');

module.exports = {
    entry: {
        site: './public/javascripts/site.js',
        style: './public/stylesheets/style.scss'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist')
    },
    module: {      
        rules: [
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: 'file-loader'
            },
            
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: extractSASS.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: [ 'css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                } 
            },            
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        extractSASS,
    ],
    resolve: {
        // alias: {
        //     Classes: './public/javascripts/classes'
        // },
        extensions: [".jsx", ".js"]
    },
    watch: true
};