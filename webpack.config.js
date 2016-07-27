var path = require('path');

module.exports = {
    entry: './js/index3.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index3.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}