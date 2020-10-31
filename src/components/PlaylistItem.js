import React, {Component} from 'react';
import {View, Pressable, Image, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Colors from '../assets/Colors';

import TagPill from './TagPill';
import {setActiveWorkout} from '../actions';

class PlaylistItem extends Component {
  onPress = () => {
    this.props.setActiveWorkout(this.props.workout);
  };
  render() {
    const workout = this.props.workout;
    return (
      <Pressable
        style={[styles.container, this.props.style]}
        onPress={this.onPress}>
        <View style={styles.imageContainer}>
          <Image style={styles.img} source={workout.img} />
        </View>
        <View style={styles.detailContainer}>
          <TagPill tag={workout.tag} />
          <Text style={styles.name}>{workout.name}</Text>
        </View>
      </Pressable>
    );
  }
}

// TODO: Put a smaller TagPill so that it is possible to have
// two row workout name.

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
  },
  img: {
    borderRadius: 15,
    height: 75,
    width: 75,
    marginRight: 40,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 10,
  },
  detailContainer: {
    flex: 3,
  },
});

const mapDispatchToProp = {
  setActiveWorkout,
};

export default connect(null, mapDispatchToProp)(PlaylistItem);
