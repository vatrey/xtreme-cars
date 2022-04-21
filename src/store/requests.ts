import axios from "axios";

export function requestGetCars(path:string) {
    return axios.request({
        method: "get",
        url: "http://localhost:8080/cars" + path,
        auth: {
            username: "Hasher",
            password: "L#(qc{f}TaJu4%4k"
        }
    });
}

export function requestGetCar(id:string) {
    return axios.request({
        method: "get",
        url: "http://localhost:8080/cars/details/" + id,
        auth: {
            username: "Hasher",
            password: "L#(qc{f}TaJu4%4k"
        }
    });
}