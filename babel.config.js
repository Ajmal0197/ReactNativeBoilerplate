module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ["transform-remove-console"],     //removing unused paper component and consoles.log from app during release (production) versions
    },
  },
};
