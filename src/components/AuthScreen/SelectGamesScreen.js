import React, { useState, useEffect, useLayoutEffect } from 'react'
import { StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ScrollView, View } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import { RedGradientView } from '../common'
import { CustomButton1, SelectGameNotchedView } from '../common'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { types } from '../../store/ActionTypes'

const SelectGamesScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const listOfGames = useSelector(state => state.authReducer.listOfGames) //Recommended use in array of object
    const { selectedGamesCount } = useSelector(state => ({
        selectedGamesCount: state.authReducer.selectedGamesCount
    }), shallowEqual);

    useLayoutEffect(() => {
        dispatch({
            type: types.INSERT_LIST_OF_GAMES,
        })
    }, [])

    const onPressGameItem = (v, i) => {
        dispatch({
            type: types.GAMES_SELECT_TYPE,
            payload: i
        })
    }

    return (
        <RedGradientView>
            <Image style={styles.step2} source={Icons.step_two} />

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
                            isSelected={v.isSelected} />
                    </TouchableOpacity>
                ))}

                <View style={styles.bottomView} >
                    <Text style={[styles.dtext, { marginVertical: hp(4) }]}>You have selected {selectedGamesCount} Games</Text>
                    <CustomButton1
                        onPress={() => navigation.navigate('EnterYourIdName', { gameIndex: 0, fromEditScreen: false })}
                        disabled={selectedGamesCount === 0}
                        style={{ alignSelf: 'center' }}
                        title={'NEXT'} />
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: hp(5) }}>
                        <Text style={styles.text}>GO BACK</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </RedGradientView>
    )
}

export default SelectGamesScreen

const styles = StyleSheet.create({
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
    step2: { alignSelf: 'center', marginTop: -hp(4), marginStart: -wp(6) }
})
