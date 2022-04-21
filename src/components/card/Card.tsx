import { Grid, Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/Arrow.svg";
import { Car } from "../../types/Types";
import "./Card.scss";

interface IProps {
    car: Car
}

function Card(props: IProps): JSX.Element {

    const navigate = useNavigate();

    return (
        <Box className="card">
            <Box>
                <img id="car-image" src={props.car.image} alt="" />
            </Box>
            <Box className="des">
                <p id="car-model">{props.car.name}</p>
                <Grid id="price-arrow" container >
                    <Grid className="car-value" item>
                        {props.car.price} lakh onward
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => navigate("/car-details?id=" + props.car.id)}>
                            <img src={Arrow} alt="" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Card;