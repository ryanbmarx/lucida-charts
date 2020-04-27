const chokidar = require("chokidar");
const path = require("path");
const mkdirp = require("mkdirp");
const fs = require("fs");
const colors = require("colors");

chokidar.watch(["./src/**/*.html", "./src/**/*.csv", "./src/**/*.css"]).on("change", (srcPath) => {
  console.log(colors.green(`+++ Changes to ${srcPath}`));
  const publicPath = path.dirname(srcPath).replace("src", "public");
  const fileName = path.basename(srcPath);

  mkdirp(publicPath)
    .then((m) => {
      fs.copyFile(srcPath, `${publicPath}/${fileName}`, (err) => {});
    })
    .catch((e) => console.log(colors.red(`${e}`)));
});
