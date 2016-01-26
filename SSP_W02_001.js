console.log("hello world");

//requesting the file system module
var fs = require("fs");

fs.readdir("./", myFileContents);

function myFileContents(err, files){
  console.log("Got the contents")

  for (var i in files){
    console.log("File:" + files[i]);

    if(file[i] != "SSP_W01_001.js"){
      fs.readFile(files[i], {encoding:"utf8", flag: "r"}, function(err, data){
      if(error){
        throw error;
      }

      console.log("contents of " + file[i] + "/n/n" + data);

     }
   }
}
