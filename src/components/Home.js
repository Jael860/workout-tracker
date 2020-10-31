import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import Header from './Header';
import Timer from './Timer';
import DoneWorkouts from './DoneWorkouts';
import ActiveWorkout from './ActiveWorkout';
import Playlist from './Playlist';

import Colors from '../assets/Colors';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Header style={styles.header} />
          <View style={styles.doubleItemRow}>
            <Timer style={styles.rowElement} />
            <DoneWorkouts style={styles.rowElement} />
          </View>
          <ActiveWorkout style={styles.activeWorkout} />
          <Playlist style={styles.playlist} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.boneWhite,
  },
  container: {
    flex: 1,
    marginLeft: 18,
    marginRight: 18,
  },
  header: {
    flex: 2,
  },
  doubleItemRow: {
    flex: 4,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowElement: {
    flex: 1,
  },
  activeWorkout: {
    flex: 9,
    marginTop: 30,
  },
  playlist: {
    flex: 9,
    marginTop: 40,
  },
});

export default Home;
