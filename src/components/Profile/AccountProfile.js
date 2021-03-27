import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { hp, Icons, wp, Colors } from '../../constants/constants'
import { TLBRNotchedCornerView } from '../common'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { types } from '../../store/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountProfile = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const onPressLogout = async () => {
        await AsyncStorage.removeItem('user_data')
        dispatch({
            type: types.DESTROY_SESSION
        })
        dispatch({
            type: types.RENDER_AGAIN_STACK_NAV
        })
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TLBRNotchedCornerView
                    cutOffTopLeftStyle={{ borderTopColor: Colors.darkBg }}
                    cutOffBottomRightStyle={{ borderBottomColor: Colors.darkBg }}
                    icon={Icons.deposit_funds_icon_green} text='Deposit Funds' onPress={() => alert('Deposit Funds')} />
                <TLBRNotchedCornerView
                    cutOffTopLeftStyle={{ borderTopColor: Colors.darkBg }}
                    cutOffBottomRightStyle={{ borderBottomColor: Colors.darkBg }}
                    icon={Icons.deposit_funds_icon} text='Withdraw Funds' onPress={() => alert('Withdraw Funds')} />
            </View>
            <View style={{ marginTop: hp(3), flexDirection: 'row', justifyContent: 'space-between' }}>
                <TLBRNotchedCornerView
                    cutOffTopLeftStyle={{ borderTopColor: Colors.darkBg }}
                    cutOffBottomRightStyle={{ borderBottomColor: Colors.darkBg }}
                    icon={Icons.log_out_icon} text='Log Out' onPress={onPressLogout} />
                <TLBRNotchedCornerView
                    cutOffTopLeftStyle={{ borderTopColor: Colors.darkBg }}
                    cutOffBottomRightStyle={{ borderBottomColor: Colors.darkBg }}
                    icon={Icons.contact_help} text='Contact Help' onPress={() => alert('Contact Help')} />
            </View>
        </View>
    )
}

export default AccountProfile

const styles = StyleSheet.create({
    container: { flex: 1, width: wp(90), alignSelf: 'center', marginVertical: hp(2) }
})
