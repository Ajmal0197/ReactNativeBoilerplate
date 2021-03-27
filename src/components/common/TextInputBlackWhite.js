import React, { useState, memo } from 'react'
import { StyleSheet, Image, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, TextInput, View } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'

const TextInputBlackkWhiteComp = ({ text, onChangeText, placeholder, containerStyle }) => {

    const [changeTV, setchangeTV] = useState(false)
    // const [text, setText] = useState('')

    const onChangeTextFunc = (text) => {
        // setText(text)
        onChangeText(text)
    }

    return (
        !changeTV && !text ?
            <TouchableOpacity activeOpacity={1} onPress={() => setchangeTV(true)}>
                <ImageBackground
                    source={Icons.Black_tv}
                    resizeMode='contain'
                    style={styles.ib}>
                    <Text style={[styles.whiteTVText, containerStyle]}>{placeholder}</Text>
                </ImageBackground>
            </TouchableOpacity> :
            <ImageBackground
                source={Icons.white_tv}
                resizeMode='contain'
                style={styles.ib}>
                <TextInput
                    value={text}
                    autoFocus={true}
                    keyboardAppearance='dark'
                    placeholderTextColor={Colors.redTest}
                    style={styles.pinkTVText}
                    placeholder={placeholder}
                    onChangeText={(text) => onChangeTextFunc(text)}
                />
            </ImageBackground>
    )
}

export const TextInputBlackkWhite = memo(TextInputBlackkWhiteComp)

const styles = StyleSheet.create({
    ib: { justifyContent: 'center', height: hp(10), width: wp(85), alignSelf: 'center' },
    whiteTVText: { color: Colors.white, paddingStart: wp(5), fontSize: nf(16), fontFamily: Fonts.lightItalic, },
    pinkTVText: { height: hp(10), width: wp(82), paddingStart: wp(5), fontFamily: Fonts.regular, fontSize: nf(16), color: Colors.redTest }
})
