import React from 'react'
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BlackGradientView, CustomButton4, CustomButton3 } from '../common'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import ReferSomeoneModal from './ReferSomeoneModal';
import { useState } from 'react';
import MessagesModal from './MessagesModal';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../store/ActionTypes';
import CreateTeamModal from './CreateTeamModal';
import { TeamsCardsNotched, AddAnotherGameCardBlack } from '../common'

export default function MainTeamsScreen({ navigation }) {

    const teamList = useSelector(state => state.teamReducer.teamList);

    const [isReferSomeoneModalVisible, setReferSomeoneModalVisible] = useState(false);

    const dispatch = useDispatch();

    const changeMessageModalIndex = (int) => {
        dispatch({
            type: types.CHANGE_MESSAGES_MODAL_INDEX,
            payload: int
        });
    }

    const changeCreateTeamModalIndex = (int) => {
        dispatch({
            type: types.CHANGE_CREATE_TEAM_MODAL_INDEX,
            payload: int
        });
    }

    const ListFooterComponentFunc = () => <AddAnotherGameCardBlack onPress={() => changeCreateTeamModalIndex(1)} />

    const renderItem = ({ item }) => <TeamsCardsNotched disabled={false} navigation={navigation} onPress={() => navigation.navigate("TeamDetailsScreen", { team: item })} item={item} />

    return (
        <BlackGradientView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: hp(3), paddingHorizontal: wp(3), alignItems: 'center' }}>
                <CustomButton4 style={styles.inviteBtn} title="INVITE FRIENDS" imageStyle={{ width: wp(5), height: hp(5), }} image={Icons.mail} onPress={() => setReferSomeoneModalVisible(true)} />
                <CustomButton4 style={styles.chatBtn} imageStyle={styles.chatBtn} image={Icons.messaging} onPress={() => changeMessageModalIndex(1)} />
            </View>
            {
                !teamList.length ?
                    <>
                        <View style={styles.graphicContainer}>
                        </View>
                        <View>
                            <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(27), fontFamily: Fonts.bold }}>Your Teams</Text>
                            <Text style={{ textAlign: 'center', color: "#fff", fontSize: nf(16), fontFamily: Fonts.regular, margin: 30 }}>This is where all of the people you meet on En Garde, along with your friends and family members can gather into teams!</Text>
                            <CustomButton3 style={{ alignSelf: 'center', width: wp(70) }} title="CREATE TEAM"
                                onPress={() => changeCreateTeamModalIndex(1)} />
                        </View>
                    </>
                    :
                    <FlatList
                        keyExtractor={(item, i) => i + ""}
                        data={teamList}
                        contentContainerStyle={{ alignItems: 'center' }}
                        renderItem={renderItem}
                        ListFooterComponent={ListFooterComponentFunc}
                    />
            }
            <ReferSomeoneModal isVisible={isReferSomeoneModalVisible} showModal={(bool) => setReferSomeoneModalVisible(bool)} />
            <MessagesModal />
            <CreateTeamModal />
        </BlackGradientView>
    )
}

const styles = StyleSheet.create({
    inviteBtn: {
        width: wp(50),
        height: hp(5),
        justifyContent: 'space-evenly'
    },
    chatBtn: {
        width: wp(11),
        height: wp(11),
        justifyContent: 'center',
        alignSelf: 'center',
    },
    graphicContainer: {
        backgroundColor: '#fff',
        borderRadius: 500,
        height: hp(25),
        width: wp(55),
        alignSelf: 'center',
        marginVertical: 50
    },
    createAnotherTeamContainer: {
        backgroundColor: "#000",
        height: hp(20),
        width: wp(80),
        alignSelf: 'center',
        margin: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: hp(20),
    },
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
    footerBottomView: {
        justifyContent: 'center', alignItems: 'center', height: hp(18), width: wp(90), borderRadius: wp(3), backgroundColor: Colors.darkBlack
    }

})
