import { createSlice } from "@reduxjs/toolkit";

upcomingEventSlice = createSlice({
  name: "upcomingEvents",
  initialState: { upcomingEvents: [] },
  reducers: {
    addNewEvent: (state, action) => {
      state.upcomingEvents = [...state.upcomingEvents, action.payload];
    },
  },
});

export default upcomingEventSlice;
