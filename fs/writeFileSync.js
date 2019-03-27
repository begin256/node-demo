'use strict';

var fs = require('fs');

var data = 'Hello, test Node.js';
fs.writeFileSync('output.txt', data);