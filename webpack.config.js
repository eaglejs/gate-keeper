var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/app/app.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        chunkFilename: '[id].bundle.js',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: '/node_modules', loader: 'babel-loader' },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.html$/, loader: 'html', query: { minimize: true } },
            { test: /\.json$/, loaders: ['json-loader'] },
            { test: /\.(tff|otf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9])$/, loaders: ['file-loader'] },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css', '.scss'],
        root: [
            path.join(__dirname, '/node_modules'),
            path.join(__dirname, '/src/app/')
        ],
        alias: {
            'main': 'app.scss',
            'angularMaterialCSS': 'angular-material/angular-material.min.css'
        }
    },
    htmlLoader: {
        minimize: true,
        remoteAttributeQuotes: false,
        caseSensitive: true
    },
    jshint: {
        esversion: 6,
        emitErrors: true,
        failOnHint: false
    },
    entry: {
        app: ['app.js'],
        vendor: [
            'jquery',
            'lodash',
            'bootstrap',
            'angular',
            'angular-ui-router',
            'angular-messages',
            'angular-material'
        ],
        styles: [
            'angularMaterialCSS',
            'main'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/app/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'styles'], filenames: '[name].js', minChunks: Infinity }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 })
    ],
    devtool: 'inline-source-map',
    devServer: {
        stats: {
            color: true
        },
        host: '0.0.0.0',
        //public: 'http://192.168.86.46:8080',
        port: 8080,
        inline: true,
        outputPath: 'build/',
        contentBase: 'build/',
        disableHostCheck: true,
        proxy: {
            '*': 'http://0.0.0.0:8082'
        }
    }
};