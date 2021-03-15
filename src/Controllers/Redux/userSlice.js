import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: "user",
  intialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({name:"Matthew Dean"})
      state.push({name:"Friend Person"})

    }
  }
})

export default slice.reducer;

export const { getUser } = slice.actions;