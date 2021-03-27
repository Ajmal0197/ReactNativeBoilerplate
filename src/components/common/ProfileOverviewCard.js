import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import LinearGradient from 'react-native-linear-gradient';

const ProfileOverviewCard = ({ item, index, othersProfile = false, navigation }) => {
    return (
        <View style={styles.riContainer}>
            <LinearGradient
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 0.5, y: 2 }}
                locations={[0, 0.5]}
                colors={Colors.greenStripeGradient}
                style={styles.gradientStyle} />
            <View style={styles.secondView}>
                <Text style={[styles.text1, { fontFamily: Fonts.bold }]}>Fortnite</Text>
                {othersProfile || <Text style={styles.text1}>Total Won: $122.32</Text>}
                <Text style={[styles.text1, { fontFamily: Fonts.bold, marginTop: hp(1.5) }]}>EPIC Name</Text>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={styles.text1}>shakethatmuni_epic</Text>
                    {othersProfile || <TouchableOpacity>
                        <Text style={styles.textRed}>Edit</Text>
                    </TouchableOpacity>}
                </View>
                <View style={styles.thirdView}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ ...styles.textRed, color: Colors.grey }}>WINS</Text>
                        <Text style={styles.boldCountText}>13</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ ...styles.textRed, color: Colors.grey }}>LOSE</Text>
                        <Text style={styles.boldCountText}>5</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ ...styles.textRed, color: Colors.grey }}>DRAW</Text>
                        <Text style={styles.boldCountText}>3</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileOverviewCard

const styles = StyleSheet.create({
    text1: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
    },
    textRed: {
        color: Colors.textRed,
        fontSize: nf(16),
        fontFamily: Fonts.bold,
    },
    boldCountText: {
        color: Colors.white,
        fontSize: nf(34),
        fontFamily: Fonts.bold,
    },
    riContainer: { marginTop: hp(2), borderRadius: wp(3), width: wp(90), flexDirection: 'row', height: hp(25), backgroundColor: Colors.secondaryDark },
    gradientStyle: { borderTopLeftRadius: wp(3), borderBottomLeftRadius: wp(3), height: hp(25), width: wp(2) },
    secondView: { flex: 1, padding: wp(4), justifyContent: 'space-between' },
    thirdView: { marginTop: hp(1.5), flexDirection: 'row', width: wp(60), justifyContent: 'space-between' },
})
