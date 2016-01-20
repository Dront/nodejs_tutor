var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('test.txt');

// Set the encoding to be utf8.
readerStream.setEncoding('UTF8');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

var writeData = "LOOOOOOOOOOOOL"

// Write the data to stream with encoding to be utf8
writerStream.write(writeData,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   console.log("Got new chunk of data: " + chunk);
   data += chunk;
});

readerStream.on('end',function(){
   console.log("Got all the data from stream");
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log("Got error from stream!");
   console.log(err.stack);
});

console.log("Program Ended");
