const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist/js');

const bool = true;

const config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		publicPath: '/dist/js',
		filename: 'bundle.min.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel-loader',
				exclude: '/node_modules'
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader', 'css-loader'
				]
			},
		]
	},
	devServer: {
		historyApiFallback: bool
	},
};

module.exports = config;
