const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rules = [
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
            // 把less编译到css文件里
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            },
            'css-loader', // 注意顺序
            'less-loader'
        ]
    }
];

module.exports = {
    rules
};
