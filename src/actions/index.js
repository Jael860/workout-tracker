export const setActiveWorkout = (payload) => {
  return {
    type: 'SET_ACTIVE_WORKOUT',
    payload,
  };
};

export const setCurrentWorkoutAsDone = (payload) => {
  return {
    type: 'SET_CURRENT_WORKOUT_AS_DONE',
  };
};
