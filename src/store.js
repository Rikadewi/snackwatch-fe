import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);
export default store;
