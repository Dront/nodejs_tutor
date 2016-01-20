var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('test.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('decompressed.txt'));

console.log("File Decompressed.");
