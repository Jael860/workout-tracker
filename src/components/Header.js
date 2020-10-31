import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import Colors from '../assets/Colors';

class Header extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Image
          style={styles.profile}
          source={require('../assets/images/profile_picture.jpg')}
        />
        <View style={styles.secondaryContainer}>
          <Text style={[styles.focusedText, styles.text]}>Workouts</Text>
          <Text style={[styles.unfocusedText, styles.text]}>Programs</Text>
        </View>
        <Image
          style={styles.notificationIcon}
          source={require('../assets/images/bell.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondaryContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  profile: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  notificationIcon: {
    tintColor: Colors.gray,
    height: 30,
    width: 30,
  },
  unfocusedText: {
    color: Colors.gray,
  },
  focusedText: {
    color: Colors.purple,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 30,
  },
});

export default Header;
