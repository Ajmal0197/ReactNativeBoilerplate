import React from 'react'
import { StyleSheet, Image, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Icons, hp } from '../../constants/constants'

const RedGradientView = (props) => {
    return (
        <LinearGradient
            // start={{ x: 0.2, y: 0.5 }} end={{ x: 1, y: 0.8 }}
            // locations={[0, 1]}
            // colors={Colors.redGradient}
            start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
            colors={Colors.redGradient}
            style={{ flex: 1, }}>
            <Image resizeMode='contain' style={{ height: hp(20), width: '100%' }} source={Icons.bg_accent_red} />
            <View style={{ flex: 1, marginTop: -hp(12) }}>
                {props.children}
            </View>
        </LinearGradient>
    )
}

export default RedGradientView

const styles = StyleSheet.create({

})
