export default {
  preset: "ts-jest",
  testEnvironment: "node",
  //testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".ts"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};
