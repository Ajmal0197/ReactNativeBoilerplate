import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import { NotificationButton, ProfileOverviewCard, AddAnotherGameCardBlack } from '../common'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AddGameFromProfile from './AddGameFromProfile'

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

const OverviewProfile = () => {

    const navigation = useNavigation();
    const [showModal, setshowModal] = useState(false)
    const ListFooterComponentFunc = () => <AddAnotherGameCardBlack onPress={(bool) => setshowModal(bool)} />

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={DATA}
                contentContainerStyle={{ alignItems: 'center', marginVertical: hp(2) }}
                renderItem={({ item, index }) =>
                    <ProfileOverviewCard item={item} index={index} navigation={navigation} />
                }
                keyExtractor={(item, index) => index + ''}
                ListFooterComponent={ListFooterComponentFunc}
                ListHeaderComponent={() => <NotificationButton onPress={() => navigation.navigate('NotificationScreen')} count={2} />}
            />
            <AddGameFromProfile showModal={showModal} onPressCloseModal={(bool) => setshowModal(false)} />
        </View>
    )
}

export default OverviewProfile

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
