const dirTree = require("directory-tree");
const fs = require("fs");

function generateIndex() {
  const filteredTree = dirTree("./public/narratives", { extensions: /\.html/ });
  fs.writeFile("./src/structure.json", JSON.stringify(filteredTree), err => {
    if (err) throw err;
  });
}

generateIndex();

module.exports = generateIndex;
