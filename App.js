import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/components/Home';
import {Provider} from 'react-redux';
import reducer from './src/reducers';
import {createStore} from 'redux';

const Stack = createStackNavigator();

const data = [
  {
    img: require('./src/assets/images/workout-1.jpg'),
    name: 'Bicep curls',
    tag: 'Arms',
  },
  {
    img: require('./src/assets/images/workout-2.jpg'),
    name: 'Russian Twists',
    tag: 'Abs',
  },
  {
    img: require('./src/assets/images/workout-3.jpg'),
    name: 'Lunges',
    tag: 'Legs',
  },
  {
    img: require('./src/assets/images/workout-4.jpg'),
    name: 'Mirror Time',
    tag: 'Abs',
  },
  {
    img: require('./src/assets/images/workout-5.jpg'),
    name: 'Barbell Arm Lift',
    tag: 'Arms',
  },
  {
    img: require('./src/assets/images/workout-6.jpg'),
    name: 'Resistance Band Triceps',
    tag: 'Arms',
  },
  {
    img: require('./src/assets/images/workout-7.jpg'),
    name: 'Leg Machine Weight Lift',
    tag: 'Legs',
  },
  {
    img: require('./src/assets/images/workout-8.jpg'),
    name: 'Squats',
    tag: 'Legs',
  },
];

const initialState = {
  currentTime: 0,
  doneWorkouts: [],
  currentWorkout: null,
  nextWorkouts: data,
};

const store = createStore(reducer, initialState);
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home">
          {() => (
            <Provider store={store}>
              <Home />
            </Provider>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
