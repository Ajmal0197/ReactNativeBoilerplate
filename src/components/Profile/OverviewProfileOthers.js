import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import { NotificationButton, ProfileOverviewCard } from '../common'
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-wew-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-sdfs-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-sdfs-qq-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-sdfs-471f-bd96-ee',
        title: 'Third Item',
    },
];

const OverviewProfileOthers = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={DATA}
                contentContainerStyle={{ alignItems: 'center', marginTop: -hp(1) }}
                renderItem={({ item, index }) =>
                    <ProfileOverviewCard othersProfile={true} item={item} index={index} navigation={navigation} />
                }
                ListFooterComponent={() => <View style={{ height: hp(20) }} />}
                keyExtractor={(item, index) => index + ''}
            />
        </View>
    )
}

export default OverviewProfileOthers

const styles = StyleSheet.create({
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
    footerBottomView: { justifyContent: 'center', alignItems: 'center', height: hp(18), width: wp(90), borderRadius: wp(3), backgroundColor: Colors.darkBlack }
})
