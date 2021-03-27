import React, { useState } from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import { RedGradientView } from '../common'
import { CustomButton1 } from '../common'

const ConfirmEligibility = ({ navigation }) => {

    const [cb1, setcb1] = useState(false)
    const [cb2, setcb2] = useState(false)

    return (
        <RedGradientView>

            <Text style={styles.headerText}>Confirm Eligibility</Text>
            <Text style={styles.descText}>Before we can get started, please check each of the boxes below to confirm that you meet the criteria to use En Garde.</Text>

            <View style={styles.cbView}>
                <TouchableOpacity onPress={() => setcb1(!cb1)}>
                    <Image resizeMode='contain' style={{ height: wp(6), width: wp(6) }} source={cb1 ? Icons.checked : Icons.uncheck} />
                </TouchableOpacity>
                <Text style={styles.cbText}>I am atleast 18 years of age or older.</Text>
            </View>
            <View style={styles.cbView}>
                <TouchableOpacity onPress={() => setcb2(!cb2)}>
                    <Image resizeMode='contain' style={{ height: wp(6), width: wp(6) }} source={cb2 ? Icons.checked : Icons.uncheck} />
                </TouchableOpacity>
                <Text style={styles.cbText}>I confirm that I do not live in one of following states: Arizona, Arkansas, Delaware, Louisiana, Maryland, Montana, South Carolina, South Dakota, and Tennessee.</Text>
            </View>

            <View style={styles.bottomView} >
                <CustomButton1
                    onPress={() => navigation.navigate('TwitchIntegrationScreen')}
                    disabled={!(cb1 && cb2)}
                    title={'GET STARTED'} />
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: hp(5) }}>
                    <Text style={styles.text}>GO BACK</Text>
                </TouchableOpacity>
            </View>

        </RedGradientView>
    )
}

export default ConfirmEligibility

const styles = StyleSheet.create({
    headerText: {
        color: Colors.white,
        fontSize: nf(27),
        fontFamily: Fonts.bold,
        textAlign: 'center',
        alignSelf: 'center',
        width: wp(85),
    },
    descText: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
        alignSelf: 'center',
        width: wp(90),
        marginTop: hp(3)
    },
    cbText: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
        alignSelf: 'center',
        width: wp(70),
        marginStart: wp(5)
    },
    cbView: { flexDirection: 'row', marginTop: hp(3), width: wp(90), alignSelf: 'center' },
    text: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.bold,
    },
    bottomView: { alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: hp(10) }
})
