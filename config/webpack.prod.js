const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const options = (minify = true) => {
    return {
        context: path.resolve(__dirname, '..'),
        output: {
            filename: 'Topology.js'
        },
        entry: './src',
        devtool: 'source-map',
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        devServer: {
            hot: true,
            inline: true
        },
        externals: [nodeExternals()],
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader'
                        }
                    ]
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader'
                }
            ]
        }
    };
};

module.exports = [webpack(options()), webpack(options(false))];
