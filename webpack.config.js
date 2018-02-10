const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    // メインとなるファイル（エントリーポイント）
    entry: ['./src/main.ts',],
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/wwwroot/js`,
        // 出力ファイル名
        filename: 'bundle.min.js',
        library: 'bundle'
    },
    plugins: [
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
        })
    ],
    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                exclude: /node_modules/,
                // TypeScript をコンパイルする
                use: 'awesome-typescript-loader'
            },
            // ソースマップファイルの処理
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        extensions: [
            '.ts', '.js'
        ]
    },
    // ソースマップを有効に
    devtool: 'source-map'
};