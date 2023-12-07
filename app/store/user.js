import { createSlice } from "@reduxjs/toolkit";

UserSlice = createSlice({
  name: "user",
  initialState: {
    firstName: null,
    LastName: null,
    email: null,
    homeTown: null,
    phone: null,
    avatarUrl: null,
    events: [],
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setHomeTown: (state, action) => {
      state.homeTown = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setEvents: (state, action) => {
      state.events = [...state.events, action.payload];
    },
  },
});

export default UserSlice;
