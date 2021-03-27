import React, { useState } from 'react'
import { StyleSheet, Image, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import * as Animatable from 'react-native-animatable';

const SelectGameNotchedView = ({ name, image, isSelected, shouldAnimate = true }) => {
    return (
        <Animatable.View animation={shouldAnimate ? "zoomInLeft" : 'fadeInUp'} easing={"ease-out"}>
            <ImageBackground
                source={!isSelected ? Icons.pink_tv : image}
                resizeMode='contain'
                style={styles.ib}>
                <Text style={[styles.descText, {
                    color: !isSelected ? Colors.white : Colors.redTest,
                }]} >{name}</Text>
            </ImageBackground>
        </Animatable.View>
    )
}

export default SelectGameNotchedView

const styles = StyleSheet.create({
    descText: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
        marginStart: wp(5)
    },
    ib: { justifyContent: 'center', height: hp(10), width: wp(85), alignSelf: 'center' }
})
