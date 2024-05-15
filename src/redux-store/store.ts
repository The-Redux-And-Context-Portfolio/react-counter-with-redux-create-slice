/* node modules */
import { configureStore } from "@reduxjs/toolkit";

/* app imports */
import centralReducer from "./cominbed-reducers";

const defaultState = {
  sound: true,
  counter: 0
};

/**
  * redux store as been created using the configureStore method from redux-toolkit. the 'devTools' options has been kept 
  * active since this is only a demo-app.
  */
function createReduxStore(preloadedState = defaultState) {
  return configureStore({
    reducer: centralReducer(),
    devTools: true,
    preloadedState
  });
}

/**
  * these are created as reusable types in the application. this is also what was recommended  as a part of the redux 
  * documentation.
  */
export default createReduxStore;
export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
