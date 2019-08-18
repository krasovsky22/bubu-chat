module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      "@babel/plugin-syntax-dynamic-import",
      "babel-plugin-styled-components",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@assets": "./assets",
            "@stores": "./src/stores",
            "@models": "./src/models",
            "@screens": "./src/screens",
            "@components": "./src/components"
          }
        }
      ]
    ],
    presets: ["babel-preset-expo"]
  };
};
