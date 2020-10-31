import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Colors from '../assets/Colors';

import WorkoutPill from './WorkoutPill';
import TagPill from './TagPill';

class ActiveWorkout extends Component {
  render() {
    let activeWorkout = this.props.currentWorkout;
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>CURRENT</Text>
        </View>
        <View style={styles.contentContainer}>
          {activeWorkout ? (
            <>
              <View style={styles.workoutHeader}>
                <TagPill tag={activeWorkout.tag} />
                <Text style={styles.workoutText}>{activeWorkout.name}</Text>
              </View>
              <WorkoutPill style={styles.workoutPill} img={activeWorkout.img} />
            </>
          ) : (
            <>
              <Text style={styles.workoutText}>
                {this.props.nextWorkouts.length > 0
                  ? 'Pick your next workout!'
                  : 'Well Done!'}
              </Text>
              <View style={styles.workoutDoneContainer}>
                <Text style={styles.workoutDoneText}>
                  {this.props.nextWorkouts.length > 0
                    ? "Keep up the hard work! Don't forget to hydrate!"
                    : 'You did a great job!'}
                </Text>
              </View>
            </>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 8,
  },
  titleText: {
    color: Colors.gray,
    fontSize: 18,
    letterSpacing: 3,
  },
  workoutText: {
    fontSize: 26,
    color: Colors.black,
    fontWeight: 'bold',
  },
  workoutHeader: {
    flexDirection: 'row',
    flex: 4,
  },
  workoutPill: {
    flex: 12,
  },
  workoutDoneContainer: {
    flex: 1,
    backgroundColor: Colors.orange,
    opacity: 0.65,
    borderRadius: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  workoutDoneText: {
    color: Colors.boneWhite,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    currentWorkout: state.currentWorkout,
    nextWorkouts: state.nextWorkouts,
  };
};

export default connect(mapStateToProps, null)(ActiveWorkout);
