import {
  combineReducers,
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import modules from "./modules";

const initialState: any = {
  sidebarShow: "responsive",
  loading: false,
  showModal: false,
};

const root = createSlice({
  name: "root",
  initialState,
  reducers: {
    SET(state, action) {
      const { variable, value } = action.payload;
      state[variable] = value;
    },
  },
});

const { actions, reducer } = root;
export const { SET } = actions;

const rootReducers = combineReducers({
  ...modules,
  root: reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authentication"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducers>;
export default store;
