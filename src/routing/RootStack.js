import React, { useEffect, useState } from 'react';
import { View, Platform, Dimensions, ActivityIndicator, TouchableOpacity, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { MainTeamsScreen, TeamDetailsScreen } from '../components/Teams'
import { MainJoinScreen } from '../components/Join'
import { MainProfileScreen } from '../components/Profile'
import { FooterScreen } from '../components/Dashboard'
import { IntroScreen } from '../components/IntroScreen'
import { ConfirmEligibility, TwitchIntegrationScreen, TwitchSuccess, SelectGamesScreen, EnterYourIdName, PaypalSignIn, PaypalSuccess, ConfirmInformation } from '../components/AuthScreen'
import { NotificationScreen, SettingsScreen, MainProfileScreenOthers } from '../components/Profile'
import { StartScreen } from '../components/IntroScreen'
import { types } from '../store/ActionTypes';

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

export default RootStack = () => {

    const { renderAgainStack, userDataUrl } = useSelector(state => ({
        renderAgainStack: state.globalReducer.renderAgainStack,
        userDataUrl: state.authReducer.userDataUrl,
    }), shallowEqual);
    const dispatch = useDispatch()

    const [screenType, setscreenType] = useState(0)
    const [startScreen, setstartScreen] = useState(true)

    const getData = async () => {
        let user_data = await AsyncStorage.getItem("user_data");
        console.log('user_data', user_data)
        if (user_data) {
            dispatch({
                type: types.UPDATE_USER_DATA,
                payload: user_data
            })
            setscreenType(1)
        } else {
            setscreenType(0)
        }
        setstartScreen(false)
    }

    useEffect(() => {
        setstartScreen(true)
        setTimeout(() => {
            getData();
        }, 2000);
    }, [renderAgainStack]);

    if (startScreen) {
        return (
            <StartScreen />
        );
    }

    return (
        <NavigationContainer ref={navigationRef}>
            {
                screenType == 1 ? (
                    <HomeStack.Navigator
                        screenOptions={{
                            gestureEnabled: false,
                            headerShown: false
                        }}
                        initialRouteName={FooterScreen}>
                        <HomeStack.Screen name="FooterScreen" component={FooterScreen} />
                        <HomeStack.Screen name="MainProfileScreen" component={MainProfileScreen} />
                        <HomeStack.Screen name="TeamDetailsScreen" component={TeamDetailsScreen} />
                        <HomeStack.Screen name="SettingsScreen" component={SettingsScreen} />
                        <HomeStack.Screen name="NotificationScreen" component={NotificationScreen} />
                        <HomeStack.Screen name="MainProfileScreenOthers" component={MainProfileScreenOthers} />

                    </HomeStack.Navigator>
                ) : (
                    <AuthStack.Navigator
                        screenOptions={{
                            gestureEnabled: false,
                            headerShown: false,
                        }}
                        initialRouteName={"IntroScreen"}>
                        <AuthStack.Screen name="IntroScreen" component={IntroScreen} />
                        <AuthStack.Screen name="ConfirmEligibility" component={ConfirmEligibility} />
                        <AuthStack.Screen name="TwitchIntegrationScreen" component={TwitchIntegrationScreen} />
                        <AuthStack.Screen name="TwitchSuccess" component={TwitchSuccess} />
                        <AuthStack.Screen name="SelectGamesScreen" component={SelectGamesScreen} />
                        <AuthStack.Screen
                            name="EnterYourIdName"
                            component={EnterYourIdName}
                        />
                        <AuthStack.Screen name="PaypalSignIn" component={PaypalSignIn} />
                        <AuthStack.Screen name="PaypalSuccess" component={PaypalSuccess} />
                        <AuthStack.Screen name="ConfirmInformation" component={ConfirmInformation} />
                    </AuthStack.Navigator>
                )
            }
        </NavigationContainer>
    )

}

