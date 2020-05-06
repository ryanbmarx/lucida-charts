const chokidar = require("chokidar");
const path = require("path");
const mkdirp = require("mkdirp");
const fs = require("fs");
const colors = require("colors");
const glob = require("glob");
const args = process.argv.slice(2);
const fileGlob = "./src/**/*.{html,csv}";

const watch = args.indexOf("--watch") > -1;



if (watch){
    glob(fileGlob, {}, function (err, files) {
        const watcher = chokidar.watch(files);
        watcher.on("change", (srcPath) => {
            console.log(colors.green(`+++ Changes to ${srcPath}`));
            moveFile(srcPath);
        })

        watcher.on("add", srcPath =>{
            moveFile(srcPath);
        });
    });
} else {
    glob(fileGlob, {}, function (err, files) {
        if (err) throw err;
        files.forEach(f => moveFile(f))
    })

}



function moveFile(srcPath){
    const publicPath = path.dirname(srcPath).replace("src", "public");
    const fileName = path.basename(srcPath);

    mkdirp(publicPath)
        .then((m) => {
            console.log(colors.green(`+++ Moving ${srcPath}`));
            fs.copyFile(srcPath, `${publicPath}/${fileName}`, (err) => {});
        })
        .catch((e) => console.log(colors.red(`${e}`)));
}