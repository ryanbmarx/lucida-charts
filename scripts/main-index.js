const dirTree = require("directory-tree");
const fs = require("fs");

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
