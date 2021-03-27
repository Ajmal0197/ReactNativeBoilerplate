import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, View } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import LinearGradient from 'react-native-linear-gradient';
import { CustomButton1, SelectGameNotchedView } from '../common'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { types } from '../../store/ActionTypes'
import Modal from 'react-native-modal';

const AddGameFromProfile = ({ showModal, onPressCloseModal }) => {

    const dispatch = useDispatch();

    const listOfGames = useSelector(state => state.authReducer.listOfGames) //Recommended use in array of object
    const { selectedGamesCount } = useSelector(state => ({
        selectedGamesCount: state.authReducer.selectedGamesCount
    }), shallowEqual);

    const onPressGameItem = (v, i) => {
        dispatch({
            type: types.GAMES_SELECT_TYPE,
            payload: i
        })
    }

    const onShowModal = () => {
        dispatch({
            type: types.INSERT_LIST_OF_GAMES
        })
    }

    return (
        <Modal
            onShow={onShowModal}
            isVisible={showModal}
            onSwipeComplete={() => onPressCloseModal(false)}
            swipeDirection={['down']}
            propagateSwipe={true}
            style={styles.modal}>
            <LinearGradient
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
                colors={Colors.redGradient}
                style={styles.scrollableModal}>
                <View style={styles.tabWhite} />

                <ScrollView>

                    <Text style={styles.headerText}>What games would you like to compete in?</Text>
                    <Text style={styles.dtext}>You may select more than one!</Text>

                    {listOfGames.map((v, i) => (
                        <TouchableOpacity
                            key={i}
                            onPress={() => onPressGameItem(v, i)}>
                            <SelectGameNotchedView
                                name={v.name}
                                image={!v.isSelected ? Icons.pink_tv : v.icnPath}
                                isSelected={v.isSelected}
                                shouldAnimate={false}
                            />
                        </TouchableOpacity>
                    ))}

                    <View style={styles.bottomView} >
                        <Text style={[styles.dtext, { marginVertical: hp(4) }]}>You have selected {selectedGamesCount} Games</Text>
                        <CustomButton1
                            disabled={selectedGamesCount === 0}
                            style={{ alignSelf: 'center' }}
                            title={'NEXT'} />
                        <TouchableOpacity style={{ marginTop: hp(5) }}>
                            <Text style={styles.text}>GO BACK</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </LinearGradient>
        </Modal>
    )
}

export default AddGameFromProfile

const styles = StyleSheet.create({
    scrollableModal: {
        height: hp(92),
        borderTopLeftRadius: wp(10),
        borderTopRightRadius: wp(10),
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    headerText: {
        color: Colors.white,
        fontSize: nf(27),
        fontFamily: Fonts.bold,
        textAlign: 'center',
        width: wp(80), alignSelf: 'center'
    },
    descText: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
        marginStart: wp(5)
    },
    dtext: {
        color: Colors.white,
        fontSize: nf(14),
        alignSelf: 'center',
        marginVertical: hp(2),
        fontFamily: Fonts.regular,
    },
    text: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.bold,
    },
    bottomView: { alignItems: 'center', flex: 1, justifyContent: 'flex-end', paddingBottom: hp(10) },
    tabWhite: { height: 5, borderRadius: 5, marginTop: hp(2), marginBottom: hp(5), width: wp(50), alignSelf: 'center', backgroundColor: Colors.white }
})
