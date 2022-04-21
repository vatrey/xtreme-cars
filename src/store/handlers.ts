import { call, put } from "redux-saga/effects" 
import { requestGetCar, requestGetCars } from "./requests";
import { setAllCars } from "./reducers/carsReducer";
import { setCar } from "./reducers/carReducer";

export function* getCarsHandler(action: any): any {
    try {
        const response = yield call(requestGetCars, action.path);
        const {data} = response;
        yield put(setAllCars(data));
    }
    catch(error) {
        console.log(error);
    }
}

export function* getCarHandler(action: any): any {
    try {
        const response = yield call(requestGetCar, action.id);
        const {data} = response;
        yield put(setCar(data));
    }
    catch(error) {
        console.log(error);
    }
}