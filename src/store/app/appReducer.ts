import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  geo: null,
};

const appReducer = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setGeo: (state, action) => {
      state.geo = action.payload;
    },
  },
});

export const { setGeo } = appReducer.actions;

export const appSelector = (state) => state.app;

export default appReducer.reducer;
