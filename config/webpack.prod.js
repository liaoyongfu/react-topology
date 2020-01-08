const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');

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
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ['file-loader']
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: ['file-loader']
                },
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: 'style-loader' // creates style nodes from JS strings
                        },
                        {
                            loader: 'css-loader' // translates CSS into CommonJS
                        },
                        {
                            loader: 'less-loader' // compiles Less to CSS
                        }
                    ]
                }
            ]
        }
    };
};

module.exports = [
    options(),
    merge(options(false), {
        plugins: [new CleanWebpackPlugin()]
    })
];
