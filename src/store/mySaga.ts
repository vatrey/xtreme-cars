import { takeLatest } from "redux-saga/effects";
import { getCarHandler, getCarsHandler } from "./handlers"
import { GET_CAR } from "./reducers/carReducer";
import { GET_ALL_CARS } from "./reducers/carsReducer";

export function* mySaga() {
    yield takeLatest(GET_ALL_CARS, getCarsHandler);
    yield takeLatest(GET_CAR, getCarHandler);
}