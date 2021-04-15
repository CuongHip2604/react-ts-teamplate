import { camelCase } from "lodash-es";

const requireModule = require.context("../modules/", true, /.*\/routes\.ts$/);

const modulesRoutes: any = {};

requireModule.keys().forEach((filePath) => {
  const fileNameArr = filePath.split("/");
  const fileName = fileNameArr[1]; // get folder module name
  const moduleName = camelCase(fileName.replace(/(\.\/|\.ts)/g, ""));

  modulesRoutes[moduleName] = requireModule(filePath).default;
});

export default modulesRoutes;
