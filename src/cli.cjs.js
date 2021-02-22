const path = require('path');
const osPaths = require('os-paths/cjs');

console.log({ osPaths });
console.log(osPaths.home());
console.log(osPaths.temp());
console.log(path.join(osPaths.home(), 'test'))
