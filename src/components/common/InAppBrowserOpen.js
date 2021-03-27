
import { InAppBrowser } from 'react-native-inappbrowser-reborn'
import { types } from '../../store/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const inAppBrowserStyle = {
    // iOS Properties
    dismissButtonStyle: 'cancel',
    preferredBarTintColor: '#6441a5',
    preferredControlTintColor: 'white',
    readerMode: false,
    animated: true,
    modalPresentationStyle: 'fullScreen',
    modalTransitionStyle: 'coverVertical',
    modalEnabled: true,
    enableBarCollapsing: false,
    // Android Properties
    showTitle: true,
    toolbarColor: '#6441a5',
    secondaryToolbarColor: 'black',
    enableUrlBarHiding: true,
    enableDefaultShare: true,
    forceCloseOnRedirection: false,
    // Specify full animation resource identifier(package:anim/name)
    // or only resource name(in case of animation bundled with app).
    animations: {
        startEnter: 'slide_in_right',
        startExit: 'slide_out_left',
        endEnter: 'slide_in_left',
        endExit: 'slide_out_right'
    },
    headers: {
        // 'Authorization': 'Bearer ...'
    }
}

export const tryDeepLinking = async (dispatch, isUserNew = false) => {
    const loginUrl = 'https://1h7skz587c.execute-api.ap-south-1.amazonaws.com/dev/app/v1/user/login';
    const redirectUrl = 'engarde'   // getDeepLink();
    const urlInApp = `${loginUrl}?redirect_url=${encodeURIComponent(redirectUrl)}`;

    // Linking.openURL(loginUrl);

    try {
        if (await InAppBrowser.isAvailable()) {
            const result = await InAppBrowser.openAuth(urlInApp, redirectUrl, inAppBrowserStyle);
            const { url } = result
            if (url) {
                dispatch({
                    type: types.UPDATE_USER_DATA,
                    payload: url
                });
                if (!isUserNew) {
                    await AsyncStorage.setItem('user_data', url)
                    dispatch({
                        type: types.RENDER_AGAIN_STACK_NAV
                    })
                }
                return true;
            }
        } else {
            alert('Not supported :/');
            return false;
        }
    } catch (error) {
        console.error(error);
        alert('Something’s wrong with the app :(');
        return false;
    }
}