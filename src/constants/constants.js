//USAGE:     import { Colors, Icons, hp, wp, nf, Fonts } from '../../constants/constants'

import { Dimensions, PixelRatio, Platform } from 'react-native';
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');


//API CONSTANTS
//dev
const baseURL = 'https://jsonplaceholder.typicode.com/'

export const serviceUrl = {
    baseURL: baseURL,
    user: "posts",
}


//ICONS CONSTANTS
export const Icons = {
    bg_accent: require('../assets/icons/bg_accent.png'),
    en_garde_logo: require('../assets/icons/en_garde_logo.png'),
    logo_text_on_dark: require('../assets/icons/Logo_Text_On_Dark.png'),
    console: require('../assets/icons/console.png'),
    slider_colored: require('../assets/icons/slider_colored.png'),
    slider_light: require('../assets/icons/slider_light.png'),
    tournaments: require('../assets/icons/tournaments.png'),
    watch: require('../assets/icons/watch.png'),
    bg_accent_red: require('../assets/icons/bg_accent_red.png'),
    checked: require('../assets/icons/checked.png'),
    uncheck: require('../assets/icons/uncheck.png'),
    step_one: require('../assets/icons/step_one.png'),
    twitch_small: require('../assets/icons/twitch_small.png'),
    check_confirmation: require('../assets/icons/check_confirmation.png'),
    twitch_white: require('../assets/icons/twitch_white.png'),
    step_two: require('../assets/icons/step_two.png'),
    step_three: require('../assets/icons/step_three.png'),
    pink_tv: require('../assets/icons/pink_tv.png'),
    white_tv: require('../assets/icons/white_tv.png'),
    Black_tv: require('../assets/icons/Black_tv.png'),

    fortnite_tv: require('../assets/icons/fortnite_tv.png'),
    lol_tv: require('../assets/icons/lol_tv.png'),
    overwatch_tv: require('../assets/icons/overwatch_tv.png'),
    csgo: require('../assets/icons/csgo.png'),
    dota: require('../assets/icons/dota.png'),
    fifa: require('../assets/icons/fifa.png'),
    heartstone: require('../assets/icons/heartstone.png'),
    nba: require('../assets/icons/nba.png'),
    pubg: require('../assets/icons/pubg.png'),
    valorant: require('../assets/icons/valorant.png'),
    warcraft: require('../assets/icons/warcraft.png'),
    warzone: require('../assets/icons/warzone.png'),

    close: require('../assets/icons/close.png'),

    green_bg_view: require('../assets/icons/green_bg_view.png'),
    red_bg_view: require('../assets/icons/red_bg_view.png'),
    violet_bg_view: require('../assets/icons/violet_bg_view.png'),

    Green_Dot: require('../assets/icons/Green_Dot.png'),
    join_active: require('../assets/icons/join_active.png'),
    join_inactive: require('../assets/icons/join_inactive.png'),
    profile_active: require('../assets/icons/profile_active.png'),
    profile_inactive: require('../assets/icons/profile_inactive.png'),
    teams_active: require('../assets/icons/teams_active.png'),
    teams_inactive: require('../assets/icons/teams_inactive.png'),

    Red_send_btn: require('../assets/icons/Red_send_btn.png'),
    toggle_enabled: require('../assets/icons/toggle_enabled.png'),
    white_edit: require('../assets/icons/white_edit.png'),
    black_uncheck: require('../assets/icons/black_uncheck.png'),
    Red_check: require('../assets/icons/Red_check.png'),

    approve: require('../assets/icons/approve.png'),
    bg_accent_red_top: require('../assets/icons/bg-accent-red.png'),
    Close_Icon_red: require('../assets/icons/Close_Icon_red.png'),
    contact_help: require('../assets/icons/contact-help.png'),
    deposit_funds_icon: require('../assets/icons/deposit-funds-icon-1.png'),
    deposit_funds_icon_green: require('../assets/icons/deposit-funds-icon.png'),
    eg_red: require('../assets/icons/eg_red.png'),
    log_out_icon: require('../assets/icons/log-out-icon.png'),
    next_red: require('../assets/icons/next_red.png'),
    Plus_Icon_red: require('../assets/icons/Plus_Icon_red.png'),

    red_border_btn: require('../assets/icons/red_border_btn.png'),
    remove: require('../assets/icons/remove.png'),
    search_white: require('../assets/icons/search_white.png'),
    tabs_red_bottom: require('../assets/icons/tabs_red_bottom.png'),
    white_back: require('../assets/icons/white_back.png'),
    messaging: require('../assets/icons/messaging.png'),
    mail: require('../assets/icons/mail.png'),
    back_arrow_gradient: require('../assets/icons/back_arrow_gradient.png'),

    ps4_logo: require('../assets/icons/ps4_logo.png'),
    pc_logo: require('../assets/icons/pc_logo.png'),
    switch_logo: require('../assets/icons/switch_logo.png'),
    xbox_logo: require('../assets/icons/xbox_logo.png'),

    bottom_tab_header: require('../assets/icons/bottom_tab_header.png'),
    go_to_wallet_btn: require('../assets/icons/go_to_wallet_btn.png'),
}


//COLORS CONSTANTS
export const Colors = {
    darkBg: '#1E1E1E',
    white: '#FFFFFF',
    textRed: '#FD3C4F',
    secondaryDark: '#292929',
    redDots: '#FF0467',
    redTest: '#FD3D4E',
    secondaryPink: '#FE627F',
    orange: '#FC7437',
    green: '#47F15A',
    blue: '#0DE8E8',
    purple: '#5A3D84',
    redGradient: ['#FF0467', '#FC7437'],
    blue: "#3280C2",
    grey: "#959595",
    greenStripeGradient: ['#47F15A', '#0DE8E8'],
    cardGreyBg: '#292929',
    darkBlack: '#141414',
    greenText: '#83CE44',

};


//FONT STYLE CONSTANTS
export const Fonts = {
    bold: 'Ubuntu-Bold',
    boldItalic: 'Ubuntu-BoldItalic',
    italic: 'Ubuntu-Italic',
    lightItalic: 'Ubuntu-LightItalic',
    medium: 'Ubuntu-Medium',
    mediumItalic: 'Ubuntu-MediumItalic',
    regular: 'Ubuntu-Regular',
};


//FONT SCALING
//Usage: nf(16)
const scale = SCREEN_WIDTH / 375;
const normalizeFont = (size) => {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

//DYNAMIC DIMENSION CONSTANTS   
//Usage: wp(5), hp(20)
const widthPercentageToDP = widthPercent => {
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(SCREEN_WIDTH * elemWidth / 100);
};
const heightPercentageToDP = heightPercent => {
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(SCREEN_HEIGHT * elemHeight / 100);
};

export {
    normalizeFont as nf,
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
};
