const del = require('del');
const path = require('path');
const { NoEmitOnErrorsPlugin, NamedModulesPlugin, NormalModuleReplacementPlugin } = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const projectRoot = process.cwd();

del.sync("dist/**");

module.exports = (env) => {

    env = env || {};
    const isOptimized = process.argv.indexOf('production') !== -1;
    const environment = env.Environment || process.env.Environment || 'Development';
    const baseHref = env.BaseHref || process.env.BaseHref || '/';
    const deployUrl = env.DeployUrl || process.env.DeployUrl || '/';
    const nodeEnv = env.NodeEnv || process.env.NODE_ENV || '';

    console.log(`Optimized: ${isOptimized}`);
    console.log(`Environment: ${environment}`);
    console.log(`BaseHref: ${baseHref}`)
    console.log(`DeployUrl: ${deployUrl}`);
    console.log('Node Env:', `${nodeEnv}`);

    const config = {
        devtool: isOptimized ? false : 'eval-source-map',
        resolve: { extensions: ['.ts', '.js'] },
        optimization: {
            providedExports: true,
            usedExports: true,
            sideEffects: true,
            concatenateModules: true,
            splitChunks: {
                cacheGroups: {
                    polyfills: {
                        test: /[\\/]node_modules[\\/](core-js|zone.js)[\\/]/,
                        name: "polyfills",
                        chunks: "all"
                    },                   
                    compiler: {
                        test: /[\\/]node_modules[\\/]@angular[\\/]compiler[\\/]/,
                        name: "compiler",
                        chunks: "all"
                    },
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            },
            runtimeChunk: 'single',
            minimize: true,
            minimizer: [
                new UglifyWebpackPlugin({ 
                    sourceMap: false,  
                    uglifyOptions: { 
                        compress: true, 
                        output: { 
                            comments: false 
                        } 
                    } 
                })],
        },
        entry: {
            styles: './src/styles.css',
            polyfills: './src/polyfills.ts',
            app: './src/main.ts',
        },
        output: {
            filename: 'bundles/[name].[hash].bundle.js',
            path: path.join(process.cwd(), "dist"),
            publicPath: deployUrl
        },
        module: {
            rules: [
                {
                    "test": /\.html$/,
                    "loader": "raw-loader"
                },
                {
                    "exclude": [
                       path.join(process.cwd(), "src\\styles.css")
                    ],
                    "test": /\.css$/,
                    "use": [
                        "to-string-loader",
                        "css-loader",
                        "postcss-loader"
                    ]
                },         
                {
                    "include": [
                       path.join(process.cwd(), "src\\styles.css")
                    ],
                    "test": /\.css$/,
                    "use": [
                        !isOptimized ? 'style-loader':  MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader"
                    ]
                },                 
                {
                    "test": /\.(eot|svg|cur)$/,
                    "loader": "file-loader",
                    "options": {
                        "name": "[name].[hash:20].[ext]",
                        "limit": 10000
                    }
                },
                {
                    "test": /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
                    "loader": "url-loader",
                    "options": {
                        "name": "[name].[hash:20].[ext]",
                        "limit": 10000
                    }
                },
                {
                    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                    loader: '@ngtools/webpack'
                }

            ]
        },
        plugins: [
            new NormalModuleReplacementPlugin(/environment$/,
            function(resource) {
                if (`${nodeEnv}` != '')
                    resource.request = resource.request.replace(/environment$/, `environment.${nodeEnv}`);
            }),
            new NoEmitOnErrorsPlugin(),
            new CopyWebpackPlugin([
                {
                    "context": "src",
                    "to": "",
                    "from": {
                        "glob": "assets/**/*",
                        "dot": true
                    }
                },
                {
                    "context": "src",
                    "to": "",
                    "from": {
                        "glob": "favicon.ico",
                        "dot": true
                    }
                }
            ], {
                    "ignore": [
                        ".gitkeep",
                        "**/.DS_Store",
                        "**/Thumbs.db"
                    ],
                    "debug": "warning"
            }),
            new ProgressPlugin(),
            new CircularDependencyPlugin({
                "exclude": /(\\|\/)node_modules(\\|\/)/,
                "failOnError": true,
                "onDetected": true,
                "cwd": projectRoot
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
              }),
            new HtmlWebpackPlugin({
                filename: __dirname + '/dist/index.html',
                template: __dirname + '/src/index.html',
                xhtml: true,
                compile: true,
                showErrors: true
            }),
            new AngularCompilerPlugin({
                tsConfigPath: path.join( __dirname, "tsconfig.json" ),
                entryModule: path.join(__dirname, 'src/app/app.module#AppModule'),
                skipCodeGeneration: !isOptimized,
                sourceMap: !isOptimized
            }),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerMode: 'static',
                reportFilename:  __dirname +'/reports/size/index.html'
            })
        ],
        "node": {
            "fs": "empty",
            "global": true,
            "crypto": "empty",
            "tls": "empty",
            "net": "empty",
            "process": true,
            "module": false,
            "clearImmediate": false,
            "setImmediate": false
        },
        devServer: {
            "historyApiFallback": true,
            stats: {
                warningsFilter: /System.import/
            }
        }
    };

    return config;
};