import {StyleSheet, Dimensions} from 'react-native';


export const {height, width} = Dimensions.get('window');

//console.log(width);
//console.log(height);

export default styles = StyleSheet.create({
    gradient: {
        height: height,
        width: width,
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
    whiteBtn2: {
        backgroundColor: 'white',
        width: 240,
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