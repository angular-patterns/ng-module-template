warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory.
[1mdiff --git a/package.json b/package.json[m
[1mindex 598ea90..975ed2f 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -82,6 +82,7 @@[m
     "protractor": "^5.3.0",[m
     "protractor-jasmine2-screenshot-reporter": "^0.5.0",[m
     "raw-loader": "^0.5.1",[m
[32m+[m[32m    "resolve-url-loader": "^2.2.1",[m
     "rollup": "^0.50.0",[m
     "run-sequence": "^2.2.0",[m
     "style-loader": "^0.19.0",[m
[1mdiff --git a/src/app/app.component.html b/src/app/app.component.html[m
[1mindex 2e25bfc..e6e90c4 100644[m
[1m--- a/src/app/app.component.html[m
[1m+++ b/src/app/app.component.html[m
[36m@@ -1,4 +1,8 @@[m
 <h1>{{ title }}</h1>[m
[32m+[m[32m<button type="button" class="btn btn-default btn-lg">[m
[32m+[m[32m    <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star[m
[32m+[m[32m  </button>[m
[32m+[m[32m  <img src="../../images/test.jpg" />[m
 <h2>CI Reports</h2>[m
 <table class="table table-striped">[m
     <thead>[m
[1mdiff --git a/webpack.config.js b/webpack.config.js[m
[1mindex fe77897..39831e0 100644[m
[1m--- a/webpack.config.js[m
[1m+++ b/webpack.config.js[m
[36m@@ -61,13 +61,25 @@[m [mmodule.exports = () => {[m
                     }[m
                 },[m
                 {[m
[31m-                    test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,[m
[32m+[m[32m                    test: /\.(jpg|png|webp|gif|ani)$/,[m
                     loader: "url-loader",[m
                     options:  {[m
                         name:  '[name].[hash:20].[ext]',[m
[31m-                        outputPath:  'assets/',[m
[32m+[m[32m                        outputPath:  'images/',[m[41m              [m
[32m+[m[32m                        //limit: 10000[m
[32m+[m[32m                    }[m
[32m+[m[32m                },[m
[32m+[m[32m                {[m
[32m+[m[32m                    test: /\.(otf|ttf|woff|woff2)$/,[m
[32m+[m[32m                    loader: "url-loader",[m
[32m+[m[32m                    include: [[m
[32m+[m[32m                        path.join(__dirname, 'node_modules/bootstrap')[m
[32m+[m[32m                    ],[m
[32m+[m[32m                    options:  {[m
[32m+[m[32m                        name:  '[name].[hash:20].[ext]',[m
[32m+[m[32m                        outputPath:  'fonts/',[m
                         useRelativePath: true,[m
[31m-                        limit: 10000[m
[32m+[m[32m                        //limit: 10000[m
                     }[m
                 },[m
                 {[m
