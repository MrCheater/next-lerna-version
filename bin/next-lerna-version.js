#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var lerna = JSON.parse(
    fs.readFileSync(
        path.join(process.cwd(), './lerna.json')
    )
);

var version = lerna.version.split('.');

var major = version[0];
var minor = version[1];
var patch = version[2];

patch = +patch + 1;

console.log('export NEXT_LERNA_VERSION='+[major, minor, patch].join('.'))