import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IndexStyle from "../styles/indexStyle";
import USA_icon from '../images/USA.png'
import FRA_icon from '../images/FRA.png'
import stringsoflanguages from '../leng/stringsoflanguages'
export default class LanguageSelectionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        const lang = [
            {shortform: 'en', longform: 'English'},
            {shortform: 'fr', longform: 'French'},
        ];

        global.lang = lang;
    }

    settext(value) {
        console.log('nav', this.props.navigation.navigate)
        stringsoflanguages.setLanguage(value);
        this.props.navigation.navigate('ContentScreen', {JSON_Clicked_Item: value,});

    }

    render() {
        const icon = [USA_icon, FRA_icon];

        return (
            <View style={styles.container}>
                <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']} style={IndexStyle.gradient}/>
                <View style={styles.icons}>
                    {global.lang.map((item, index) => (
                        <View key={index}>
                            <TouchableOpacity
                                ref={item.shortform}
                                onPress={() => this.settext(item.shortform)}

                            >
                                <Image
                                    source={icon[index]}
                                    style={styles.icon}
                                />
                                <Text
                                    style={styles.text}
                                >
                                    {item.longform}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icons: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    icon: {
        width: 70,
        height: 40
    },
    text: {
        fontSize: 17,
        color: '#fff',
        fontWeight: '400',
        fontFamily: 'Muli',
        alignSelf: 'center',
        marginTop: 5
    }
})