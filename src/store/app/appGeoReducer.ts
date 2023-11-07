import { createSlice } from '@reduxjs/toolkit';
import { StateType } from '../store';

interface geo {
  accuracy: number;
  altitude: number;
  altitudeAccuracy: number;
  heading: number;
  latitude: number;
  longitude: number;
  speed: number;
}

type geoType = geo | null;

const initialState = {
  geo: null as geoType,
};

const appGeoReducer = createSlice({
  name: 'appGeoState',
  initialState,
  reducers: {
    setGeo: (state, action) => {
      state.geo = action.payload;
    },
  },
});

export const { setGeo } = appGeoReducer.actions;

export const appGeoSelector = (state: StateType) => state.appGeo;

export default appGeoReducer.reducer;
