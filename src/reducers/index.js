const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_WORKOUT':
      let doneWorkouts = state.doneWorkouts;
      let currentWorkout = state.currentWorkout;
      if (currentWorkout) {
        doneWorkouts = [currentWorkout, ...doneWorkouts];
      }
      currentWorkout = action.payload;
      const idx = state.nextWorkouts.indexOf(action.payload);
      state.nextWorkouts.splice(idx, 1);
      let nextWorkouts = state.nextWorkouts;
      const newState = {
        ...state,
        doneWorkouts: [...doneWorkouts],
        currentWorkout: {...currentWorkout},
        nextWorkouts: [...nextWorkouts],
      };
      return newState;
    case 'SET_CURRENT_WORKOUT_AS_DONE':
      return {
        ...state,
        doneWorkouts: [state.currentWorkout, ...state.doneWorkouts],
        currentWorkout: null,
      };
    default:
      return state;
  }
};

export default reducer;
