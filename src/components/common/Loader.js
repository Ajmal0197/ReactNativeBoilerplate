import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const Loader = ({ style }) => {
    return (
        <View style={{ ...styles.mainContainer, ...style }} >
            <View style={{ ...styles.boxView, backgroundColor: '#fff' }}>
                <ActivityIndicator size="large" animating={true} color={'#211F5E'} />
                <Text style={styles.textStyle}>Please Wait...</Text>
            </View>
        </View>
    )
}
export default Loader;

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    },
    boxView: { paddingTop: 10, height: 100, width: 100, borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center' },
    textStyle: { fontSize: 12, color: '#211F5E', fontFamily: 'OpenSans-Bold', marginTop: 10 }
});