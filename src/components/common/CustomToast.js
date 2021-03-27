import React from 'react'
import { BaseToast } from 'react-native-toast-message';
import { hp, wp } from '../../constants/constants'

export default CustomToast = {
    success: ({ text1 = '', text2 = '', props, ...rest }) => (
        <BaseToast
            {...rest}
            style={{ borderLeftColor: 'white', marginTop: hp(3) }}
            contentContainerStyle={{ paddingHorizontal: wp(1) }}
            text1Style={{
                fontSize: 20,
            }}
            text2Style={{
                fontSize: 15,
            }}
            text1={text1}
            text2={text2}
            trailingIcon={null}
            onPress={props.onPress || null}
        />
    )
};

//USAGE:
// Toast.show({
//     text1: 'Hello',
//     text2: 'This is some something',
//     props: { onPress: () => { Toast.hide(); } }
// });

{/* <Toast config={CustomToast} ref={(ref) => Toast.setRef(ref)} /> */ }
