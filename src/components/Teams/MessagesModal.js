import React, { useState } from 'react'
import { Dimensions, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal';
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import { TextInputBlackkWhite } from '../common/TextInputBlackWhite';
import { useSelector, useDispatch } from 'react-redux';
import { types } from '../../store/ActionTypes';

export default function MessagesModal() {

    const messageModalIndex = useSelector(state => state.chatReducer.messagesModalIndex);
    const dispatch = useDispatch();

    const changeModalIndex = (int) => {
        dispatch({
            type: types.CHANGE_MESSAGES_MODAL_INDEX,
            payload: int
        });
    }

    const [isNewMessage, setNewMessage] = useState(false);
    const messages = [{ reciever: "User123", text_message: "Hey, join the game", time: "Today" }];

    const messageItem = (item) => {
        return (
            <TouchableOpacity style={styles.messageContainer} onPress={() => changeModalIndex(3)}>
                <Text style={{ color: "#fff", fontSize: nf(16), fontFamily: Fonts.regular, }}>{item.reciever}</Text>
                <Text style={{ color: "#fff", fontSize: nf(15), fontFamily: Fonts.regular }}>{item.text_message}</Text>
                <Text style={{ color: "#fff", fontSize: nf(13), fontFamily: Fonts.regular }}>{item.time}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <Modal isVisible={messageModalIndex != 0} style={styles.modalContainer} onBackButtonPress={() => changeModalIndex(messageModalIndex - 1)} statusBarTranslucent={true}>
            { messageModalIndex == 1 ?
                <>
                    <View style={{ paddingHorizontal: wp(5), paddingVertical: hp(6) }}>
                        <TouchableOpacity onPress={() => changeModalIndex(0)}>
                            <Image source={Icons.back_arrow_gradient} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: hp(1), marginBottom: hp(-2) }}>
                            <Text style={{ color: "#fff", fontSize: nf(27), fontFamily: Fonts.bold }}>Messages</Text>
                            <TouchableOpacity onPress={() => {
                                changeModalIndex(2);
                                setNewMessage(true);
                            }}>
                                <Image source={Icons.white_edit} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        keyExtractor={(item, i) => i + ""}
                        data={messages}
                        renderItem={({ item }) => messageItem(item)} />
                </>
                : null}
            { messageModalIndex == 2 ?
                <>
                    <View style={{ paddingHorizontal: wp(5), paddingVertical: hp(6) }}>
                        <TouchableOpacity onPress={() => {
                            changeModalIndex(1);
                            setNewMessage(false);
                        }}>
                            <Image source={Icons.back_arrow_gradient} />
                        </TouchableOpacity>
                        <Text style={{ color: "#fff", fontSize: nf(16), fontFamily: Fonts.regular, marginTop: hp(3) }}>I want to send a message to</Text>
                        <TextInputBlackkWhite style={{ backgroundColor: "#000" }} onChangeText={() => changeModalIndex(3)} />
                    </View>
                </>
                : null}
            { messageModalIndex == 3 ?
                <>
                    <View style={{ paddingHorizontal: wp(5), paddingVertical: hp(6) }}>
                        <TouchableOpacity onPress={() => {
                            if (isNewMessage)
                                changeModalIndex(2)
                            else
                                changeModalIndex(1)
                        }}>
                            <Image source={Icons.back_arrow_gradient} />
                        </TouchableOpacity>
                        <Text style={{ color: "#fff", fontSize: nf(27), fontFamily: Fonts.bold, marginTop: hp(1) }}>Title</Text>
                    </View>
                </>
                : null}
        </Modal>
    )
};

const styles = StyleSheet.create({
    modalContainer: {
        paddingTop: hp(2),
        backgroundColor: "#000",
        opacity: 0.9,
        justifyContent: 'flex-start',
        margin: 0,
    },
    messageContainer: {
        alignSelf: 'center',
        height: hp(15),
        width: wp(90),
        backgroundColor: Colors.secondaryDark,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        paddingLeft: wp(4)
    }
});
