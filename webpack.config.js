const path = require('path');
const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonChunksPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ProvidePlugin = require('webpack').ProvidePlugin;

const del = require('del');
const Dotenv = require('dotenv-webpack');

del.sync("dist/**");

module.exports = () => {
    const isProd = process.argv.indexOf('-p') !== -1;
    console.log(`ENV: ${isProd? 'production': 'development'}`);


    const config = {
        devtool: isProd ? false: 'inline-source-map',
        resolve: { extensions: ['.ts', '.js'] },
        entry: {
            app: './src/main.ts',
            vendor:  './src/vendor.ts',
            polyfills: './src/polyfills.ts'
        },
        output: {
            filename: 'bundles/[name].[hash].bundle.js',
            path: path.join(process.cwd(), "dist")
        },
        module: {
            rules: [
                { test: /\.ts$/, use: isProd ? '@ngtools/webpack' : ['awesome-typescript-loader?slient=true', 'angular2-template-loader'] },
                { 
                    test: /\.html$/, 
                    loader: 'html-loader',
                    options: {
                        minimize:false,
                        removeAttributeQuotes: false
                    }
                    
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
                    include: [
                        path.join(__dirname, 'node_modules')
                    ],
                    loader: "url-loader",
                    options: {
                        name: '[name].[hash:20].[ext]',
                        outputPath: 'assets/',
                        useRelativePath: true,
                        limit: 10000
                    }                      
                },
                {
                    test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
                    include: [
                        path.join(__dirname, 'src')
                    ],
                    loader: "url-loader",
                    options: {
                        name: '[name].[hash:20].[ext]',
                        outputPath: 'assets/',
                        useRelativePath: true,
                        limit: 10
                    }                      
                },
                
                {
                   
                    test: /\.css$/,
                    include: [
                        path.join(__dirname, 'src/app')
                    ],
                    use: [
                        'to-string-loader',
                        'css-loader'
                    ]
                },

                { 
                    test: /\.css$/, 
                    exclude: [
                        path.join(__dirname, 'src/app')
                    ], 
                    use: ExtractTextPlugin.extract({ 
                        fallback: 'style-loader', 
                        use: 'css-loader' }) 
                    }
                
            ]
        },
        plugins: [
            new Dotenv({
              path: './.env'
            }),          
            new ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            new ProgressPlugin(),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerMode: 'static',
            }),
            new ExtractTextPlugin('bundles/styles.[hash].bundle.css'),    
            new HtmlWebpackPlugin({
                filename: __dirname + '/dist/index.html',
                template: __dirname + '/src/index.html',
                xhtml: true,
                compile: true,
                showErrors: true
            }),
            new CommonChunksPlugin({
                names: ['app','vendor','polyfills']
            })

        ].concat(isProd ? [
            new AotPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: path.join(__dirname, 'src/app/app.module#SaModule')
            })]:
            [
         
                // get rid of warning "Critical dependency: the request of a dependency is an expression" 
                new ContextReplacementPlugin( /(.+)?angular(\\|\/)core(.+)?/, path.join(__dirname, 'src'), {} ),  
                // new ContextReplacementPlugin(
                //     /angular(\\|\/)core(\\|\/)@angular/,
                //     path.join(__dirname, 'src'), // location of your src
                //     {
                //         // your Angular Async Route paths relative to this root directory
                //     })
            ])
    };

    return config;
};