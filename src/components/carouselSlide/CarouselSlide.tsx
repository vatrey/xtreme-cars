import { Box, Button, Grid, IconButton } from "@mui/material";
import LeftArrow from "../../assets/LeftArrow.svg";
import RightArrow from "../../assets/RightArrow.svg";
import "./CarouselSlide.scss";

interface IProps {
    backgroundImage: string,
    arrowFunction: Function
}

function CarouselSlide(props: IProps): JSX.Element {

    return (
        <Box id="slide" sx={{ backgroundImage: "url(" + props.backgroundImage + ")" }}>
            <Grid id="carousel" container>
                <Grid id="carousel-item" item>
                    <IconButton onClick={() => props.arrowFunction("left")}>
                        <img src={LeftArrow} alt="" />
                    </IconButton>
                </Grid>
                <Grid id="carousel-item" item>
                    <p id="home-head">FIND YOUR DREAM CAR</p>
                    <form>
                        <input id="carousel-input"></input>
                        <Button id="search">Search</Button>
                    </form>
                </Grid>
                <Grid id="carousel-item" item>
                    <IconButton onClick={() => props.arrowFunction("right")}>
                        <img src={RightArrow} alt="" />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CarouselSlide;