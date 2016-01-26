console.log("hello world");

//requesting the file system module
var fs = require("fs");

fs.readdir("./", myFileContents);

fs.access("./", fs.R_OK, myFileContents);

function myFileContents(err, files){
  console.log("Got the contents")

  for (var i in files){
    console.log("File:" + files[i]);
  }
}
