import React, { useState } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import { RedGradientView } from '../common'
import { CustomButton1 } from '../common'
import * as Animatable from 'react-native-animatable';

const PaypalSuccess = ({ navigation }) => {

    return (
        <RedGradientView>
            <Image resizeMode='contain' style={{ alignSelf: 'center', marginTop: hp(5), height: wp(11) }} source={Icons.twitch_white} />

            <Text style={styles.descText}>
                was successfully connected and created!
            </Text>

            <Animatable.Image
                animation="zoomIn"
                resizeMode='contain'
                style={{ alignSelf: 'center', height: wp(50), width: wp(50) }}
                source={Icons.check_confirmation} />

            <View style={styles.bottomView} >
                <CustomButton1
                    onPress={() => navigation.navigate('ConfirmInformation')}
                    title={'NEXT'} />
            </View>

        </RedGradientView>
    )
}

export default PaypalSuccess

const styles = StyleSheet.create({
    descText: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
        alignSelf: 'center',
        textAlign: 'center',
        width: wp(60),
        marginTop: hp(3),
        marginBottom: hp(10)
    },
    bottomView: { alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: hp(10) }
})
