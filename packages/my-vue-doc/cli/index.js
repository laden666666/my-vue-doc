#! /usr/bin/env node

var program = require('commander')
var package = require('../package.json')

program
    .command('build')
    .description('发布文档')
    .action(function (option) {
        process.env.NODE_ENV = 'production'
        var build = require('../build/build')
        build()
    });

program
    .command('dev')
    .description('开发文档')
    .action(function (option) {
        process.env.NODE_ENV = 'development'
        var dev = require('../build/dev')
        dev()
    });

program
    .command('init')
    .description('初始化文档')
    .action(function (option) {
        var init = require('./init')
        init()
    });

program
    .version(package.version)
    .parse(process.argv);
