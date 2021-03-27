import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, Animated, View, useWindowDimensions } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { OverviewProfile, HistoryProfile, AccountProfile } from './index'
import { useSelector } from 'react-redux';

export default function MainProfileScreen({ navigation }) {

    const userData = useSelector(state => state.authReducer.userData)

    //react-native-tab-view start 
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Overview' },
        { key: 'second', title: 'History' },
        { key: 'third', title: 'Account' },
    ]);
    const renderScene = SceneMap({
        first: OverviewProfile,
        second: HistoryProfile,
        third: AccountProfile,
    });
    const _handleIndexChange = (index) => setIndex(index);
    const _renderTabBar = (props) => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    const opacity = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((inputIndex) =>
                            inputIndex === i ? 1 : 0.5
                        ),
                    });
                    return (
                        <TouchableOpacity
                            key={i}
                            style={styles.tabItem}
                            onPress={() => setIndex(i)}>
                            <Animated.Text style={{ ...styles.textTab, opacity }}>{route.title}</Animated.Text>
                            {index === i && <Image source={Icons.tabs_red_bottom} />}
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };
    //react-native-tab-view ends 

    return (
        <View style={{ flex: 1, backgroundColor: Colors.darkBg }}>
            <Image resizeMode='stretch' source={Icons.bg_accent_red_top} style={{ height: hp(15), width: wp(100) }} />
            {/* <Image style={{ alignSelf: 'center', marginTop: -hp(6) }} source={Icons.eg_red} /> */}
            <View style={styles.profileImageConatiner}>
                <Image style={styles.profileImage} source={{ uri: userData?.twitchProfileImage }} />
            </View>
            <View style={{ alignItems: 'center', marginBottom: hp(1) }}>
                <Text style={styles.text1}>{userData?.twitchUserName}</Text>
                <View style={{ marginTop: hp(1), flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={styles.text2}>Available Balance: $503.73</Text>
                    <Image resizeMode='contain' source={Icons.go_to_wallet_btn} style={{ marginStart: wp(2), height: wp(5), width: wp(5) }} />
                </View>
                <Text onPress={() => navigation.navigate('MainProfileScreenOthers')} style={styles.text3}>Go to Twitch Channel</Text>
            </View>

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={(i) => _handleIndexChange(i)}
                renderTabBar={_renderTabBar}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    text1: {
        color: Colors.white,
        fontSize: nf(24),
        fontFamily: Fonts.bold,
        marginTop: hp(2)
    },
    text2: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
    },
    text3: {
        color: Colors.redTest,
        fontSize: nf(16),
        fontFamily: Fonts.regular,
        marginTop: hp(1)
    },
    textTab: {
        color: Colors.white,
        fontSize: nf(16),
        fontFamily: Fonts.bold,
        marginBottom: hp(0.5)
    },
    whiteCircleView: { backgroundColor: Colors.white, alignSelf: 'center', padding: wp(10), marginTop: hp(5), borderRadius: wp(30) },
    notificationView: {
        height: hp(8), width: wp(95),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: hp(5),
        borderRadius: wp(2),
        backgroundColor: Colors.cardGreyBg,
        paddingHorizontal: wp(5)

    },
    tabBar: {
        flexDirection: 'row',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: wp(3),
    },
    profileImageConatiner: {
        height: wp(25),
        width: wp(25),
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: -hp(6),
        borderRadius: wp(25),
        justifyContent: 'center'
    },
    profileImage: {
        height: wp(15),
        width: wp(15),
        alignSelf: 'center'
    }
})
