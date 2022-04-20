import { Box, Grid, Link } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.scss";

function Footer(): JSX.Element {
    return (
        <Box className="footer">
            <Grid container spacing={8}>
                <Grid item >
                    <Box className="links-head">Contact</Box>
                    <Box>
                        <p>
                            Request a Test Drive <br/>
                            Book Car <br/>
                            Career <br/>
                            Contact Us<br/>
                        </p>
                    </Box>
                </Grid>
                <Grid item>
                    <Box className="links-head">Xtremecars:</Box>
                    <Box>
                        <p>12th Floor, Vishwaroop IT <br/>Park, Sector 32, Vashi, <br/>Navi Mumbai-400705,<br/> Maharashtra, India.</p>
                        <p>Phone: +91 (22) 612 <br/>800000</p>
                    </Box>
                </Grid>
                <Grid item>
                    <Box className="links-head">Legal</Box>
                    <Box>
                        <p>
                            Legal Disclaimer/Imprint<br/>
                            Privacy Policy<br/>
                            Cokkie Policy<br/>
                        </p>
                    </Box>
                </Grid>
                <Grid item>
                    <Box className="links-head">Connect with us</Box>
                    <Box >
                      <FacebookRoundedIcon fontSize="large" /><br/>
                      <TwitterIcon fontSize="large" /> <br/>
                      <InstagramIcon fontSize="large" /> <br/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;