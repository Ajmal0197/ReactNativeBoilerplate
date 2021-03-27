import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import RootStack from '../src/routing/RootStack'
import { store } from './store/configureStore'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen'
import { Colors } from './constants/constants'

global.ErrorUtils.setGlobalHandler(function (error) {
    if (error) {
        // crashlytics().recordError(new Error(error));
    }
});

const App = () => {

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <SafeAreaProvider style={{ backgroundColor: Colors.darkBg }}>
            <StatusBar barStyle="light-content" backgroundColor='transparent' translucent={true} />
            <Provider store={store} >
                <RootStack />
            </Provider>
        </SafeAreaProvider>
    )
}

export default App;
