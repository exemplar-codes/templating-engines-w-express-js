const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

const partialDirPath = path.join(__dirname, "..", "views"); // reuse SSR ones

ejs.renderFile(
  path.join(__dirname, "shop.ejs"),
  {
    prods: [{ title: "SSG title" }],
    docTitle: "My shop",
    myActivePath: "shop-page",
    viewEngine: "ejs",
    partialDirPath: path.join(__dirname, "..", "views"),
    path, // for constructing path to partial
    includePath: (location) => path.join(partialDirPath, location),
  },
  (err, output) => {
    fs.writeFileSync(path.join(__dirname, "output.html"), output);
  }
);

// EJS will consider the folder of template as views folder
// See https://github.com/sanjar-notes/nodejs-notes/commit/c90e013257b31d839d8a302a02eaec3d92da60fc for more
