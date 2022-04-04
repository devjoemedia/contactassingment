import { createStore, combineReducers } from "redux";
import config from "../firebase/config";
import userReducer from "../reducers/userReducer";
import authReducer from "../reducers/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
  contacts: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
