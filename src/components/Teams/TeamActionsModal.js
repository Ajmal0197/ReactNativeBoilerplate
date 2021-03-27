import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import { CustomButton1, CustomButton3 } from '../common';
import { Icons, Fonts, wp, hp, nf, Colors } from '../../constants/constants'
import { TextInputBlackkWhite } from '../common/TextInputBlackWhite';

export default function TeamActionsModal({ actionType, isVisible, showModal, actionItem, modalAction, teamPlayers }) {
    const [username, setUsername] = useState("");
    const [selectedTeamLeader, setTeamLeader] = useState(null);
    const teamListView = ({ item, index }) => {
        return (
            !item.isLeader ?
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(16), fontFamily: Fonts.regular }}>
                        {item.name}
                    </Text>
                    <TouchableOpacity onPress={() => setTeamLeader(index)}>
                        {selectedTeamLeader != index ?
                            <Text style={{ textAlign: 'center', color: Colors.redTest, fontSize: nf(16), fontFamily: Fonts.bold }}>Select</Text>
                            :
                            <Text style={{ color: "#EFE294", fontSize: nf(16), fontFamily: Fonts.regular }}>TEAM LEADER</Text>
                        }
                    </TouchableOpacity>
                </View>
                : null
        );
    };
    return (
        <Modal style={styles.modalContainer} isVisible={isVisible} onBackButtonPress={() => showModal(false)} statusBarTranslucent={true}>
            { actionType == "Remove" && !actionItem?.isLeader ?
                <>
                    <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(27), fontFamily: Fonts.bold, marginTop: hp(5) }}>Remove Player</Text>
                    <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(16), fontFamily: Fonts.regular, margin: hp(3) }}>
                        Are you sure you want to remove this player from your team?
                    </Text>
                    <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(27), fontFamily: Fonts.regular, marginTop: hp(20) }}>
                        {actionItem.name}
                    </Text>
                    <View style={styles.bottomButtonContainer}>
                        <CustomButton3 onPress={() => modalAction()} style={{ alignSelf: "center", width: wp(70) }} title="REMOVE PLAYER" />
                        <CustomButton1 style={{ alignSelf: "center", width: wp(70), marginTop: hp(3) }} title="CANCEL"
                            onPress={() => showModal(false)} />
                    </View>
                </> : null}
            {
                actionType == "Remove" && actionItem?.isLeader ?
                    <>
                        <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(27), fontFamily: Fonts.bold, marginTop: hp(5) }}>New Team Leader</Text>
                        <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(16), fontFamily: Fonts.regular, margin: hp(3), marginBottom: hp(5) }}>
                            Since you are the Team Leader, please select a new team leader before being removed.
                    </Text>
                        <FlatList
                            data={teamPlayers}
                            renderItem={teamListView}
                            keyExtractor={(item, index) => index + ''} />
                        <View style={styles.bottomButtonContainer}>
                            <CustomButton3 onPress={() => modalAction()} style={{ alignSelf: "center", width: wp(70) }} title="CONFIRM" />
                            <CustomButton1 style={{ alignSelf: "center", width: wp(70), marginTop: hp(3) }} title="CANCEL"
                                onPress={() => showModal(false)} />
                        </View>
                    </>
                    : null
            }

            {actionType == "Add" ?
                <>
                    <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(27), fontFamily: Fonts.bold, marginTop: hp(5) }}>ADD PLAYER</Text>
                    <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(16), fontFamily: Fonts.regular, margin: hp(3) }}>
                        Who would you like to add to your team?
                    </Text>
                    <TextInputBlackkWhite style={{ backgroundColor: "#000" }} onChangeText={(username) => setUsername(username)} />
                    <View style={styles.bottomButtonContainer}>
                        <CustomButton3 onPress={() => { modalAction() }} style={{ alignSelf: "center", width: wp(70) }} title="ADD PLAYER" disabled={username == ""} />
                        <CustomButton1 onPress={() => showModal(false)} style={{ alignSelf: "center", width: wp(70), marginTop: hp(3) }} title="CANCEL" />
                    </View>
                </>
                : null
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
        margin: 0
    },
    bottomButtonContainer: {
        position: 'absolute',
        bottom: hp(7),
        alignSelf: 'center'
    }

})
