const fs = require("fs");
const ejs = require("ejs");
const yaml = require("js-yaml");
require("dotenv").config();

const configTemplate = fs.readFileSync("tools/netlify-template.yaml", "utf8");
const configString = ejs.render(configTemplate);

try {
  const config = yaml.load(configString, "utf-8");
  fs.writeFile("public/admin/config.yml", yaml.dump(config), "utf8", (err) => {
    if (err) console.log(err);
  });
} catch (e) {
  console.log(e);
}
