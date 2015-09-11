/**
 * 暴露全模块
 */

var ajax = require("./ajax/aeolus_ajax");
var animation = require("./animation/aeolus_animation");

var os  = require("./os/aeolus_os");
var sg  = require("./storage/aeolus_sg");
var ck  = require("./storage/aeolus_ck");

var temp  = require("./template/aeolus_tmp");

var jstring  = require("./val/aeolus_jstring");
var jvalidate  = require("./val/aeolus_jvalidate");

var page = require("./web/aeolus_page");
var location = require("./web/aeolus_location");


module.exports = {
    ajax : ajax,
    animation : animation,
    os : os,
    sg : sg,
    ck : ck,
    temp : temp,
    jstring : jstring,
    jvalidate : jvalidate,
    location : location,
    page : page
}
