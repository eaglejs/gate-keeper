var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	output: {
		path: path.resolve(__dirname, 'build'),
		chunkFilename: '[id].bundle.js',
		filename: '[name].bundle.js'
	},
	mode: 'development',
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				query: {
					minimize: false
				}
			},
			{
				test: /\.json$/,
				loaders: ['json-loader']
			},
			{
				test: /\.(eot|jpe?g|png|woff|woff2|eot|ttf|gif|svg)?(\?\S*)?$/,
				loader: 'url?limit=100000&name=[name].[ext]'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.css', '.scss'],
		alias: {
			'angularMaterialCSS': 'angular-material/angular-material.min.css'
		}
	},
	entry: {
		app: path.resolve(__dirname, 'src/app/app.js'),
		vendor: [
			'@uirouter/angularjs',
			'angular',
			'angular-material',
			'angular-messages',
			'lodash',
		],
		styles: [
			'angularMaterialCSS'
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/app/index.html',
			inject: 'body',
			hash: true,
			title: 'production'
		}),
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 15
		}),
		new UglifyJSPlugin({
			sourceMap: true
		})
	],
	devtool: 'inline-source-map',
	devServer: {
		stats: {
			color: true
		},
		host: '0.0.0.0',
		port: 80,
		inline: true,
		contentBase: 'build/',
		disableHostCheck: true,
		proxy: {
			'*': 'http://rest:8080'
		}
	}
};