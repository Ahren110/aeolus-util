/**
 * Created by abjia on 15-9-8.
 * webpack 配置文件
 */

var path = require('path');
var webpack = require('webpack');

//别名
var alias = {
    ae_ajax: __dirname + "/src/ajax/aeolus_ajax.js",
    ae_animation: __dirname + "/src/animation/aeolus_animation.js",
    ae_os: __dirname + "/src/os/aeolus_os.js",
    ae_sg: __dirname + "/src/storage/aeolus_ck.js",
    ae_ck: __dirname + "/src/storage/aeolus_sg.js",
    ae_websql: __dirname + "/src/storage/aeolus_websql.js",
    ae_temp: __dirname + "/src/template/aeolus_tmp.js",

    ae_jstring: __dirname + "/src/val/aeolus_jstring",
    ae_jvalidate: __dirname + "/src/val/aeolus_jvalidate",

    ae_location: __dirname + "/src/web/aeolus_location.js",
    ae_page: __dirname + "/src/web/aeolus_page.js"
};


module.exports = {


    //页面入口文件
    //根据filename的[name]值 会打包多个文件
    entry: {
        "common": "./src/main.js"
    },

    //开发模式
    devtool: 'source-map',
    debug: true,
    //插件项
    plugins: [

        //提取公共模块到common.js
        //new CommonsChunkPlugin("common.js",["test","user"]),
    ],

    //输出文件配置
    output: {
        //打包文件存放的绝对路径
        path: __dirname + '/dist/',
        //网站运行时的访问路径
        publicPath: "/src/",
        //打包后的文件名
        filename: '[name].js'
    },

    module: {

        //加载器配置
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            {test: /\.css$/, loader: 'style-loader!css-loader'},

            //.js 文件使用 jsx-loader 来编译处理
            //{ test: /\.js$/, loader: 'jsx-loader?harmony' },

            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}

        ]
    },
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: alias
    }
};