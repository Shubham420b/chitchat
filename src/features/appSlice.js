import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
    sTerm: "",
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
    setSterm: (state, action) => {
      state.sTerm = action.payload.sTerm;
    },
  },
});

export const { enterRoom, setSterm } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectRoomId = (state) => state.app.roomId;
export const selectSterm = (state) => state.app.sTerm;

export default appSlice.reducer;
