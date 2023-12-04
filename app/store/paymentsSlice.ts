import {createSlice} from '@reduxjs/toolkit';
import { SocialPayoutOutDTO } from '../types/components';


export type InitialState = {
  entities: SocialPayoutOutDTO[];
};

const initialState: InitialState = {
  entities: [],
};

const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    // taskAdded(state, action) {
    //   const todo = action.payload;
    //   state.entities.push(todo);
    // },
    // taskToggled(state, action) {
    //   const todoId = action.payload;
    //   const todo = state.entities.find(e => e.id === todoId);
    //   if (todo) {
    //     todo.done = !todo.done;
    //   }
    // },
    // completedTasksCleared(state) {
    //   state.entities = state.entities.filter(todo => !todo.done);
    // },
  },
});

// export const {taskAdded, taskToggled, completedTasksCleared} =
// paymentsSlice.actions;

export default paymentsSlice.reducer;
