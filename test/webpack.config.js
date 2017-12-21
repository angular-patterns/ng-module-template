const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin'); 
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const Dotenv = require('dotenv-webpack');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');

const path = require('path');
require('dotenv').config();

function resolvePathFromRoot(relativePath) {
    var root = path.resolve(__dirname, '../');
    return path.resolve(root, relativePath);
}
  
module.exports = () => {
    const isOptimized = process.argv.indexOf('-p') !== -1;
    console.log(`Optimized: ${isOptimized}`);
    console.log(`Environment: ${process.env.Environment}`);
    console.log(`BaseHref: ${process.env.BaseHref}`)


    const config = {
        devtool: isOptimized ? false: 'inline-source-map',
        resolve: { 
            extensions: ['.ts', '.js'],
            modules: [
                resolvePathFromRoot('src'), 
                resolvePathFromRoot('node_modules')
            ]
        },
        module: {
            rules: [
                { 
                    test: /\.ts$/,
                    loader: '@ngtools/webpack',
                    options: {
                        tsConfigPath: './tsconfig.json'
                    }
                },
                { 
                    test: /\.html$/, 
                    loader: 'raw-loader'
                },
                {
                    test: /\.(eot|svg|cur)$/,
                    loader: "file-loader",
                    options: {
                        name: '[name].[hash:20].[ext]',
                        outputPath: 'assets/'
                    }  
                },
                {
                    test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
                    loader: "url-loader",
                    options: {
                        name: '[name].[hash:20].[ext]',
                        outputPath: 'assets/',
                        useRelativePath: true,
                        limit: 10000
                    }                      
                },
                {
                   
                    test: /\.css$/,
                    use: [
                        'to-string-loader',
                        'css-loader'
                    ]
                },
                {
                    enforce: 'post',
                    test: /\.(js|ts)$/,
                    loader: 'istanbul-instrumenter-loader',
                    include: resolvePathFromRoot('src'),
                    query: { esModules: true },
                    exclude: [
                      /\.(e2e|spec)\.ts$/,
                      /node_modules/
                    ]
                }                  
                
            ]
        },
        plugins: [
            new Dotenv({
              path: resolvePathFromRoot('.env')
            }),          
            new ProgressPlugin(),
            new BaseHrefWebpackPlugin({ baseHref: process.env.BaseHref })
            // new AotPlugin({
            //     tsConfigPath: './tsconfig.json',
            //     entryModule: path.join(__dirname, 'src/app/app.module#AppModule')
            // })

        ]
    };

    return config;
};