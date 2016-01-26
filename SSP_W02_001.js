console.log("hello world");

//requesting the file system module
var fs = require("fs");

fs.readdir("./", function(err, files){
	 console.log("Contents of directory");
	  for(var i in files){
		  if(files[i] != "SSP_W02_001.js" ){
		      console.log("File: " + files[i]);
	 	      fs.readFile(files[i], {encoding:"utf8", flag:"r"}, function(error, data){
			         console.log(data);
               if(i == files.length -1){
                   console.log("all done");
               }


			    });
      }
    }
});



fs.readdir("./", function(err, files){

});
