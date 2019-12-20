"use strict";
var path = require('path');
var slsw = require('serverless-webpack');
module.exports = {
    entry: slsw.lib.entries,
    externals: [
        /aws-sdk/,
    ],
    mode: 'development',
    target: 'node',
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.ts',
            '.tsx',
            '.mjs',
        ],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                type: 'javascript/auto',
                test: /\.mjs$/,
                use: [],
            },
        ],
    },
};
//# sourceMappingURL=webpack.config.js.map