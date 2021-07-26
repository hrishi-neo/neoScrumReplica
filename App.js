import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { mainReducer } from './src/redux/reducers'
import { createStore } from 'redux'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

};

const persistedReducer = persistReducer(persistConfig, mainReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigator />
      </PersistGate>
    </Provider>

  );
};

export default App;

