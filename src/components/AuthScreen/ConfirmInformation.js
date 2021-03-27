import React, { useState } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Colors, Fonts, wp, hp, nf } from '../../constants/constants'
import { RedGradientView } from '../common'
import { CustomButton1 } from '../common'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { types } from '../../store/ActionTypes'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tryDeepLinking } from '../common/InAppBrowserOpen';

const ConfirmInformation = ({ navigation }) => {

    const dispatch = useDispatch();
    const { selectedGames, userDataUrl } = useSelector(state => ({
        selectedGames: state.authReducer.selectedGames,
        userDataUrl: state.authReducer.userDataUrl,
    }), shallowEqual);

    const onPressCompleteBtn = async () => {
        if (userDataUrl) {
            await AsyncStorage.setItem('user_data', userDataUrl)
            dispatch({
                type: types.RENDER_AGAIN_STACK_NAV
            })
        }
    }

    const onPressEditTwitch = async () => {
        tryDeepLinking(dispatch, true);
    }


    return (
        <RedGradientView>

            <Text style={styles.headerText}>
                Please confirm the information below:
            </Text>

            <ScrollView contentContainerStyle={{ paddingStart: wp(5) }}>

                <View style={{ marginTop: hp(4) }}>
                    <Text style={styles.descText1}>Twitch Account</Text>
                    <Text style={styles.descText2}>
                        {userDataUrl ? 'Connected' : 'Not Connected'}
                    </Text>
                    <TouchableOpacity onPress={onPressEditTwitch}>
                        <Text style={styles.descText3}>Edit Twitch</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: hp(4) }}>
                    <Text style={styles.descText1}>Payment Method</Text>
                    <Text style={styles.descText2}>
                        {true ? 'Connected' : 'Not Connected'}
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.descText3}>Edit URL</Text>
                    </TouchableOpacity>
                </View>

                {selectedGames.map((v, i) =>
                    <View key={i} style={{ marginTop: hp(4) }}>
                        <Text style={styles.descText1}>{v.idType}</Text>
                        <Text style={styles.descText2}>{v.enteredName}</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EnterYourIdName', { gameIndex: i, fromEditScreen: true })}>
                            <Text style={styles.descText3}>Edit {v.idType}</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <View style={{ marginTop: hp(20) }} />
            </ScrollView>

            <View style={styles.bottomView} >
                <CustomButton1
                    onPress={onPressCompleteBtn}
                    title={'COMPLETE'} />
            </View>

        </RedGradientView>
    )
}

export default ConfirmInformation

const styles = StyleSheet.create({
    headerText: {
        color: Colors.white,
        fontSize: nf(27),
        fontFamily: Fonts.bold,
        textAlign: 'center',
        width: wp(85),
        alignSelf: 'center',

    },
    descText1: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.bold,
    },
    descText2: {
        color: Colors.white,
        fontSize: nf(24),
        fontFamily: Fonts.regular,
        marginTop: hp(1.2),
        marginBottom: hp(1),
    },
    descText3: {
        color: Colors.white,
        fontSize: nf(14),
        fontFamily: Fonts.bold,
    },
    bottomView: { position: 'absolute', bottom: hp(10), alignSelf: 'center' }
})
