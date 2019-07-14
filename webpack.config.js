const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        plugins: [
            new MiniCssExtractPlugin({
              // Options similar to the same options in webpackOptions.output
              // both options are optional
              filename:  'styles.css',
            }),
          ],
        entry:  './src/app.js',
        mode: 'development',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test:  /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development',
                      },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                          sourceMap: true
                        }
                      },
                    {
                        loader: 'sass-loader',
                        options: {
                          sourceMap: true
                        }
                    }
                ],
            }]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};
