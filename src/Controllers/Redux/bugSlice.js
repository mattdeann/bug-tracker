import { createSlice } from '@reduxjs/toolkit';
import { retrieveBugs } from '../dummyBugController';

const slice = createSlice({
  name: "bug",
  intialState: [],
  reducers: {
    getBugs: state => retrieveBugs(),
    createBugs: (state, action) => {

    },
    updateBugs: (state, actions) => {

    },
    markComplete: (state, action) => {

    }
  }
})

export default slice.reducer;

export const { getBugs, createBugs, updateBugs } = slice.actions;