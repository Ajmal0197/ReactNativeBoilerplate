import React from 'react'
import { Image, StyleSheet, View, FlatList } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import { HistoryCardsNotched } from '../common'
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        isSelected: true
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        isSelected: true
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        isSelected: false
    },
    {
        id: '58694a0f-wew-471f-bd96-145571e29d72',
        title: 'Third Item',
        isSelected: true
    }
];

const HistoryProfileOthers = () => {

    const navigation = useNavigation();

    const renderItem = ({ item, index }) => (
        <HistoryCardsNotched item={item} navigation={navigation} />
    )

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={DATA}
                contentContainerStyle={{ alignItems: 'center' }}
                renderItem={renderItem}
                keyExtractor={(item, index) => index + ''}
                ListFooterComponent={() => <View style={{ height: hp(20) }} />}
            />
        </View>
    )
}

export default HistoryProfileOthers

const styles = StyleSheet.create({
    imageTV: {
        width: wp(90),
    },
    profileHistoryContainer: {
        width: wp(90),
        paddingVertical: hp(2),
        paddingHorizontal: wp(5),
        margin: 10,
    },
    text2: {
        color: Colors.greenText,
        fontSize: nf(10),
        fontFamily: Fonts.regular,
    },
    text3: {
        color: Colors.white,
        fontSize: nf(21),
        fontFamily: Fonts.bold,
    },
    text4: {
        color: '#FFFFFF80',
        fontSize: nf(14),
        fontFamily: Fonts.regular,
    },
    text5: {
        color: Colors.white,
        fontSize: nf(19),
        fontFamily: Fonts.regular,
    },
})
