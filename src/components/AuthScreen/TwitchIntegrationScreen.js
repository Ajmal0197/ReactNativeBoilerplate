import React, { useState } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import { RedGradientView } from '../common'
import { CustomButton2 } from '../common'
import { tryDeepLinking } from '../common/InAppBrowserOpen'

const TwitchIntegrationScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const twitchSignInAction = () => {
        const isSignedIn = tryDeepLinking(dispatch, true).then(() => {
            if (isSignedIn) navigation.navigate('TwitchSuccess')
        });
    }

    return (
        <RedGradientView>
            <Image style={{ alignSelf: 'center', marginBottom: hp(5) }} source={Icons.step_one} />

            <Text style={styles.headerText}>Twitch Integration</Text>
            <Text style={styles.descText}>
                First, you’ll need to connect your Twitch account since after each match is complete, a Game Master (GM) will review the match by watching the recorded Twitch stream.
                {'\n'}{'\n'}{'\n'}
                This helps us prevent any kind of cheating, and is an additional layer of verification as to which players were present during the full duration of the game.</Text>


            <View style={styles.bottomView} >
                <CustomButton2
                    onPress={() => twitchSignInAction()}
                    title={'SIGN IN WITH'}
                    image={Icons.twitch_small} />
                <TouchableOpacity onPress={() => twitchSignInAction()} style={{ marginTop: hp(5) }}>
                    <Text style={styles.text}>Need a Twitch account? <Text style={{ fontFamily: Fonts.bold }}>Create one.</Text></Text>
                </TouchableOpacity>
            </View>

        </RedGradientView>
    )
}

export default TwitchIntegrationScreen

const styles = StyleSheet.create({
    headerText: {
        color: Colors.white,
        fontSize: nf(27),
        fontFamily: Fonts.bold,
        textAlign: 'center',
        width: wp(85),
        alignSelf: 'center',

    },
    descText: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
        alignSelf: 'center',
        textAlign: 'center',
        width: wp(90),
        marginTop: hp(3)
    },
    text: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
    },
    bottomView: { alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: hp(10) }
})
