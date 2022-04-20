import { Grid, Box } from "@mui/material";

import Arrow from "../../assets/Arrow.svg";
import "./Card.scss";

function Card(): JSX.Element {
    return (
        <Box className="card">
            <Box>
                
            </Box>
            <Box className="des">
                <p>BMW X3</p>
                <Grid id="price-arrow" container >
                    <Grid item>
                        669.69 lakh onward
                    </Grid>
                    <Grid item>
                    <img src={Arrow} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Card;