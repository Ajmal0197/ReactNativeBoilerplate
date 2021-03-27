import React from 'react'
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Colors, wp, hp } from '../../constants/constants';

export default function SquareCard({ isSelected, children, onPress, imageSource, imageStyle }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
                colors={isSelected ? Colors.redGradient : [Colors.secondaryDark, Colors.secondaryDark]}
                style={styles.cardContainer}>
                <View style={styles.cutOffTopLeft} />
                <View style={styles.cutOffBottomRight} />
                <Image resizeMode='center' source={imageSource} style={[{ width: wp(30), height: hp(15) }, imageStyle]} />
                {children}
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: wp(40),
        height: hp(20),
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    cutOffTopLeft: {
        position: "absolute",
        left: 0,
        top: 0,
        borderRightWidth: 20,
        borderTopWidth: 20,
        borderTopColor: "#000",
        borderRightColor: "transparent",
    },
    cutOffBottomRight: {
        position: "absolute",
        right: 0,
        bottom: 0,
        borderLeftWidth: 20,
        borderBottomWidth: 20,
        borderBottomColor: "#000",
        borderLeftColor: "transparent",
    },
})
