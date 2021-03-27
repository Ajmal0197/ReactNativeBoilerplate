import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import { BlackGradientView, CustomButton2, CustomButton3 } from '../common'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import TeamActionsModal from './TeamActionsModal'
import { useDispatch } from 'react-redux';
import { types } from '../../store/ActionTypes';

export default function TeamDetailsScreen({ route }) {

    const [isActionModalVisible, setActionModalVisible] = useState(false);
    const [actionType, setActionType] = useState(null);
    const [selectedTeamPlayer, setSelectedTeamPlayer] = useState();
    const { team } = route.params;
    const { team_players } = team;
    const dispatch = useDispatch();

    const modalAction = () => {
        dispatch({
            type: types.UPDATE_TEAM_LIST,
            payload: { selectedTeamPlayer, team }
        });
        setActionModalVisible(false);
    }

    const teamPlayerItem = (team_players) => {
        return (
            <View style={styles.playerNameCard}>
                <Text style={{ color: Colors.white, fontSize: nf(16), fontFamily: Fonts.regular }}>{team_players.name}</Text>
                {team_players.isLeader ?
                    <Text style={{ color: "#EFE294", fontSize: nf(16), fontFamily: Fonts.regular }}>(Team Leader)</Text>
                    : null}
                <TouchableOpacity onPress={() => {
                    setActionModalVisible(true);
                    setActionType("Remove");
                    setSelectedTeamPlayer(team_players);
                }}>
                    <Image source={Icons.Close_Icon_red} />
                </TouchableOpacity>
            </View>
        );
    }
    const footerItem = () => {
        return (
            <TouchableOpacity style={[styles.playerNameCard, { backgroundColor: "#000", justifyContent: 'flex-start' }]}
                onPress={() => {
                    setActionModalVisible(true);
                    setActionType("Add")
                }}>
                <Image source={Icons.Plus_Icon_red} />
                <Text style={{ color: Colors.redTest, fontSize: nf(16), fontFamily: Fonts.regular, marginLeft: 10, }}>Add Player</Text>
            </TouchableOpacity>
        );
    }

    return (
        <BlackGradientView showBack={true}>
            <View style={{ paddingHorizontal: wp(3), paddingVertical: hp(2) }}>
                <View style={styles.header}>
                    <Text style={{ color: "#fff", fontSize: nf(27), fontFamily: Fonts.regular, }}>{team.team_name}</Text>
                    <View style={{ alignItems: 'flex-start', borderRadius: 10, backgroundColor: Colors.white, padding: 2, paddingHorizontal: wp(2) }}>
                        <Text style={{ color: "#000", fontSize: nf(16), fontFamily: Fonts.regular }}>{team.game_name}</Text>
                    </View>
                </View>
                <View style={styles.header}>
                    <Text style={{ color: "#fff", fontSize: nf(16), fontFamily: Fonts.regular }}>Number of Players: {team.player_count}</Text>
                    <View style={{ alignItems: 'flex-start', borderRadius: 10, backgroundColor: Colors.blue, padding: 4, paddingHorizontal: (10) }}>
                        <Text style={{ color: "#fff", fontSize: nf(13), fontFamily: Fonts.regular }}>{team.platform}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                <View style={{ flex: 0.3, alignItems: 'center' }}>
                    <Text style={{ color: Colors.grey, fontSize: nf(13), fontFamily: Fonts.regular }}>Wins</Text>
                    <Text style={{ color: Colors.white, fontSize: nf(34), fontFamily: Fonts.regular }}>{team.team_wins}</Text>
                </View>
                <View style={{ flex: 0.3, alignItems: 'center' }}>
                    <Text style={{ color: Colors.grey, fontSize: nf(13), fontFamily: Fonts.regular }}>Lose</Text>
                    <Text style={{ color: Colors.white, fontSize: nf(34), fontFamily: Fonts.regular }}>{team.team_losses}</Text>
                </View>
                <View style={{ flex: 0.3, alignItems: 'center' }}>
                    <Text style={{ color: Colors.grey, fontSize: nf(13), fontFamily: Fonts.regular }}>Draw</Text>
                    <Text style={{ color: Colors.white, fontSize: nf(34), fontFamily: Fonts.regular }}>{team.team_draws}</Text>
                </View>
            </View>
            <FlatList
                keyExtractor={(team_players, i) => i + ""}
                data={team_players}
                renderItem={({ item }) => teamPlayerItem(item)}
                ListFooterComponent={footerItem} />

            <TeamActionsModal modalAction={modalAction}
                actionItem={selectedTeamPlayer}
                actionType={actionType}
                isVisible={isActionModalVisible}
                showModal={(bool) => setActionModalVisible(bool)}
                teamPlayers={team_players} />
        </BlackGradientView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: hp(1)
    },
    playerNameCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.secondaryDark,
        paddingHorizontal: wp(5),
        marginHorizontal: wp(7),
        marginVertical: hp(1),
        height: hp(7),
    }
})
