import { camelCase } from "lodash-es";
const requireModule = require.context(
  "../modules/",
  true,
  /.*\/store\/index\.ts$/
);

const modules: any = {};

requireModule.keys().forEach((filePath: string) => {
  const fileNameArr = filePath.split("/");
  const fileName = fileNameArr[1]; // get folder module name
  const moduleName = camelCase(fileName.replace(/(\.\/|\.ts)/g, ""));

  modules[moduleName] = requireModule(filePath).default;
});

export default modules;
