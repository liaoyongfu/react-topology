const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { rules } = require('./webpack.common');

const options = (minify = true) => {
    return {
        context: path.resolve(__dirname, '..'),
        output: {
            filename: minify ? 'Topology.min.js' : 'Topology.js'
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
        optimization: {
            minimize: minify
        },
        module: {
            rules
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'Topology.css'
            }),
            new BundleAnalyzerPlugin({
                analyzerPort: 'auto'
            })
        ]
    };
};

module.exports = [
    options(),
    merge(options(false), {
        plugins: [new CleanWebpackPlugin()]
    })
];
