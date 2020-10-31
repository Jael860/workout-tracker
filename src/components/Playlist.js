import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

import {connect} from 'react-redux';

import Colors from '../assets/Colors';

import PlaylistItem from './PlaylistItem';

class Playlist extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>NEXT</Text>
        </View>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            {this.props.list.map((workout) => (
              <PlaylistItem
                key={workout.name}
                style={styles.playlistItem}
                workout={workout}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

// TODO: maybe change to flatlist

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 7,
  },
  titleText: {
    color: Colors.gray,
    fontSize: 18,
    letterSpacing: 3,
  },
  scrollView: {
    flex: 1,
  },
  playlistItem: {
    marginBottom: 30,
  },
});

const mapStateToProps = (state) => {
  return {
    list: state.nextWorkouts,
  };
};

export default connect(mapStateToProps, null)(Playlist);
