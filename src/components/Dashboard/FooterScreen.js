import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MainTeamsScreen } from '../Teams'
import { MainJoinScreen } from '../Join'
import { MainProfileScreen } from '../Profile'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { types } from '../../store/ActionTypes'
import { BlackGradientView, FooterTab } from '../common'
import { Colors, hp, wp } from '../../constants/constants'

export default function FooterScreen({ navigation }) {

    const dispatch = useDispatch();
    const { footerIndex } = useSelector(state => ({
        footerIndex: state.globalReducer.footerIndex,
    }), shallowEqual);
    let UpperView;

    switch (footerIndex) {
        case 0: {
            UpperView = MainJoinScreen;
            break;
        }
        case 1: {
            UpperView = MainTeamsScreen;
            break;
        }
        case 2: {
            UpperView = MainProfileScreen;
            break;
        }
    }

    return (
        <View style={{ flex: 1 }}  >

            <UpperView navigation={navigation} />

            <FooterTab />

        </View>
    )
}

const styles = StyleSheet.create({
})
