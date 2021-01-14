module.exports = {
    entry: {
        myApp: "./src/javascript/index",
    },
    output: {
        filename: "bundle.js",
        publicPath: '/',
        path: __dirname + '/dist/'
    },
    module: {
        rules: [
            {test: /\.css$/,
            use: "style-loader"},
            {test: /\.css$/,
            use: "css-loader"},
        ]
    },
    devServer: {
        contentBase: "./dist",
        port: "3000",
        inline: true
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".json", ".css"],
    modules: [
      './node_modules',
      './app'
    ]
    }
}