var fs = require('fs');
var rs = fs.createReadStream('./demofile1.txt');
rs.on('open', function () {
  console.log('The file is opened1');
});