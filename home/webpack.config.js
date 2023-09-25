const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
module.exports = (_, argv) => ({
	output: {
		publicPath: 'http://localhost:3000/'
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
	},

	devServer: {
		port: 3000,
		historyApiFallback: true
	},

	module: {
		rules: [
			{
				test: /\.m?js/,
				type: 'javascript/auto',
				resolve: {
					fullySpecified: false
				}
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},

	plugins: [
		new ModuleFederationPlugin({
			name: 'home',
			filename: 'remoteEntry.js',
			remotes: {
				home: 'home@http://localhost:3000/remoteEntry.js',
				pdp: 'pdp@http://localhost:3001/remoteEntry.js',
				cart: 'cart@http://localhost:3002/remoteEntry.js'
			},
			exposes: {
				'./Card': './src/Card.jsx',
				'./Footer': './src/Footer.jsx',
				'./Header': './src/Header.jsx',
				'./products': './src/products.js'
			},
			shared: {
				...deps,
				'solid-js': {
					singleton: true,
					requiredVersion: deps['solid-js']
				}
			}
		}),
		new HtmlWebPackPlugin({
			template: './src/index.html'
		})
	]
});
