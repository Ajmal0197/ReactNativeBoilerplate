import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { BlackGradientView } from '../common'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import apiCall from '../../util/axiosApiCallWrapper'
import { types } from '../../store/ActionTypes'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        status: 'accepted',
        time: 'Today @ 10:01 AM PST',
        desc: 'badmonARJ invited you to an Overwatch match called For Glory!'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        status: 'rejected',
        time: '11/8/2020',
        desc: 'badmonARJ invited you to an Fornite match called 4daNite!'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd9w1aa97f63',
        title: 'Third Item',
        status: 'new',
        time: '11/8/2020',
        desc: 'KnightNite invited you to an Fornite match called gunz_blazinnn!'
    },
];


const NotificationScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const { footerIndex } = useSelector(state => ({
        footerIndex: state.globalReducer.footerIndex,
    }), shallowEqual);

    useEffect(() => {
        dispatch({
            type: types.LOGIN_SAGA,
        })
    }, [])

    const renderItem = ({ item, index }) => (
        <View>
            <Text style={styles.text1}>{item.title}</Text>
        </View>
    )

    return (
        <BlackGradientView showBack={true}>

            <View style={{ margin: wp(5) }}>
                <View style={{ alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.heading}>Notifications</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
                        <Text style={styles.settingText}>Settings</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={DATA}
                    contentContainerStyle={{ alignItems: 'center' }}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index + ''}
                    ListFooterComponent={() => <View style={{ height: hp(20) }} />}
                />

            </View>

        </BlackGradientView>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    heading: {
        color: Colors.white,
        fontSize: nf(24),
        fontFamily: Fonts.bold,
    },
    settingText: {
        color: Colors.redTest,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
    },
    text1: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
    },
})
