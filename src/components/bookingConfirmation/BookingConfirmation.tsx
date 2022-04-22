import { Box, Button } from "@mui/material";
import "./BookingConfirmation.scss";
import Bmw from "../../assets/BMW - Explore.svg";
import Bmwx5 from "../../assets/dummy.svg";
import { useNavigate } from "react-router-dom";

function BookingConfirmation(): JSX.Element {

    const navigate = useNavigate();

    return ( 
        <Box>
            <Box style={{ height: "5rem" }}></Box>
            <Box className="main-body">
                <Box className="white-back">
                    <Box className="sub-main-body">
                        <Box id="merge">
                            <Box className="success-box">
                                <img src={Bmwx5} alt="" />
                                <p>Booking <span id="heavy">Successfull</span></p>
                                <p>
                                    <span id="download-link">
                                        Download
                                    </span>
                                    <span id="heavy">
                                        &nbsp; the booking summary
                                    </span>
                                </p>
                            </Box>
                            <Box id="parent-overlay">
                                <img id="bmw" src={Bmw} alt="" />
                                <Box id="bkg" >
                                <Button onClick={() => navigate("/")}><span id="explore-more">Explore More</span></Button>
                                </Box>
                            </Box>
                            <Box id="spacing"/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
export default BookingConfirmation;