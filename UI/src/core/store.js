import rootReducer from './reducers/reducer'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';


import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export default store;