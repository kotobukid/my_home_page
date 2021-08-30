const path = require('path');
const webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');
/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

const entry = {};
entry['static/javascripts/index'] = './ts/index.ts';

module.exports = {
    mode: 'development',
    entry,
    output: {
        filename: '[name].js',
        path: `${__dirname}`
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {test: /\.txt$/, use: 'raw-loader', exclude: '/node_modules/'},
            {test: /\.vue$/, use: 'vue-loader', exclude: '/node_modules/'},
            {test: /server\/main\.ts$/, use: 'ts-loader', exclude: '/node_modules/'},
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: '/node_modules/',
                include: [path.resolve(__dirname, 'ts')],
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    configFile: path.resolve(__dirname, 'tsconfig.json')
                }
            },
            {test: /\.pug$/, use: 'pug-plain-loader', exclude: '/node_modules/'},
            {
                test: /\.less$/, use: ['vue-style-loader', 'css-loader', 'less-loader'],
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/, use: ['vue-style-loader', 'css-loader'],
                exclude: '/node_modules/'
            }
        ]
    },

    devServer: {
        open: true
    },
    cache: true,

    resolve: {
        extensions: [".vue", ".js", ".ts"],
        alias: {
            "ts": path.resolve(__dirname, 'ts'),
            "@c": path.resolve(__dirname, 'components'),
            "vue$": "vue/dist/vue.esm.js"
        }
    }
};