import { CarDetails } from "../../types/Types";

export const GET_CAR: string = "GET_CAR";
export const SET_CAR: string = "SET_CAR";

export const getCar = (id: string | null) => ({
    type: GET_CAR,
    id: id
});

export const setCar = (data: CarDetails) => ({
    type: SET_CAR,
    payload: data
});

const reducer = (state = null, action: any) => {
    switch(action.type) {
        case SET_CAR : 
            const {payload} = action;
            return payload;
        default: 
            return state;
    }
}

export default reducer;