import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants';
import { useSelector, useDispatch } from 'react-redux';
import { types } from '../../store/ActionTypes';
import { TextInputBlackkWhite } from '../common/TextInputBlackWhite';
import { CustomButton1, CustomButton3, TRBLNotchedCornerView, GamesToCreateTeamForNotched } from '../common';
import SquareCard from '../common/SquareCard';
import ListOfGames from '../../constants/ListOfGames';

export default function CreateTeamModal() {

    const createTeamModalIndex = useSelector(state => state.teamReducer.createTeamModalIndex);
    const dispatch = useDispatch();

    const [text, setText] = useState("");
    const [selectedPlatofrmIndex, setPlatofrmIndex] = useState(0);
    const [selectedGame, changeSelectedGame] = useState();
    const [playerList, changePlayerList] = useState([{ name: "Player1" }]);
    const gameList = ListOfGames;

    const changeModalIndex = (int) => {
        dispatch({
            type: types.CHANGE_CREATE_TEAM_MODAL_INDEX,
            payload: int
        });
    }
    const onChangeText = (text) => {
        setText(text);
    }

    const cancelFunc = () => {
        onChangeText("");
        changeModalIndex(0);
        setPlatofrmIndex(0);
    }

    const createTeamFunc = () => {
        onChangeText("");
        changeModalIndex(0);
        setPlatofrmIndex(0);
    }

    const gameSelectFunc = (item) => {
        changeSelectedGame(item)
        changeModalIndex(2);
    }

    const gameListItem = (item) => {
        return (
            <GamesToCreateTeamForNotched item={item} source={Icons.console} onPress={() => gameSelectFunc(item)} />
        );
    }

    const playerItem = (item) => {
        return (
            <View style={styles.playerNameCard}>
                <Text style={{ color: Colors.white, fontSize: nf(16), fontFamily: Fonts.regular }}>{item.name}</Text>
                <TouchableOpacity onPress={() => { changePlayerList(playerList.filter(x => x.name != item.name)) }}>
                    <Text style={{ color: Colors.redTest, fontSize: nf(15), fontFamily: Fonts.regular }}>Remove</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <Modal isVisible={createTeamModalIndex != 0} style={styles.modalContainer} onBackButtonPress={() => changeModalIndex(createTeamModalIndex - 1)} statusBarTranslucent={true}>
            { createTeamModalIndex == 1 ?
                <>
                    <View style={{ paddingHorizontal: wp(5), paddingVertical: hp(6) }}>
                        <TouchableOpacity onPress={() => changeModalIndex(0)}>
                            <Image source={Icons.back_arrow_gradient} />
                        </TouchableOpacity>
                        <Text style={{ color: "#fff", fontSize: nf(24), fontFamily: Fonts.regular, textAlign: 'center', marginTop: hp(1), marginBottom: hp(-2) }}>What game would you like to create a team for?</Text>
                    </View>
                    <FlatList
                        keyExtractor={(item, i) => i + ""}
                        data={gameList}
                        renderItem={({ item }) => gameListItem(item)} />
                </>
                : null}
            { createTeamModalIndex == 2 ?
                <>
                    <View style={{ flex: 1, paddingHorizontal: wp(5), paddingVertical: hp(6) }}>
                        <TouchableOpacity onPress={() => changeModalIndex(1)}>
                            <Image source={Icons.back_arrow_gradient} />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: hp(1), marginBottom: hp(-2) }}>
                            <Text style={{ color: "#fff", fontSize: nf(24), fontFamily: Fonts.regular }}>What would you like to name your team?</Text>
                            <TextInputBlackkWhite style={{ backgroundColor: "#000" }} text={text} onChangeText={(text) => onChangeText(text)} />
                        </View>
                        <View style={styles.bottomButtonContainer}>
                            <CustomButton3 onPress={() => changeModalIndex(3)} style={{ alignSelf: "center", width: wp(70) }} disabled={text == ""} title="NEXT" />
                            <CustomButton1 onPress={cancelFunc} style={{ alignSelf: "center", width: wp(70), marginTop: hp(3) }} title="CANCEL" />
                        </View>
                    </View>
                </>
                : null}
            { createTeamModalIndex == 3 ?
                <>
                    <View style={{ flex: 1, paddingHorizontal: wp(3), paddingVertical: hp(6) }}>
                        <TouchableOpacity onPress={() => changeModalIndex(2)}>
                            <Image source={Icons.back_arrow_gradient} />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'space-between', marginTop: hp(1) }}>
                            <Text style={{ color: "#fff", fontSize: nf(24), fontFamily: Fonts.regular }}>What console will this game be played on?</Text>
                            <Text style={{ textAlign: 'left', color: "#fff", fontSize: nf(14), fontFamily: Fonts.regular, marginVertical: hp(2) }}>Please select only one from the following:</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <SquareCard onPress={() => setPlatofrmIndex(1)} isSelected={selectedPlatofrmIndex == 1}
                                imageSource={Icons.ps4_logo} />
                            <SquareCard onPress={() => setPlatofrmIndex(2)} isSelected={selectedPlatofrmIndex == 2}
                                imageSource={Icons.pc_logo} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <SquareCard onPress={() => setPlatofrmIndex(3)} isSelected={selectedPlatofrmIndex == 3}
                                imageSource={Icons.switch_logo} />
                            <SquareCard onPress={() => setPlatofrmIndex(4)} isSelected={selectedPlatofrmIndex == 4}
                                imageSource={Icons.xbox_logo} />
                        </View>

                        <View style={styles.bottomButtonContainer}>
                            <CustomButton3 onPress={() => changeModalIndex(4)} style={{ alignSelf: "center", width: wp(70) }} disabled={selectedPlatofrmIndex == 0} title="NEXT" />
                            <CustomButton1 onPress={cancelFunc} style={{ alignSelf: "center", width: wp(70), marginTop: hp(3) }} title="CANCEL" />
                        </View>
                    </View>
                </>
                : null}
            { createTeamModalIndex == 4 ?
                <>
                    <View style={{ flex: 1, paddingHorizontal: wp(3), paddingVertical: hp(6) }}>
                        <TouchableOpacity onPress={() => changeModalIndex(3)}>
                            <Image source={Icons.back_arrow_gradient} />
                        </TouchableOpacity>
                        <TextInputBlackkWhite style={{ backgroundColor: "#000" }} />
                        <FlatList
                            keyExtractor={(item, i) => i + ""}
                            data={playerList}
                            renderItem={({ item }) => playerItem(item)}
                            ListFooterComponent={
                                <View style={{ alignItems: 'center', marginTop: hp(1), marginBottom: hp(-2) }}>
                                    <Text style={{ marginTop: hp(25), width: wp(60), textAlign: 'center', color: "#fff", fontSize: nf(16), fontFamily: Fonts.regular }}>
                                        Please add another {selectedGame.teamSize - playerList.length} players to create your team.
                                        </Text>
                                </View>
                            } />
                        <View style={styles.bottomButtonContainer}>
                            <CustomButton3 onPress={createTeamFunc} style={{ alignSelf: "center", width: wp(70) }} title="CREATE TEAM" disabled={playerList.length == 0} />
                        </View>
                    </View>
                </>
                : null}
        </ Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        paddingTop: hp(2),
        backgroundColor: "#000",
        opacity: 0.9,
        justifyContent: 'flex-start',
        margin: 0
    },
    gameListContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: hp(15),
        width: wp(90),
        backgroundColor: Colors.secondaryDark,
        alignSelf: "center"
    },
    bottomButtonContainer: {
        position: 'absolute',
        bottom: hp(7),
        alignSelf: 'center'
    },
    playerNameCard: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 10,
        height: hp(7),
    }
})
