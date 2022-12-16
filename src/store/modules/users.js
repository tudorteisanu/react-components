import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: {},
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.items = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setUsers, setFilter } = userSlice.actions;

export default userSlice.reducer;
