const fs = require("fs");

//create folder
if (fs.existsSync("./file-system")) {
  console.log("folder exists");
} else {
  fs.mkdir("./file-system", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("folder created.");
    }
  });
}

//create file and write to file
if (fs.existsSync("./file-system/index.ts")) {
  console.log("file exists");
} else {
  fs.writeFile(
    "./file-system/index.txt",
    "My first attempt at writing to a file",
    (error) => {
      if (error) {
        console.log(error);
      }
      console.log("index.ts file created ");
    }
  );
}
//rename file
if (fs.existsSync("./file-system/index.txt")) {
  fs.rename("./file-system/index.txt", "./file-system/app.txt", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("file renamed successfully!");
    }
  });
}

//delete file
if (fs.existsSync("./file-system/app.txt")) {
  fs.unlink("./file-system/app.txt", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("file deleted successfully!");
    }
  });
}
