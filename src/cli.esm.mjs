import path from 'path';
import osPaths from 'os-paths';

// const path = require('path');
// const osPaths = require('os-paths');

console.log({ osPaths });
console.log(osPaths.home());
console.log(osPaths.temp());
console.log(path.join(osPaths.home(), 'test'))
