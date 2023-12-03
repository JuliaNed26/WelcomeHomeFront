import {createSlice} from '@reduxjs/toolkit';

export type Payment = {
  Id: number;
  Name:  string;
  Description: string;
  Amount: number;
  UserCategories: any; //wait until backenders start theit work
  PaymentSteps: any; //wait until backenders start theit work
};


// ICollection <Guid> UserCategoriesId { get; set; }

// ICollection <StepInDTO> PaymentSteps { get; set; }



export type InitialState = {
  entities: Payment[];
};

const initialState: InitialState = {
  entities: [
    {
      Id: 0,
      Name: "Aboba",
      Description: "",
      Amount: ,
      UserCategories: , 
      PaymentSteps: ,
    },
    {
      Id: 1,
      Name: "Aboba",
      Description: "",
      Amount: ,
      UserCategories: , 
      PaymentSteps: ,
    },
  ],
};

const tasksSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    taskAdded(state, action) {
      const todo = action.payload;
      state.entities.push(todo);
    },
    taskToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities.find(e => e.id === todoId);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    completedTasksCleared(state) {
      state.entities = state.entities.filter(todo => !todo.done);
    },
  },
});

export const {taskAdded, taskToggled, completedTasksCleared} =
  tasksSlice.actions;

export default tasksSlice.reducer;
