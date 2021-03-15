import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: "auth",
  initialState: {
    admin: false,
    loggedIn: false
  },
  reducers: {
    signIn: (state, action) => {

    },
    signOut: (state) => {

    },
    createUser: (state, action) => {
      
    }
  }
})