import * as React from 'react';

// NavigationContainer is refered here - Check RootStack
export const navigationRef = React.createRef();

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}


export default {
  setTopLevelNavigator,
  navigate,
  goBack,
};