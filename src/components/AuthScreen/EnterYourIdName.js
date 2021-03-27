import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Image, Text, TouchableOpacity, View, BackHandler } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import { RedGradientView } from '../common'
import { CustomButton1, TextInputPinkWhite } from '../common'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { types } from '../../store/ActionTypes'
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const EnterYourIdName = ({ navigation, route }) => {

    const { gameIndex, fromEditScreen } = route.params;

    const dispatch = useDispatch();
    const { selectedGames } = useSelector(state => ({
        selectedGames: state.authReducer.selectedGames,
    }), shallowEqual);

    const [currentIndex, setcurrentIndex] = useState(0)
    const [currentGameObj, setcurrentGameObj] = useState({})
    const [enteredNameS, setenteredNameS] = useState('')
    const [showBtn, setshowBtn] = useState(true)

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener('hardwareBackPress', () => true)
            return () =>
                BackHandler.removeEventListener('hardwareBackPress', () => true)
        }, [])
    );

    useFocusEffect(
        useCallback(() => {
            if (fromEditScreen) {
                setcurrentIndex(gameIndex)
            }
            setcurrentGameObj(selectedGames[currentIndex])
            setenteredNameS(selectedGames[currentIndex].enteredName)
            console.log('currentGameObj', currentGameObj, gameIndex, fromEditScreen)
        }, [currentIndex, gameIndex, fromEditScreen])
    );

    const onPressNext = () => {
        //if not last page
        if (currentIndex !== selectedGames.length - 1) {
            dispatch({
                type: types.UPDATE_SELECTED_GAME_USERNAME,
                payload: { currentIndex, enteredNameS }
            })
            setcurrentIndex(currentIndex => currentIndex + 1)
            setenteredNameS('')
        } else {
            dispatch({
                type: types.UPDATE_SELECTED_GAME_USERNAME,
                payload: { currentIndex, enteredNameS }
            })
            navigation.navigate('PaypalSignIn')
        }
    }

    const onPressGoBack = () => {
        if (currentIndex == 0) {
            navigation.goBack()
        } else {
            setcurrentIndex(currentIndex => currentIndex - 1)
        }
    }

    const onPressNextEditScreen = (save) => {
        if (save) {
            dispatch({
                type: types.UPDATE_SELECTED_GAME_USERNAME,
                payload: { currentIndex, enteredNameS }
            })
        }
        navigation.navigate('ConfirmInformation')
    }

    const onChangeTextFunc = (text) => {
        setenteredNameS(text)
    }

    return (
        <RedGradientView>
            <Image style={styles.step2} source={Icons.step_two} />

            <KeyboardAwareScrollView
                onKeyboardDidShow={() => setshowBtn(false)} onKeyboardDidHide={() => setshowBtn(true)}
                scrollEnabled={false} >
                <Text style={styles.dtext}>{currentGameObj.name}</Text>
                <Text style={styles.headerText}>What is your{'\n' + currentGameObj.idType}?</Text>

                <TextInputPinkWhite
                    text={enteredNameS}
                    onChangeText={(text) => onChangeTextFunc(text)}
                    placeholder={`Enter your ${currentGameObj.idType}`}
                />
            </KeyboardAwareScrollView >

            {showBtn ?
                <View style={styles.bottomView} >
                    <CustomButton1
                        onPress={!fromEditScreen ? onPressNext : () => onPressNextEditScreen(true)}
                        disabled={!enteredNameS}
                        style={{ alignSelf: 'center' }}
                        title={'NEXT'} />
                    <TouchableOpacity
                        onPress={!fromEditScreen ? onPressGoBack : () => onPressNextEditScreen(false)}
                        style={{ marginTop: hp(5) }}>
                        <Text style={styles.text}>GO BACK</Text>
                    </TouchableOpacity>
                </View> : null}

        </RedGradientView>

    )
}

export default EnterYourIdName

const styles = StyleSheet.create({
    headerText: {
        color: Colors.white,
        fontSize: nf(27),
        fontFamily: Fonts.bold,
        textAlign: 'center',
        width: wp(80),
        alignSelf: 'center',
        marginBottom: hp(1)
    },
    dtext: {
        color: Colors.white,
        fontSize: nf(14),
        alignSelf: 'center',
        marginVertical: hp(2),
        fontFamily: Fonts.regular,
    },
    text: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.bold,
    },
    bottomView: { alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: hp(10) },
    step2: { alignSelf: 'center', marginTop: -hp(4), marginStart: -wp(6) },
})
