const fs = require("fs");

module.exports.CreateFolder = function (path) {
  try {
    fs.exists(path, (exists) => {
      if (!exists) {
        fs.mkdirSync(path);
        console.log(`Folder ${path} successfully created!`);
      }
    });
  } catch {
    console.log(`Can't Create folder ${path}!`);
  }
};

module.exports.CreateSubFolders = function (basePath, terms) {
  terms.forEach((term) => {
    let path = "";
    if (basePath[basePath.length - 1] == "/") {
      path = `${basePath}${term.name}`;
    } else {
      path = `${basePath}/${term.name}`;
    }
    this.CreateFolder(path);
  });
};


module.exports.SaveImage = function(path){
    fs.createWriteStream(path)
}