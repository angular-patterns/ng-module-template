const del = require('del');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CommonsChunkPlugin } = require('webpack').optimize;
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');
const cssnano = require('cssnano');
const customProperties = require('postcss-custom-properties');

const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const { NamedLazyChunksWebpackPlugin, BaseHrefWebpackPlugin } = require('@angular/cli/plugins/webpack');

const postcssPlugins = function () {
    // safe settings based on: https://github.com/ben-eb/cssnano/issues/358#issuecomment-283696193
    const importantCommentRe = /@preserve|@licen[cs]e|[@#]\s*source(?:Mapping)?URL|^!/i;
    const minimizeOptions = {
        autoprefixer: false,
        safe: true,
        mergeLonghand: false,
        discardComments: { remove: (comment) => !importantCommentRe.test(comment) }
    };
    return [
        postcssUrl({
            filter: ({ url }) => url.startsWith('~'),
            url: ({ url }) => path.join(projectRoot, 'node_modules', url.substr(1)),
        }),
        postcssUrl([
            {
                // Only convert root relative URLs, which CSS-Loader won't process into require().
                filter: ({ url }) => url.startsWith('/') && !url.startsWith('//'),
                url: ({ url }) => {
                    if (deployUrl.match(/:\/\//) || deployUrl.startsWith('/')) {
                        // If deployUrl is absolute or root relative, ignore baseHref & use deployUrl as is.
                        return `${deployUrl.replace(/\/$/, '')}${url}`;
                    }
                    else if (baseHref.match(/:\/\//)) {
                        // If baseHref contains a scheme, include it as is.
                        return baseHref.replace(/\/$/, '') +
                            `/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
                    }
                    else {
                        // Join together base-href, deploy-url and the original URL.
                        // Also dedupe multiple slashes into single ones.
                        return `/${baseHref}/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
                    }
                }
            },
            {
                // TODO: inline .cur if not supporting IE (use browserslist to check)
                filter: (asset) => !asset.hash && !asset.absolutePath.endsWith('.cur'),
                url: 'inline',
                // NOTE: maxSize is in KB
                maxSize: 10
            }
        ]),
        autoprefixer(),
        customProperties({ preserve: true })
    ].concat(minimizeCss ? [cssnano(minimizeOptions)] : []);
};


const minimizeCss = false;
require('dotenv').config();
del.sync("dist/**");

module.exports = () => {
    const isOptimized = process.argv.indexOf('-p') !== -1;
    console.log(`Optimized: ${isOptimized}`);
    console.log(`Environment: ${process.env.Environment}`);
    console.log(`BaseHref: ${process.env.BaseHref}`)


    const config = {
        devtool: isOptimized ? false : 'inline-source-map',
        resolve: { extensions: ['.ts', '.js'] },
        entry: {
            app: './src/main.ts',
            vendor: './src/vendor.ts',
            polyfills: './src/polyfills.ts'
        },
        output: {
            filename: 'bundles/[name].[hash].bundle.js',
            path: path.join(process.cwd(), "dist")
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
                    "test": /\.html$/,
                    "loader": "raw-loader"
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
                    "exclude": [
                        path.join(process.cwd(), "src\\global.css")
                    ],
                    "test": /\.css$/,
                    "use": [
                        "exports-loader?module.exports.toString()",
                        {
                            "loader": "css-loader",
                            "options": {
                                "sourceMap": false,
                                "importLoaders": 1
                            }
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "postcss",
                                "plugins": postcssPlugins,
                                "sourceMap": false
                            }
                        }
                    ]
                },
                {
                    "include": [
                      path.join(process.cwd(), "src\\global.css")
                    ],
                    "test": /\.css$/,
                    "use": [
                      "style-loader",
                      {
                        "loader": "css-loader",
                        "options": {
                          "sourceMap": false,
                          "importLoaders": 1
                        }
                      },
                      {
                        "loader": "postcss-loader",
                        "options": {
                          "ident": "postcss",
                          "plugins": postcssPlugins,
                          "sourceMap": false
                        }
                      }
                    ]
                  }

            ]
        },
        plugins: [
            new Dotenv({
                path: './.env'
            }),
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
            new BaseHrefWebpackPlugin({ baseHref: process.env.BaseHref }),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerMode: 'static',
                reportFilename: './reports/size/index.html'
            }),
            new ExtractTextPlugin('bundles/styles.[hash].bundle.css'),
            new NamedLazyChunksWebpackPlugin(),
            new HtmlWebpackPlugin({
                filename: __dirname + '/dist/index.html',
                template: __dirname + '/src/index.html',
                xhtml: true,
                compile: true,
                showErrors: true
            }),
            new CommonsChunkPlugin({
                names: ['app', 'vendor', 'polyfills']
            }),
            new AotPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: path.join(__dirname, 'src/app/app.module#AppModule')
            })


        ],
        devServer: {
            "historyApiFallback": true
        }
    };

    return config;
};