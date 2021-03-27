//NON REDUX PERSIST CONFIGURATION
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../config/ReactotronConfig';
import combineReducers from './reducers';
import { rootSaga } from './sagas';

let store;

if (!__DEV__) {
    // Middleware: Redux Saga
    sagaMiddleware = createSagaMiddleware();
    middleware = applyMiddleware(sagaMiddleware);
    // Redux: Store
    store = createStore(
        combineReducers,
        middleware,
    )
} else {
    sagaMonitor = Reactotron.createSagaMonitor();
    sagaMiddleware = createSagaMiddleware({ sagaMonitor });
    middleware = applyMiddleware(sagaMiddleware);
    enhancer = compose(middleware, Reactotron.createEnhancer());
    store = createStore(combineReducers, enhancer)
}

sagaMiddleware.run(rootSaga);

export { store };



// //REDUX PERSIST CONFIGURATION
// import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Reactotron from '../config/ReactotronConfig';
// import combineReducers from './reducers';
// import { rootSaga } from './sagas';

// let store, persistor, persistConfig;

// persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     blacklist: ['globalReducer',],      //these reduce will not persist data
//     whitelist: ['authReducer', 'profileReducer', 'myInventoryReducer']         //these reduce will persist data
// };

// if (!__DEV__) {
//     // Middleware: Redux Saga
//     sagaMiddleware = createSagaMiddleware();
//     middleware = applyMiddleware(sagaMiddleware);
//     persistedReducer = persistReducer(persistConfig, combineReducers);
//     // Redux: Store
//     store = createStore(
//         persistedReducer,
//         middleware,
//     )
// } else {
//     sagaMonitor = Reactotron.createSagaMonitor();
//     sagaMiddleware = createSagaMiddleware({ sagaMonitor });
//     middleware = applyMiddleware(sagaMiddleware);
//     enhancer = compose(middleware, Reactotron.createEnhancer());
//     persistedReducer = persistReducer(persistConfig, combineReducers);
//     store = createStore(persistedReducer, enhancer)
// }

// sagaMiddleware.run(rootSaga);
// persistor = persistStore(store);

// export { store, persistor };


