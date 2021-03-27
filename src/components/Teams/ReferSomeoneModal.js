import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import Modal from 'react-native-modal';
import { TextInputBlackkWhite } from '../common/TextInputBlackWhite';
import { CustomButton1, CustomButton3 } from '../common';
import { verifyEmail } from '../../util/reusableFunctions';
import * as Animatable from 'react-native-animatable';

export default function ReferSomeoneModal({ isVisible, showModal }) {

    const [emailText, onChangeText] = useState("");
    const [isInviteSent, setinviteSent] = useState(false);

    const resetModalData = () => {
        onChangeText("");
        setinviteSent(false);
    }

    return (
        <Modal onShow={resetModalData} isVisible={isVisible} style={styles.modalContainer} onBackButtonPress={() => showModal(false)} statusBarTranslucent={true}>
            {!isInviteSent ?
                <>
                    <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(27), fontFamily: Fonts.bold, marginTop: hp(5) }}>Invite Someone</Text>
                    <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(16), fontFamily: Fonts.regular, margin: hp(3) }}>
                        Is there someone you wanted to participate in En Garde with? Bring them on board and earn a free $5 game when they complete their first game!
                    </Text>
                    <Text style={{ textAlign: 'left', color: "#fff", fontSize: nf(16), fontFamily: Fonts.regular, margin: hp(3) }}>What is your referral’s email address?</Text>
                    <TextInputBlackkWhite style={{ backgroundColor: "#000" }} onChangeText={(email) => onChangeText(email)} />
                    <View style={styles.bottomButtonContainer}>
                        <CustomButton3 onPress={() => setinviteSent(true)} style={{ alignSelf: "center", width: wp(70) }} title="SEND INVITE" disabled={!verifyEmail(emailText)} />
                        <CustomButton1 onPress={() => showModal(false)} style={{ alignSelf: "center", width: wp(70), marginTop: hp(3) }} title="CANCEL" />
                    </View>
                </>
                :
                <>
                    <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(27), fontFamily: Fonts.bold, marginTop: hp(5) }}>All Done!</Text>
                    <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(16), fontFamily: Fonts.regular, margin: hp(3) }}>
                        Thanks for referring someone to En Garde! They will receive an invitation email shortly.
                    </Text>
                    <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                        <Animatable.Image
                            animation="zoomIn"
                            source={Icons.check_confirmation} />
                    </View>
                    <View style={styles.bottomButtonContainer}>
                        <CustomButton3 onPress={() => showModal(false)} style={{ alignSelf: "center", width: wp(70) }} title="BACK TO HOME" />
                        <CustomButton1 onPress={() => setinviteSent(false)} style={{ alignSelf: "center", width: wp(70), marginTop: hp(3) }} title="INVITE ANOTHER USER" />
                    </View>
                </>
            }
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        paddingTop: hp(2),
        backgroundColor: "#000",
        opacity: 0.9,
        justifyContent: 'flex-start',
        margin: 0,
    },
    bottomButtonContainer: {
        position: 'absolute',
        bottom: hp(7),
        alignSelf: 'center'
    }

});