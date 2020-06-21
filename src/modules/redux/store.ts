import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "../../modules/redux/root-reducer";
import { REDUX_DEFAULT_STATE } from "./default-state";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  const store = createStore(persistedReducer, REDUX_DEFAULT_STATE, composeWithDevTools());
  const persistor = persistStore(store as any);

  return { store, persistor };
};
