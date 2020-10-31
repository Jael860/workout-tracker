import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../assets/Colors';

class TagPill extends Component {
  render() {
    const tag = this.props.tag;
    return (
      <View style={styles.tag}>
        <Text style={styles.tagText}>{tag}</Text>
      </View>
    );
  }
}

// TODO: Find a way to make a smaller version of this pill.
// Main issue is to figure out how to manage font size.

const styles = StyleSheet.create({
  tag: {
    backgroundColor: Colors.red,
    borderRadius: 18,
    alignSelf: 'flex-start',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 3,
    marginRight: 20,
  },
  tagText: {
    color: Colors.boneWhite,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default TagPill;
