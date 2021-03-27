import React from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Image } from 'react-native'
import { Colors, Icons, hp, wp, nf, Fonts } from '../../constants/constants'
import { TRBLNotchedCornerView } from './index'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

export const HistoryCardsNotched = ({ item, navigation }) => {
    return (
        <ImageBackground
            source={item.isSelected ? Icons.green_bg_view : Icons.red_bg_view}
            resizeMode='stretch'
            style={styles.profileHistoryContainer}
            imageStyle={styles.imageTV}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.text2}>Victory</Text>
                    <Text style={[styles.text3, { marginVertical: hp(0.5) }]}>Overwatch</Text>
                    <Text style={styles.text4}>Date</Text>

                </View>
                <View style={{ alignItems: 'flex-end', }}>
                    <Text style={styles.text5}>Prize | $100</Text>
                    <Text style={{ ...styles.text5, fontSize: nf(16), marginVertical: hp(1.5) }}>Entry | $50</Text>
                    <View style={{ ...styles.blurOval, marginTop: hp(1) }}>
                        <Text style={{ ...styles.text5, fontSize: nf(13) }}>
                            PS4
                    </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export const TeamsCardsNotched = ({ item, navigation, onPress, disabled = true }) => {
    return (
        <ImageBackground
            source={Icons.violet_bg_view}
            resizeMode='stretch'
            style={styles.profileHistoryContainer}
            imageStyle={styles.imageTV}>
            <TouchableOpacity disabled={disabled} onPress={onPress} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={[styles.text3, { marginVertical: hp(0.5) }]}>Night Watch</Text>
                        <Text style={styles.text2}>Number of Players: 6</Text>
                    </View>
                    <View style={styles.blurOval}>
                        <Text style={{ ...styles.text5, fontSize: nf(13) }}>
                            Overwatch
                    </Text>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.text5}>Wins | 5</Text>
                        <Text style={{ ...styles.text5, marginTop: hp(1), fontSize: nf(16), }}>Losses | 2</Text>
                    </View>
                    <View style={styles.blurOval}>
                        <Text style={{ ...styles.text5, fontSize: nf(13) }}>
                            PS4
                    </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export const GamesToCreateTeamForNotched = ({ item, onPress, source = Icons.console }) => (
    <TRBLNotchedCornerView style={styles.gameListContainer}
        onPress={onPress} >
        <View style={{ width: wp(50), marginTop: hp(2) }}>
            <Text style={{ color: "#fff", fontSize: nf(16), fontFamily: Fonts.regular }}>{item.name}</Text>
            <Text style={{ color: "#fff", fontSize: nf(14), fontFamily: Fonts.regular, marginTop: hp(2), opacity: 0.5 }}>Max Team Size: {item.teamSize}</Text>
        </View>
        <Image style={styles.gameImg} source={source} />
    </TRBLNotchedCornerView>
)

export const AddAnotherGameCardBlack = ({ navigation, onPress }) => (

    <View style={{ alignSelf: 'center', height: hp(40), marginVertical: hp(2) }}>
        <View style={styles.footerBottomView}>
            <Text style={styles.text1}>Want to play another game?</Text>
            <TouchableOpacity onPress={() => onPress(true)}>
                <Text style={[styles.textRed, { marginTop: hp(1.5) }]}>ADD GAME</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({
    imageTV: {
        width: wp(90),
    },
    profileHistoryContainer: {
        width: wp(90),
        paddingVertical: hp(2),
        paddingHorizontal: wp(5),
        margin: 10,
    },
    text2: {
        color: '#FFFFFF80',
        fontSize: nf(14),
        fontFamily: Fonts.regular,
    },
    text3: {
        color: Colors.white,
        fontSize: nf(21),
        fontFamily: Fonts.bold,
    },
    text4: {
        color: '#FFFFFF80',
        fontSize: nf(14),
        fontFamily: Fonts.regular,
    },
    gameImg: { height: hp(15), width: wp(35), justifyContent: 'flex-end' },
    text5: {
        color: Colors.white,
        fontSize: nf(19),
        fontFamily: Fonts.regular,
    },
    blurOval: { paddingHorizontal: wp(2), paddingVertical: hp(0.2), backgroundColor: '#FFFFFF50', borderRadius: wp(5), marginTop: hp(3) },
    textRed: {
        color: Colors.textRed,
        fontSize: nf(16),
        fontFamily: Fonts.bold,
    },
    footerBottomView: {
        justifyContent: 'center', alignItems: 'center', height: hp(18), width: wp(90), borderRadius: wp(3), backgroundColor: Colors.darkBlack
    },
    text1: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
    },
    gameListContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: hp(15),
        width: wp(90),
        backgroundColor: Colors.secondaryDark,
        alignSelf: "center",
    },
})
