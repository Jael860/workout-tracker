import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {connect} from 'react-redux';

import Colors from '../assets/Colors';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spannedTime: 0,
    };
  }

  componentDidUpdate() {
    if (this.props.currentWorkout && !this.interval) {
      this.interval = setInterval(
        () =>
          this.setState({
            spannedTime: this.state.spannedTime + 1,
          }),
        1000,
      );
    }
    if (
      !this.props.currentWorkout &&
      this.props.nextWorkouts.length === 0 &&
      this.interval
    ) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  formatTime(time) {
    const sec = time % 60;
    const mini = Math.floor(time / 60);
    const secStr = sec < 10 ? `0${sec}` : sec;
    const miniStr = mini < 10 ? `0${mini}` : mini;
    return `${miniStr}:${secStr}`;
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View>
          <Text style={styles.title}>TIME</Text>
        </View>
        <View>
          <Text style={styles.content}>
            {this.formatTime(this.state.spannedTime)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  title: {
    color: Colors.gray,
    fontSize: 18,
    letterSpacing: 3,
  },
  content: {
    color: Colors.black,
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 15,
  },
});

const mapStateToProps = (state) => {
  return {
    currentWorkout: state.currentWorkout,
    nextWorkouts: state.nextWorkouts,
  };
};

export default connect(mapStateToProps, null)(Timer);
