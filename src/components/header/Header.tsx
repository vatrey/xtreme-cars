import { Box, Grid } from "@mui/material";
import "./Header.scss";
import logo from "../../assets/Union.svg";

function Header(): JSX.Element {
    return (
        <Box className="header">
            <Grid className="flex-chunk" container spacing={5}>
                <Grid item xs={6}>
                    <Box>
                        <Grid className="flex-chunk" container>
                            <Grid className="head-links" item>
                                <Box className="logo">
                                    <img src={logo} alt="" />
                                    <span>XTREME<span id="heavy">CARS</span></span>
                                </Box>
                            </Grid>
                            <Grid className="head-links" item>
                                NEW CARS
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <Grid className="flex-chunk" container>
                            <Grid className="head-links" item>
                                USED CARS
                            </Grid>
                            <Grid className="head-links" item>
                                MY PROFILE
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;