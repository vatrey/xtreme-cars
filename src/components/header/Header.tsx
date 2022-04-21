import { Box, Button, Grid } from "@mui/material";
import "./Header.scss";
import logo from "../../assets/Union.svg";
import { useNavigate } from "react-router-dom";

function Header(): JSX.Element {

    const navigate = useNavigate();

    return (
        <Box className="header">
            <Grid className="flex-chunk" container spacing={5}>
                <Grid item xs={6}>
                    <Box>
                        <Grid className="flex-chunk" container>
                            <Grid className="head-links" item>
                                <Box className="logo">
                                    <Button onClick={() => navigate("/")}>
                                        <img src={logo} alt="" />
                                        <span className="header-links">XTREME<span id="heavy">CARS</span></span>
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid className="head-links" item>
                                <Button onClick={() => navigate("/cars")}>
                                    <span className="header-links">NEW CARS</span>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <Grid className="flex-chunk" container>
                            <Grid className="head-links" item>
                                <Button onClick={() => navigate("/cars")}>
                                    <span className="header-links">USED CARS</span>
                                </Button>
                            </Grid>
                            <Grid className="head-links" item>
                                <Button>
                                    <span className="header-links">MY PROFILE</span>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;