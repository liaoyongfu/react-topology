const { rules }  = require('../config/webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'Topology.css'
        })
    ]
};
