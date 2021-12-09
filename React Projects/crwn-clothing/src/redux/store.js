import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { presistStore } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

import rootReducer from "./root-reducer";

const middlewares = [logger]; // this way can add more middleware

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
