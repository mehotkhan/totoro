const fs = require("fs");
const ejs = require("ejs");
const yaml = require("js-yaml");
require("dotenv").config();

export const GenerateDecap = () => {
  const baseConfigString = ejs.render(
    fs.readFileSync("configs/decap-base.yaml", "utf8")
  );
  const extraConfigString = ejs.render(
    fs.readFileSync("decap-extra-config.yml", "utf8")
  );

  // const extraConfigFile = fs.readFileSync("decap-extra-config.yml", "utf8");

  try {
    const baseConfigTemplate = yaml.load(baseConfigString);
    const extraConfigTemplate = yaml.load(extraConfigString);
    if (extraConfigTemplate && extraConfigTemplate.length > 0) {
      baseConfigTemplate.collections.push(extraConfigTemplate[0]);
    }

    // const config = yaml.load(configString, "utf-8");
    fs.writeFile(
      "public/admin/config.yml",
      yaml.dump(baseConfigTemplate),
      "utf8",
      (err) => {
        if (err) console.log(err);
      }
    );
  } catch (e) {
    console.log(e);
  }
};
