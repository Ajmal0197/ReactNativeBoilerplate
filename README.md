# ReactNativeBoilerplate

```
{
  "name": "APP_NAME",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint .",
    "cleanCache": "react-native start -- --reset-cache",
    "adb": "adb reverse tcp:9090 tcp:9090 && adb reverse tcp:8081 tcp:8081 && adb reverse tcp:3000 tcp:3000",
    "clean:android": "cd android/ && ./gradlew clean && cd .. && react-native run-android",
    "clean:build": "cd android/ && ./gradlew clean &&  ./gradlew assembleRelease",
    "postinstall": "patch-package"

  },
  "dependencies": {
    "@react-native-async-storage/async-storage": "^1.14.1",
    "@react-native-community/masked-view": "^0.1.10",
    "@react-navigation/native": "^5.9.3",
    "@react-navigation/stack": "^5.14.3",
    "axios": "^0.21.1",
    "dayjs": "^1.10.3",
    "lottie-ios": "3.1.8",
    "lottie-react-native": "^3.5.0",
    "react": "16.13.1",
    "react-native": "0.63.4",
    "react-native-animatable": "^1.3.3",
    "react-native-gesture-handler": "^1.10.2",
    "react-native-inappbrowser-reborn": "^3.5.1",
    "react-native-keyboard-aware-scroll-view": "^0.9.3",
    "react-native-linear-gradient": "^2.5.6",
    "react-native-modal": "^11.7.0",
    "react-native-pager-view": "^5.1.2",
    "react-native-reanimated": "^1.13.2",
    "react-native-safe-area-context": "^3.1.9",
    "react-native-screens": "^2.17.1",
    "react-native-splash-screen": "^3.2.0",
    "react-native-swiper": "^1.6.0",
    "react-native-tab-view": "^3.0.0",
    "react-native-toast-message": "^1.4.9",
    "react-redux": "^7.2.0",
    "redux": "^4.0.5",
    "redux-saga": "^1.1.3"
  },
  "devDependencies": {
    "@babel/core": "^7.13.1",
    "@babel/runtime": "^7.13.7",
    "@react-native-community/eslint-config": "^2.0.0",
    "babel-jest": "^26.6.3",
    "babel-plugin-transform-remove-console": "^6.9.4",
    "eslint": "^7.20.0",
    "jest": "^26.6.3",
    "metro-react-native-babel-preset": "^0.65.1",
    "react-test-renderer": "16.13.1",
    "patch-package": "^6.4.7",
    "postinstall-postinstall": "^2.1.0",
    "reactotron-react-native": "^5.0.0",
    "reactotron-redux": "^3.1.2",
    "reactotron-redux-saga": "^4.2.3"
  },
  "jest": {
    "preset": "react-native"
  }
}
```
