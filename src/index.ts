

const fs = require('fs');
var pug = require('pug');
import generateHoles from '../shared/utilities';

let fn = pug.compileFile('views/leaderboard.pug')
fs.writeFile('build/index.html', fn({holes: generateHoles()}), (err :any) => {
    if (err) throw err;
    console.log('Data written to file');
});