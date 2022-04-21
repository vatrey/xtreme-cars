import { BottomNavigation, BottomNavigationAction, Box, Grid, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../../store/reducers/carsReducer";
import { Car } from "../../types/Types";
import Card from "../card/Card";
import CarouselSlide from "../carouselSlide/CarouselSlide";
import "./Home.scss";

function Home(): JSX.Element {

    const [categoryAndCarouselPage, setCategoryOrCarouselPage] = useState({ category: 0, carouselPage: 0 });
    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState<'down' | 'up' | 'left' | 'right'>('up');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    const cars = useSelector((state: any) => state.carsReducer);

    let carsIterate: JSX.Element[] = cars?.slice(0, 4)?.map((car: Car) => {
        return (
            <Grid item key={car.id}>
                <Card car={car} />
            </Grid>
        );
    });

    let arrowKeyHandler = (direction: string) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (categoryAndCarouselPage.carouselPage + increment + cars.length) % cars.length;

        if(direction === 'left') setSlideDirection('right');
        else setSlideDirection('left');
        setSlideIn(false);

        setTimeout(() => {
            setCategoryOrCarouselPage((prevState) => ({ ...prevState, carouselPage: newIndex }));
            if(direction === 'left') setSlideDirection('right');
            else setSlideDirection('left');
            setSlideIn(true);
        }, 500);
    }

    return (
        <Box>
            <Box style={{ height: "5rem" }}></Box>
            <Box className="main-body">
                <Box className="white-back">
                    <Box className="sub-main-body">
                        <Box>
                        <Slide in={slideIn} direction={slideDirection}>
                                <Box>
                                    <CarouselSlide
                                        backgroundImage={cars[categoryAndCarouselPage.carouselPage]?.image}
                                        arrowFunction={arrowKeyHandler}
                                    />
                                </Box>
                            </Slide>
                        </Box>
                        <Box>
                            <p id="featured-cars">Featured Cars</p>
                        </Box>
                        <Box className="nav">
                            <BottomNavigation
                                showLabels
                                value={categoryAndCarouselPage.category}
                                onChange={(event, newValue) => { setCategoryOrCarouselPage((prevState) => ({ ...prevState, category: newValue })) }}
                            >
                                <BottomNavigationAction label="Popular" />
                                <BottomNavigationAction label="Just Launched" />
                                <BottomNavigationAction label="Upcoming" />
                            </BottomNavigation>
                        </Box>
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

export default Home;