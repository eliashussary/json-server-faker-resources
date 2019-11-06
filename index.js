// @ts-check
const fs = require("fs");
const path = require("path");

const resourcesPath = path.resolve(__dirname, "resources");

const database = {};
const resources = fs.readdirSync(resourcesPath);

for (const resourceModule of resources) {
  const resourceFileInfo = path.parse(resourceModule);

  if (resourceFileInfo.ext === ".js") {
    database[resourceFileInfo.name] = [];
    const collectionPointer = database[resourceFileInfo.name];
    require(path.resolve(resourcesPath, resourceModule))(
      collectionPointer,
      database
    );
  }
}

module.exports = () => {
  return database;
};

