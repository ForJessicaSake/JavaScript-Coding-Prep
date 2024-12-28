const fs = require("fs");

//create folder

fs.mkdir("./file-system", () => {
  console.log("folder created.");
});

//create file
fs.writeFile("./file-system/index.txt", "", () => {
  console.log("index.ts file created ");
});

//write to an existing file
fs.writeFile(
  "./file-system/index.txt",
  "My first attempt at writing to a file",
  () => {
    console.log("file update successfully!");
  }
);

//rename file
fs.rename("./file-system/index.txt", "./file-system/app.txt", () => {
  console.log("file renamed successfully!");
});

// delete file
fs.unlink("./file-system/app.txt", () => {
  console.log("file deleted successfully!");
});
