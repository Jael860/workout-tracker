import React, {Component} from 'react';
import {
  View,
  Pressable,
  TextInput,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';

import Colors from '../assets/Colors';
import {setCurrentWorkoutAsDone} from '../actions';

import {connect} from 'react-redux';

class WorkoutPill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reps: '7',
      weight: '142.5',
    };
  }
  // TODO: manange the parser manually.
  onChangeWeightText = (newWeight) => {
    if (newWeight.length >= 2 && newWeight[newWeight.length - 1] === '.') {
      this.setState({weight: newWeight});
      return;
    }
    newWeight = Number(newWeight);
    if (Number.isNaN(newWeight)) {
      return;
    }
    newWeight = Math.round(newWeight * 100) / 100;
    if (newWeight >= 1000) {
      return;
    }
    this.setState({weight: newWeight.toString()});
  };

  onChangeRepText = (newRep) => {
    newRep = Number(newRep);
    if (!Number.isInteger(newRep) || newRep > 999) {
      return;
    }
    this.setState({reps: newRep.toString()});
  };

  onPressDownWeight = () => {
    const newWeight = Number(this.state.weight) - 1;
    if (newWeight >= 0) {
      this.setState({weight: newWeight.toString()});
    }
  };

  onPressUpWeight = () => {
    const newWeight = Number(this.state.weight) + 1;
    if (newWeight < 1000) {
      this.setState({weight: newWeight.toString()});
    }
  };

  onPressDownRep = () => {
    const newRep = Number(this.state.reps) - 1;
    if (newRep >= 0) {
      this.setState({reps: newRep.toString()});
    }
  };

  onPressUpRep = () => {
    const newRep = Number(this.state.reps) + 1;
    if (newRep < 1000) {
      this.setState({reps: newRep.toString()});
    }
  };

  onImgPress = () => {
    this.props.setCurrentWorkoutAsDone();
  };

  render() {
    const {reps, weight} = this.state;
    return (
      <View style={[styles.container, this.props.style]}>
        <Pressable style={styles.imageContainer} onPress={this.onImgPress}>
          <ImageBackground
            source={this.props.img}
            style={styles.workoutBackgroundImage}
            imageStyle={styles.workoutImage}
          />
        </Pressable>
        <View style={styles.contentContainer}>
          <View style={styles.contentStylingContainer}>
            <View style={styles.repsContainer}>
              <Pressable
                onPress={this.onPressDownRep}
                style={styles.arrowContainer}>
                <Text style={[styles.contentText, styles.arrowText]}>▼</Text>
              </Pressable>
              <View style={styles.dataContainer}>
                <TextInput
                  style={[styles.contentText, styles.contentNumbers]}
                  editable
                  maxLength={3}
                  value={reps}
                  onChangeText={this.onChangeRepText}
                  keyboardType="numeric"
                />
                <Text style={styles.contentText}>{' reps'}</Text>
              </View>
              <Pressable
                onPress={this.onPressUpRep}
                style={styles.arrowContainer}>
                <Text style={[styles.contentText, styles.arrowText]}>▲</Text>
              </Pressable>
            </View>
            <View style={styles.weightContainer}>
              <Pressable
                onPress={this.onPressDownWeight}
                style={styles.arrowContainer}>
                <Text style={[styles.contentText, styles.arrowText]}>▼</Text>
              </Pressable>
              <View style={styles.dataContainer}>
                <TextInput
                  style={[styles.contentText, styles.contentNumbers]}
                  editable
                  maxLength={6}
                  value={weight}
                  onChangeText={this.onChangeWeightText}
                  keyboardType="numeric"
                />
                <Text style={styles.contentText}>{' lbs'}</Text>
              </View>
              <Pressable
                onPress={this.onPressUpWeight}
                style={styles.arrowContainer}>
                <Text style={[styles.contentText, styles.arrowText]}>▲</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    shadowColor: Colors.purple,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 20,
      width: 0,
    },
    shadowRadius: 10,
  },
  imageContainer: {
    flex: 1,
  },
  workoutBackgroundImage: {
    flex: 1,
  },
  workoutImage: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  contentContainer: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Colors.purple,
    flex: 1,
  },
  contentStylingContainer: {
    marginLeft: 15,
    marginRight: 15,
    flex: 1,
  },
  repsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: Colors.gray,
    borderTopWidth: 1.5,
  },
  contentText: {
    color: Colors.boneWhite,
    fontSize: 15,
    fontWeight: 'bold',
  },
  contentNumbers: {
    fontSize: 23,
    paddingTop: 0,
    paddingBottom: 0,
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  arrowContainer: {},
  arrowText: {
    fontSize: 20,
  },
});

const mapDispatchToProp = {
  setCurrentWorkoutAsDone,
};

export default connect(null, mapDispatchToProp)(WorkoutPill);
