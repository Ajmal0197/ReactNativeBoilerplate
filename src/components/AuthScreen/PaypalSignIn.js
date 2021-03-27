import React, { useState, useCallback } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, BackHandler } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import { RedGradientView } from '../common'
import { CustomButton2 } from '../common'
import { useIsFocused, useFocusEffect } from '@react-navigation/native';

const PaypalSignIn = ({ navigation }) => {

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener('hardwareBackPress', goBackFunc);
            return () =>
                BackHandler.removeEventListener('hardwareBackPress', goBackFunc);
        }, [goBackFunc])
    );

    const goBackFunc = () => {
        navigation.navigate('SelectGamesScreen')
        return true
    }

    return (
        <RedGradientView>
            <Image style={styles.step2} source={Icons.step_three} />

            <Text style={styles.headerText}>Winning Earnings</Text>
            <Text style={styles.descText}>
                And one last step to make sure that you can participate in matches and also reward you the prize money that you earn.
            {'\n'}{'\n'}{'\n'}
            At this time, we are only accepting Paypal accounts to payout winnings. Login to your Paypal  account or create one below.
            </Text>
            <View style={styles.bottomView} >
                <CustomButton2
                    onPress={() => navigation.navigate('PaypalSuccess')}
                    title={'SIGN IN WITH'}
                    image={Icons.twitch_small}
                />
                <TouchableOpacity onPress={() => navigation.navigate('SelectGamesScreen')} style={{ marginTop: hp(5) }}>
                    <Text style={styles.text}>Need a Paypal account? <Text style={{ fontFamily: Fonts.bold }}>Create one.</Text></Text>
                </TouchableOpacity>
            </View>

        </RedGradientView>
    )
}

export default PaypalSignIn

const styles = StyleSheet.create({
    headerText: {
        color: Colors.white,
        fontSize: nf(27),
        fontFamily: Fonts.bold,
        textAlign: 'center',
        width: wp(85),
        alignSelf: 'center',

    },
    descText: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
        alignSelf: 'center',
        textAlign: 'center',
        width: wp(90),
        marginTop: hp(3)
    },
    text: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
    },
    step2: { alignSelf: 'center', marginTop: -hp(4) },
    bottomView: { alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: hp(10) }
})
