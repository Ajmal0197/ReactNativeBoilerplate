import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import * as Animatable from 'react-native-animatable';

const StartScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.darkBg }}>
            <Image resizeMode='contain' style={{ height: hp(20), width: '100%' }} source={Icons.bg_accent} />
            <Animatable.View
                animation="zoomIn"
                style={{ alignItems: 'center', marginTop: hp(8) }}>
                <Image resizeMode='contain' style={{ height: wp(40), width: wp(40) }} source={Icons.en_garde_logo} />
                <Text style={{ color: Colors.white, fontSize: nf(16), fontFamily: Fonts.regular, marginTop: hp(6), marginBottom: hp(2) }}>WELCOME TO</Text>
                <Image source={Icons.logo_text_on_dark} />
                <Text style={{ color: Colors.white, fontSize: nf(15), fontFamily: Fonts.regular, marginTop: hp(2) }}>Esports officially made for Everyone.</Text>
            </Animatable.View>
        </View>
    )
}

export default StartScreen
