import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors, hp, Icons, wp } from '../../constants/constants'

export const TLBRNotchedCornerView = ({ icon = null, text = '', onPress, children, style, cutOffTopLeftStyle, cutOffBottomRightStyle }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.buttonStyle, style]}
        >
            <View style={[styles.cutOffTopLeft, cutOffTopLeftStyle]} />
            <View style={[styles.cutOffBottomRight, cutOffBottomRightStyle]} />
            { children ??
                <>
                    <Image source={icon} />
                    <Text style={styles.textStyle}>{text}</Text>
                </>
            }
        </TouchableOpacity>
    )
}
export const TRBLNotchedCornerView = ({ icon = null, text = '', onPress, children, style, cutOffTopRightStyle, cutOffBottomLeftStyle }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.buttonStyle, style]}
        >
            <View style={[styles.cutOffTopRight, cutOffTopRightStyle]} />
            <View style={[styles.cutOffBottomLeft, cutOffBottomLeftStyle]} />
            { children ??
                <>
                    <Image source={icon} />
                    <Text style={styles.textStyle}>{text}</Text>
                </>
            }
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: Colors.secondaryDark,
        alignItems: "center",
        justifyContent: "center",
        height: hp(15),
        width: wp(40),
        margin: 10
    },
    textStyle: {
        color: "#FFFFFF",
        marginTop: hp(1)
    },
    cutOffTopLeft: {
        position: "absolute",
        left: 0,
        top: 0,
        borderRightWidth: 10,
        borderTopWidth: 10,
        borderTopColor: "#000",
        borderRightColor: "transparent",
    },
    cutOffBottomRight: {
        position: "absolute",
        right: 0,
        bottom: 0,
        borderLeftWidth: 10,
        borderBottomWidth: 10,
        borderBottomColor: "#000",
        borderLeftColor: "transparent",
    },
    cutOffTopRight: {
        position: "absolute",
        right: 0,
        top: 0,
        borderLeftWidth: 10,
        borderTopWidth: 10,
        borderTopColor: "#000",
        borderLeftColor: "transparent",
    },
    cutOffBottomLeft: {
        position: "absolute",
        left: 0,
        bottom: 0,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        borderBottomColor: "#000",
        borderRightColor: "transparent",
    },
});