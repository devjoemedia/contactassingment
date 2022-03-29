import { createStore, applyMiddleware, compose } from "redux";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import config from "../firebase/config";
import { reducer } from "../reducers/reducers";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reactReduxFirebase(config),
    reduxFirestore(config)
  )
);

export default store;
