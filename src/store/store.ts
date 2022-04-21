import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "./mySaga";
import carReducer from "./reducers/carReducer";
import carsReducer from "./reducers/carsReducer";

const sagaMiddleWare = createSagaMiddleware();

const reducer = combineReducers({
    carsReducer: carsReducer,
    carReducer: carReducer,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(mySaga);

export default store;