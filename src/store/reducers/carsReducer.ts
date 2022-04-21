import { Car } from "../../types/Types";

export const GET_ALL_CARS: string = "GET_ALL_CARS";
export const SET_ALL_CARS: string = "SET_ALL_CARS";

export const getAllCars = (path: string = "") => ({
    type: GET_ALL_CARS,
    path: path
});

export const setAllCars = (data: Car[]) => ({
    type: SET_ALL_CARS,
    payload: data
});

const intialState: Car[] = [];

const reducer = (state = intialState, action: any) => {
    switch(action.type) {
        case SET_ALL_CARS : 
            const {payload} = action;
            return (payload === undefined) ? [] : payload;
        default: 
            return state;
    }
}

export default reducer;