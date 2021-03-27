import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import Swiper from 'react-native-swiper'
import { useDispatch } from 'react-redux';
import { CustomButton1, inAppBrowserStyle } from '../common'
import { tryDeepLinking } from '../common/InAppBrowserOpen';

const IntroScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const createAccountAction = () => {
        navigation.navigate('ConfirmEligibility');
    }
    const twitchAuthFunc = () => {
        tryDeepLinking(dispatch, false);
    }

    return (
        <View style={{ flex: 1, backgroundColor: Colors.darkBg }}>
            <Image source={Icons.bg_accent} resizeMode='contain' style={{ height: hp(20), width: '100%', position: 'absolute', zIndex: 1 }} />
            <Swiper
                style={styles.wrapper}
                dot={<Image style={{ marginHorizontal: wp(2) }} source={Icons.slider_light} />}
                activeDot={<Image style={{ marginHorizontal: wp(2) }} source={Icons.slider_colored} />}
            >
                <View style={styles.slideI}>
                    <Image resizeMode='contain' style={styles.imgStl} source={Icons.console} />
                    <Text style={styles.headerText}>Enjoy playing Overwatch?</Text>
                    <Text style={styles.contentText}>Compete as a team or a single player against others and win prize money per match starting at $10!</Text>
                </View>
                <View style={styles.slideI}>
                    <Image resizeMode='contain' style={styles.imgStl} source={Icons.tournaments} />
                    <Text style={styles.headerText}>Tournaments are too much work.</Text>
                    <Text style={styles.contentText}>And they require you to play quite a number of matches before you can win any kind of money. At En Garde, you win money PER game!</Text>
                </View>
                <View style={styles.slideI}>
                    <Image resizeMode='contain' style={styles.imgStl} source={Icons.watch} />
                    <Text style={styles.headerText}>Get started in less than 3 minutes.</Text>
                    <Text style={styles.contentText}>All you need is a Twitch and a credit card and then you’re all set to begin earning!</Text>
                </View>
            </Swiper>

            <View style={{ flex: 0.3, alignItems: 'center' }}>
                <CustomButton1
                    onPress={createAccountAction}
                    title={'CREATE ACCOUNT'} />
                <TouchableOpacity onPress={twitchAuthFunc} style={{ marginTop: hp(5) }}>
                    <Text style={styles.text}>LOG IN</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default IntroScreen

const styles = StyleSheet.create({
    wrapper: { marginTop: hp(16) },
    slideI: {
        alignItems: 'center',
        backgroundColor: Colors.darkBg,
    },
    text: {
        color: Colors.textRed,
        fontSize: nf(16),
        fontFamily: Fonts.bold,
    },
    headerText: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.bold,
        textAlign: 'center',
        width: wp(85),
        marginTop: hp(6)
    },
    contentText: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
        textAlign: 'center',
        width: wp(85),
        marginTop: hp(2)
    },
    imgStl: { height: hp(22), width: wp(80) },

})