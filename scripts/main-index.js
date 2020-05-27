const dirTree = require("directory-tree");
const fs = require("fs");
const PATH = require("path");
const sander = require("sander");

const excludes = [/css/, /geo/, /icons/, /static/];

function generateIndex() {
  const filteredTree = dirTree("./public/", {
    extensions: /\.html/,
    exclude: excludes,
  });
  fs.writeFile("./src/structure.json", JSON.stringify(filteredTree), err => {
    if (err) throw err;
  });
}

generateIndex();

module.exports = generateIndex;
