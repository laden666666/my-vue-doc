#! /usr/bin/env node

var program = require('commander')
// var build = require('../build/build')
var dev = require('../build/dev')
var package = require('../package.json')

program
    .command('build')
    .description('发布文档')
    .action(function (option) {
        build()
    });

program
    .command('dev')
    .description('开发文档')
    .action(function (option) {
        dev()
    });

program
    .version(package.version)
    .parse(process.argv);