const del = require('del');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');
const postcssImports = require('postcss-import');

const { NoEmitOnErrorsPlugin, NamedModulesPlugin } = require('webpack');
const { NamedLazyChunksWebpackPlugin, BaseHrefWebpackPlugin, PostcssCliResources } = require('@angular/cli/plugins/webpack');
const { CommonsChunkPlugin } = require('webpack').optimize;
const { AngularCompilerPlugin } = require('@ngtools/webpack');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssnano = require('cssnano');

const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const hashFormat = { "chunk": "", "extract": "", "file": ".[hash:20]", "script": "" };
const baseHref = process.env.BaseHref;
const deployUrl = "";
const projectRoot = process.cwd();
const maximumInlineSize = 10;
const postcssPlugins = function (loader) {
    return [
        postcssImports({
            resolve: (url, context) => {
                return new Promise((resolve, reject) => {
                    let hadTilde = false;
                    if (url && url.startsWith('~')) {
                        url = url.substr(1);
                        hadTilde = true;
                    }
                    loader.resolve(context, (hadTilde ? '' : './') + url, (err, result) => {
                        if (err) {
                            if (hadTilde) {
                                reject(err);
                                return;
                            }
                            loader.resolve(context, url, (err, result) => {
                                if (err) {
                                    reject(err);
                                }
                                else {
                                    resolve(result);
                                }
                            });
                        }
                        else {
                            resolve(result);
                        }
                    });
                });
            },
            load: (filename) => {
                return new Promise((resolve, reject) => {
                    loader.fs.readFile(filename, (err, data) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        const content = data.toString();
                        resolve(content);
                    });
                });
            }
        }),
        postcssUrl({
            filter: ({ url }) => url.startsWith('~'),
            url: ({ url }) => {
                const fullPath = path.join(projectRoot, 'node_modules', url.substr(1));
                return path.relative(loader.context, fullPath).replace(/\\/g, '/');
            }
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
                filter: (asset) => {
                    return maximumInlineSize > 0 && !asset.hash && !asset.absolutePath.endsWith('.cur');
                },
                url: 'inline',
                // NOTE: maxSize is in KB
                maxSize: maximumInlineSize,
                fallback: 'rebase',
            },
            { url: 'rebase' },
        ]),
        PostcssCliResources({
            deployUrl: loader.loaders[loader.loaderIndex].options.ident == 'extracted' ? '' : deployUrl,
            loader,
            filename: `[name]${hashFormat.file}.[ext]`,
        }),
        autoprefixer({ grid: true }),
    ];
};


require('dotenv').config();
del.sync("dist/**");

module.exports = (env) => {
    env = env || {};
    const isOptimized = process.argv.indexOf('-p') !== -1;
    const environment = env.Environment || process.env.Environment || 'Development';
    const baseHref = env.BaseHref || process.env.BaseHref || '/';
    const deployUrl = env.DeployUrl || process.env.DeployUrl || '/';

    console.log(`Optimized: ${isOptimized}`);
    console.log(`Environment: ${environment}`);
    console.log(`BaseHref: ${baseHref}`)
    console.log(`DeployUrl: ${deployUrl}`);

    const config = {
        devtool: isOptimized ? false : 'inline-source-map',
        resolve: { extensions: ['.ts', '.js'] },
        entry: {
            app: './src/main.ts',
            vendor: './src/vendor.ts',
            polyfills: './src/polyfills.ts',
            styles: './src/styles.css'
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
                        path.join(process.cwd(), "src\\styles.css")
                    ],
                    "test": /\.css$/,
                    "use": [
                        {
                            "loader": "raw-loader"
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "embedded",
                                "plugins": postcssPlugins,
                                "sourceMap": true
                            }
                        }
                    ]
                },
                {
                    "exclude": [
                        path.join(process.cwd(), "src\\styles.css")
                    ],
                    "test": /\.scss$|\.sass$/,
                    "use": [
                        {
                            "loader": "raw-loader"
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "embedded",
                                "plugins": postcssPlugins,
                                "sourceMap": true
                            }
                        },
                        {
                            "loader": "sass-loader",
                            "options": {
                                "sourceMap": true,
                                "precision": 8,
                                "includePaths": []
                            }
                        }
                    ]
                },
                {
                    "include": [
                        path.join(process.cwd(), "src\\styles.css")
                    ],
                    "test": /\.css$/,
                    "use": [
                        "style-loader",
                        {
                            "loader": "raw-loader"
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "embedded",
                                "plugins": postcssPlugins,
                                "sourceMap": true
                            }
                        }
                    ]
                },
                {
                    "include": [
                        path.join(process.cwd(), "src\\styles.css")
                    ],
                    "test": /\.scss$|\.sass$/,
                    "use": [
                        "style-loader",
                        {
                            "loader": "raw-loader"
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "embedded",
                                "plugins": postcssPlugins,
                                "sourceMap": true
                            }
                        },
                        {
                            "loader": "sass-loader",
                            "options": {
                                "sourceMap": true,
                                "precision": 8,
                                "includePaths": []
                            }
                        }
                    ]
                },
                {
                    test: /\.ts$/,
                    loader: '@ngtools/webpack'
                }

            ]
        },
        plugins: [
            new NoEmitOnErrorsPlugin(),
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
            new CircularDependencyPlugin({
                "exclude": /(\\|\/)node_modules(\\|\/)/,
                "failOnError": false,
                "onDetected": false,
                "cwd": projectRoot
            }),
            new NamedLazyChunksWebpackPlugin(),
            new HtmlWebpackPlugin({
                filename: __dirname + '/dist/index.html',
                template: __dirname + '/src/index.html',
                xhtml: true,
                compile: true,
                showErrors: true
            }),
            new BaseHrefWebpackPlugin({ baseHref: baseHref }),
            new CommonsChunkPlugin({
                names: ['app', 'vendor', 'styles', 'polyfills']
            }),
            new NamedModulesPlugin({}),
            new AngularCompilerPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: path.join(__dirname, 'src/app/app.module#AppModule'),
                skipCodeGeneration: !isOptimized
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
            "historyApiFallback": true
        }
    };

    return config;
};