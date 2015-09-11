/**
 * 暴露全模块
 */

var ajax = require("ae_ajax");
var animation = require("ae_animation");

var os  = require("ae_os");
var sg  = require("ae_sg");
var ck  = require("ae_ck");
var temp  = require("ae_temp");
var jstring  = require("ae_jstring");
var jvalidate  = require("ae_jvalidate");
var page = require("ae_page");
var location = require("ae_location");


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
