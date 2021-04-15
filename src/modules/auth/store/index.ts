import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthRequest } from "../modals/auth.modal";
import API from "../services";

const initialState = {
  currentUser: {},
  accessToken: null,
};

export const login = createAsyncThunk(
  "authentication/login",
  async (params: AuthRequest) => {
    try {
      const res = await API.login(params);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const store = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = {};
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
      state.currentUser = action.payload?.user;
      state.accessToken = action.payload?.accessToken;
    });
  },
});

const { actions, reducer } = store;
export const { logout } = actions;
export default reducer;
