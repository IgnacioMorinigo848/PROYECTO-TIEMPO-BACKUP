module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // o 'module:metro-react-native-babel-preset' si no usás Expo
    plugins: [
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }]
    ]
  };
};
