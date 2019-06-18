import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    gradient: {
        height: 100 + '%',
        width: 200 + '%',
        position: 'absolute',
        right: 0,
        top: 0
    },

    whiteBtn: {
        backgroundColor: 'white',
        width: 180,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },

    transparentBtn: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        width: 180, height: 50, alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6, 
        borderColor: 'white'
    },

    input: {
        width: 100 + '%',
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        height: 45,
        marginBottom: 5 + '%',
        paddingLeft: 40
    }
});