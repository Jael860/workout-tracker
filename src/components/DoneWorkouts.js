import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import Colors from '../assets/Colors';

class DoneWorkouts extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View>
          <Text style={styles.title}>DONE</Text>
        </View>
        <ScrollView
          style={styles.scrollView}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {this.props.list.map((workout) => {
            return (
              <Image
                key={workout.name}
                style={styles.workoutImg}
                source={workout.img}
              />
            );
          })}
        </ScrollView>
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
  workoutImg: {
    borderRadius: 15,
    height: 60,
    width: 60,
    marginRight: 15,
  },
  scrollView: {
    marginTop: 12,
  },
});

const mapStateToProps = (state) => {
  return {
    list: state.doneWorkouts,
  };
};

export default connect(mapStateToProps, null)(DoneWorkouts);
