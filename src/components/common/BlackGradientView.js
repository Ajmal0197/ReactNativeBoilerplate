import React from 'react'
import { TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback, View, StatusBar } from 'react-native'
import { Colors, Icons, hp, wp } from '../../constants/constants'
import { useNavigation } from '@react-navigation/native';

const BlackGradientView = ({ children, showBack = false }) => {

    const navigation = useNavigation();

    return (
        <View
            style={{ flex: 1, backgroundColor: Colors.darkBg }}>
            <Image source={Icons.bg_accent} resizeMode='contain' style={{ height: hp(20), width: '100%' }} />
            <View style={{ flex: 1, marginTop: -hp(15) }}>
                {!showBack ? null :
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: hp(3), marginStart: wp(5) }}>
                        <Image resizeMode='contain' style={{ width: wp(12) }} source={Icons.back_arrow_gradient} />
                    </TouchableOpacity>}
                {children}
            </View>
        </View>
    )
}

export default BlackGradientView


