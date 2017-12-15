const path        = require('path'),
	  webpack     = require('webpack'),
      HtmlWebpack = require('html-webpack-plugin');

module.exports = {
	entry: {        
		app: './src/main.js'
	},
	output: {
        filename: '[name].js',
        path : path.resolve(__dirname, 'dist')
    },
    resolve: { extensions: ['.jsx', '.js'] },
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: [
				  { loader: 'babel-loader' }
				]
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
            parallel: true,
            output: { comments: false },
        }),
		new HtmlWebpack({
            template: './src/index.html',
            inject: false
        }),
	]
}