import React, { memo } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants';

//normal button
const CustomButtonNormal = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress, isModal, disabled, hasImage, colorType, loading = false, imageStyle, image } = props;

    return (

        <TouchableOpacity disabled={disabled} onPress={onPress} style={{ ...styles.button, ...style, opacity: disabled ? 0.3 : 1 }}>
            {loading ?
                <ActivityIndicator
                    style={{ alignSelf: 'center' }}
                    size="small"
                    color={Colors.textRed} /> :
                <>
                    <Image style={imageStyle} source={image} />
                    <Text style={[styles.coloredText, textStyle]}>{props.title}</Text>
                </>
            }
        </TouchableOpacity>

    );
};
export const CustomButton1 = memo(CustomButtonNormal)

//button with right icon
const CustomButtonWithRightIcon = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress, image, disabled, loading = false, imageStyle } = props;

    return (

        <TouchableOpacity disabled={disabled} onPress={onPress} style={{ ...styles.button, ...style, opacity: disabled ? 0.3 : 1 }}>
            {loading ?
                <ActivityIndicator
                    style={{ alignSelf: 'center' }}
                    size="small"
                    color={Colors.textRed} /> :
                <>
                    <Text style={[styles.coloredText, textStyle]}>{props.title}</Text>
                    <Image resizeMode='contain' style={{ height: wp(5), width: wp(20), ...imageStyle }} source={image} />
                </>
            }
        </TouchableOpacity>

    );
};
export const CustomButton2 = memo(CustomButtonWithRightIcon)

const CustomGradientButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress, disabled, loading = false, colorType, imageStyle, image } = props;

    return (

        <TouchableOpacity disabled={disabled} onPress={onPress} style={{ ...styles.button, ...style, opacity: disabled ? 0.3 : 1 }}>
            <LinearGradient colors={colorType || Colors.redGradient} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={{ ...styles.button, ...style, opacity: disabled ? 0.5 : 1 }}>
                {loading ?
                    <ActivityIndicator style={{ alignSelf: 'center' }} size="small" color="#0000ff" /> :
                    <>
                        <Image style={imageStyle} source={image} />
                        <Text style={[styles.text, { color: Colors.white }, textStyle]}>{props.title}</Text>
                    </>}
            </LinearGradient>
        </TouchableOpacity >

    );
};
export const CustomButton3 = memo(CustomGradientButton)

//button with left icon
const CustomButtonWithLeftIcon = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress, image, disabled, loading = false, imageStyle } = props;

    return (

        <TouchableOpacity disabled={disabled} onPress={onPress} style={{ ...styles.button, ...style, opacity: disabled ? 0.3 : 1 }}>
            {loading ?
                <ActivityIndicator
                    style={{ alignSelf: 'center' }}
                    size="small"
                    color={Colors.textRed} /> :
                <>
                    <Image resizeMode='contain' style={{ height: wp(5), width: wp(20), ...imageStyle }} source={image} />
                    <Text style={[styles.coloredText, textStyle]}>{props.title}</Text>
                </>
            }
        </TouchableOpacity>

    );
};
export const CustomButton4 = memo(CustomButtonWithLeftIcon)


//button with icon
export const NotificationButtonTab = (props) => {
    const { style = {}, onPress, count = 0, disabled = false, } = props;

    return (

        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={{ ...styles.notificationView, ...styles.style }}>
            <Text style={styles.text2}>Notifications</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {count == 0 ? null :
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 2 }}
                        locations={[0, 0.5]}
                        colors={Colors.redGradient}
                        style={styles.newNotif}>
                        <Text style={styles.text2}>{count} NEW</Text>
                    </LinearGradient>}
                <Image source={Icons.next_red} />
            </View>
        </TouchableOpacity>

    );
};
export const NotificationButton = memo(NotificationButtonTab)


const styles = StyleSheet.create({
    button: {
        borderRadius: wp(10),
        height: hp(6),
        width: wp(85),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        //box shadow
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    coloredText: {
        fontSize: nf(16),
        fontFamily: Fonts.bold,
        color: Colors.redTest,
    },
    text: {
        fontSize: nf(16),
        fontFamily: Fonts.bold,
        color: Colors.textRed
    },
    notificationView: {
        height: hp(8), width: wp(90),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: hp(1),
        borderRadius: wp(2),
        backgroundColor: Colors.cardGreyBg,
        paddingHorizontal: wp(5)

    },
    text2: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
    },
    newNotif: {
        marginEnd: wp(5),
        padding: wp(1.5), borderRadius: wp(2.5),
    }
})

