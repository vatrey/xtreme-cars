import { BottomNavigation, BottomNavigationAction, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../../store/reducers/carsReducer";
import { Car } from "../../types/Types";
import Card from "../card/Card";
import "./CarListing.scss";

function CarListing(): JSX.Element {

    const [category, setCategory] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        let path = "";
        switch (category) {
            case 1:
                path = "/sedan";
                break;
            case 2:
                path = "/SUV";
                break;
            case 3:
                path = "/hatchback";
                break;
            case 4:
                path = "/Coupe";
                break;
        }
        dispatch(getAllCars(path));
    }, [category]);

    const cars = useSelector((state: any) => state.carsReducer);

    let carsIterate: JSX.Element[] = cars.map((car: Car) => {
        return (
            <Grid item key={car.id}>
                <Card car={car} />
            </Grid>
        );
    });

    return (
        <Box>
            <Box style={{ height: "5rem" }}></Box>
            <Box className="main-body">
                <Box className="white-back">
                    <Box className="sub-main-body">
                        <Box className="nav">
                            <BottomNavigation
                                showLabels
                                value={category}
                                onChange={(event, newValue) => { setCategory(newValue) }}
                            >
                                <BottomNavigationAction label="View All" />
                                <BottomNavigationAction label="Sedan" />
                                <BottomNavigationAction label="SUV" />
                                <BottomNavigationAction label="HatchBack" />
                                <BottomNavigationAction label="Coupe" />
                            </BottomNavigation>
                        </Box>
                        <Box id="count-result"> {cars.length} total results</Box>
                        <Box id="grid">
                            <Grid id="car-list" container>
                                {carsIterate}
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CarListing;