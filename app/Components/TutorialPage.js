import React from 'react';
import {View, TouchableOpacity, TextInput, Image, ScrollView, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {Container, Content, Form, Text, Input, Item, Body} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import IndexStyle from '../styles/indexStyle';
import {width, height} from '../styles/indexStyle';
import stringsoflanguages from "../leng/stringsoflanguages";


export default TutorialPage = ({}) => {
    const {
        DuringPoliceCheck,
        CircularOfDecember,
        ThePoliceDoNotHaveSpecial,
        HowToFilm,
        ConductNeutralTestimonialVideo,
        DoNotCommentWhileFilming,
        TryToFilmAllTheClues,
        TheIdealIsThatThereAreSeveral
    } = stringsoflanguages;
    return (
        <ScrollView style={styles.container}>
            <Container style={styles.LoginBlock}>
                <LinearGradient colors={['#030b10', '#12314d', '#12314d', '#030b10']} style={IndexStyle.gradient}>
                </LinearGradient>
                <ScrollView style={styles.box}>
                    <Text style={styles.title}>{DuringPoliceCheck}</Text>
                    <Text style={styles.text}>{CircularOfDecember}</Text>
                    <Text style={styles.text}>{ThePoliceDoNotHaveSpecial}</Text>
                    <Text style={styles.title2}>{HowToFilm}</Text>
                    <ScrollView>
                        <View style={styles.ul}>
                            <View style={styles.li}>
                                <Icon
                                    name="lens"
                                    color="#ff0000"
                                    size={12}
                                />
                            </View>
                            <View style={styles.liText}>
                                <Text style={styles.text}>
                                    {ConductNeutralTestimonialVideo}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.ul}>
                            <View style={styles.li}>
                                <Icon
                                    name="lens"
                                    color="#ff0000"
                                    size={12}
                                />
                            </View>
                            <View style={styles.liText}>
                                <Text style={styles.text}>
                                    {DoNotCommentWhileFilming}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.ul}>
                            <View style={styles.li}>
                                <Icon
                                    name="lens"
                                    color="#ff0000"
                                    size={12}
                                />
                            </View>
                            <View style={styles.liText}>
                                <Text style={styles.text}>
                                    {TryToFilmAllTheClues}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.ul}>
                            <View style={styles.li}>
                                <Icon
                                    name="lens"
                                    color="#ff0000"
                                    size={12}
                                />
                            </View>
                            <View style={styles.liText}>
                                <Text style={styles.text}>
                                    {TheIdealIsThatThereAreSeveral}
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
            </Container>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        flex: 1,
        backgroundColor: 'red',
    },
    LoginBlock: {
        flex: 1,
        width: width,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5 + '%',
        paddingRight: 5 + '%',
        paddingTop: 10 + '%',
        position: 'relative'
    },
    box: {
        flex: 1,
        width: '100%',
        backgroundColor: "rgba(5, 17, 25, 0.3)",
        paddingTop: 11,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 6,
    },
    ul: {
        width: 90 +'%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 7
    },
    li: {
        width: 50,
        height: 100 + '%',
        marginTop: 8,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    liText: {
    },
    title: {
        color: "#ffffff",
        fontFamily: "Muli",
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 27,
    },
    title2: {
        color: "#ffffff",
        fontFamily: "Muli",
        fontSize: 17,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 20,
    },
    text: {
        color: "#ffffff",
        fontFamily: "Muli",
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 26,
    }
});