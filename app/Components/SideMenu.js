import React, { Component } from 'react';
import styles from '../styles/SideMenu.style';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity, Alert } from 'react-native';
import { DrawerActions, StackNavigator } from 'react-navigation';
import { Container, Content, ListItem, Text, Left, Header, Body, Thumbnail, Right, Button, StatusBar, Row } from 'native-base';
import stringsoflanguages from "../leng/stringsoflanguages";

import * as action from '../store/actions/users';

const {Home_N, StartVideo, MyProfile, Messages, MyVideos, Notifications, LegalDetails, Tutorial, Logout} = stringsoflanguages;

console.log('Home_N', Home_N)

class SideMenu extends Component {

  componentDidMount = () => {
    console.log('Home_N', Home_N)
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      navigationOptions: { header: null }
    });
    this.props.navigation.dispatch(navigateAction);
  }

  isExit = () => {
    Alert.alert(
      'do you want to exit application',
      '',
      [
        {
          text: 'Cancel',
          //onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.props.exit('data', this.props.user.data.token)},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <Container style={{ flexDirection: 'row', backgroundColor: '#030b10' }}>
        <Content style={[styles.container, { backgroundColor: '#051119', width: 80 + '%' }]}>
          <Header androidStatusBarColor="#030b10" style={{ display: 'none' }} />
          <ListItem avatar noBorder style={{ marginBottom: 20 }}>
            <Left >
                <Thumbnail source={require('../images/empty_avatar.jpg')} />
            </Left>
            <Body>
              <Text style={[styles.navItemStyle, { fontSize: 22 }]} onPress={this.navigateToScreen('Settings')}>{this.props.user.data.user.name}</Text>
              <Text style={styles.navItemStyle} note>{this.props.user.data.user.email}</Text>
            </Body>
            <Right>
              <TouchableOpacity onPress={this.navigateToScreen('Settings')}>
                <Thumbnail source={require('../images/settings.png')} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
            </Right>
          </ListItem>
          <Content>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/play-button.png')} style={{ width: 25, height: 25, marginRight: 3 }} />
              </Left>
              <Body style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() => this.navigateToScreen('Main')}>{StartVideo}</Text>
              </Body>
            </ListItem>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/user.png')} style={{ width: 25, height: 25, }} />
              </Left>
              <Body style={styles.navSectionStyle}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Profile')}>{MyProfile}</Text>
              </Body>
            </ListItem>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/envelope.png')} style={{ width: 25, height: 17, }} />
              </Left>
              <Body style={styles.navSectionStyle}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Messages')}>{Messages}</Text>
              </Body>
            </ListItem>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/play-button.png')} style={{ width: 25, height: 25, marginRight: 0 }} />
              </Left>
              <Body style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Myvideos')}>{MyVideos}</Text>
              </Body>
            </ListItem>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/notification.png')} style={{ width: 25, height: 25, marginRight: 0 }} />
              </Left>
              <Body style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Notification')}>{Notifications}</Text>
              </Body>
            </ListItem>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/plain.png')} style={{ width: 25, height: 25, marginRight: 0 }} />
              </Left>
              <Body style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('LegalDetails')}>{LegalDetails}</Text>
              </Body>
            </ListItem>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/settingsBook.png')} style={{ width: 25, height: 20, marginRight: 0 }} />
              </Left>
              <Body style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Tutorial')}>{Tutorial}</Text>
              </Body>
            </ListItem>
            <ListItem noBorder icon>
              <Left>
                <Thumbnail square source={require('../images/logout-icon.png')} style={{ width: 25, height: 20, marginRight: 0 }} />
              </Left>
              <Body style={styles.navSectionStyle}>
                <Text style={styles.navItemStyle} onPress={()=>this.isExit()}>{Logout}</Text>
              </Body>
            </ListItem>
          </Content>
        </Content>
      </Container>
    );
  }
}


mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    exit: (data, token) => {
      action.exit(dispatch, data, token)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)