import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, Animated, View } from 'react-native'
import { Colors, Icons, Fonts, wp, hp, nf } from '../../constants/constants'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { OverviewProfileOthers, HistoryProfileOthers, TeamsOthers, } from './index'
import { InAppBrowserOpen } from '../common'

export default function MainProfileScreenOthers({ navigation }) {

    //react-native-tab-view start 
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Overview' },
        { key: 'second', title: 'History' },
        { key: 'third', title: 'Teams' },
    ]);
    const renderScene = SceneMap({
        first: OverviewProfileOthers,
        second: HistoryProfileOthers,
        third: TeamsOthers,
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
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', zIndex: 1, marginTop: hp(6), marginStart: wp(5) }}>
                <Image resizeMode='contain' style={{ width: wp(12) }} source={Icons.white_back} />
            </TouchableOpacity>
            <Image resizeMode='stretch' source={Icons.bg_accent_red_top} style={{ height: hp(15), width: wp(100) }} />
            <Image style={{ alignSelf: 'center', marginTop: -hp(6) }} source={Icons.eg_red} />

            <View style={{ alignItems: 'center', marginBottom: hp(1) }}>
                <Text style={styles.text1}>others_profile</Text>
                <Text onPress={() => InAppBrowserOpen('https://www.twitch.tv/')} style={styles.text3}>Go to Twitch Channel</Text>
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
        marginTop: hp(1)
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

})
