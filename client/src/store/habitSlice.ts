import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Habit {
  id: number;
  name: string;
  description: string;
  consistency: string[];
}

interface HabitsState {
  habits: Habit[];
}

const initialState: HabitsState = {
  habits: [],
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.habits.push(action.payload);
    },
    updateHabit: (state, action: PayloadAction<Habit>) => {
      const index = state.habits.findIndex(habit => habit.id === action.payload.id);
      if (index !== -1) {
        state.habits[index] = action.payload;
      }
    },
    deleteHabit: (state, action: PayloadAction<number>) => {
      state.habits = state.habits.filter(habit => habit.id !== action.payload);
    },
  },
});

export const { addHabit, updateHabit, deleteHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
