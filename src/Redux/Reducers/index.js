import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AuthReducer from './AuthReducer';
import loadingReducer from './loadingReducer';
import onboardingReducer from './onboardingReducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './../Sagas/index';
import {createStore, applyMiddleware, combineReducers} from 'redux';

const sagaMiddleware = createSagaMiddleware();

const onBoardPersistConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
  whitelist: 'onboarding',
};

const AuthPersistConfig = {
  key: 'Auth',
  storage: AsyncStorage,
  whitelist: ['userData', 'token'],
};

const reducers = {
  onboarding: persistReducer(onBoardPersistConfig, onboardingReducer),
  Auth: persistReducer(AuthPersistConfig, AuthReducer),
  isloading: loadingReducer,
  // sagas: applyMiddleware(sagaMiddleware),
};

export const store = createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware),
);

// export const store = configureStore({
//   reducer: {
//     onboarding: persistReducer(onBoardPersistConfig, onboardingReducer),
//     Auth: persistReducer(AuthPersistConfig, AuthReducer),
//     isloading: loadingReducer,
//   },
//   middleware: {
//     sagaMiddleware,
//   },
//   // sagas: applyMiddleware(sagaMiddleware),
// });
export const persistor = persistStore(store);
// then run the saga
sagaMiddleware.run(mySaga);
