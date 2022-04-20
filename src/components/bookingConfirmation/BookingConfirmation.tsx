import { Box, Grid } from "@mui/material";
import "./BookingConfirmation.scss";
import Bmw from "../../assets/BMW - Explore.svg";

function BookingConfirmation(): JSX.Element {
    return (
        <Box className="main-body">
            <Box className="white-back">
                <Box className="sub-main-body">
                    <Box id="merge">
                        <Box className="success-box">
                            {/* <img src={Bmwx5} alt="" /> */}
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
                            <Box id="bkg" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
export default BookingConfirmation;