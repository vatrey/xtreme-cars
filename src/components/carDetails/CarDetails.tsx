import { Box, Button, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCar } from "../../store/reducers/carReducer";
import "./CarDetails.scss";

function CarDetails(): JSX.Element {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const car = useSelector((state: any) => state.carReducer);
    const queryParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        if (queryParams.get('id') === null) navigate("/");
        else dispatch(getCar(queryParams.get('id')));
    }, [dispatch]);

    return (
        <Box>
            <Box style={{ height: "5rem" }}></Box>
            <Box className="main-body">
                <Box className="white-back">
                    <Box className="sub-main-body">
                        <Box>
                            <p className="grid-head">{car?.specifications?.name}</p>
                        </Box>
                        <Box>
                            <Grid className="divider" container>
                                <Grid className="details-img" item>

                                    <img className="details-img-real" src={car?.specifications?.image} alt=""></img>

                                </Grid>
                                <Grid className="desc" item>
                                    <Box>
                                        <p className="grid-head">Car Specification</p>
                                    </Box>
                                    <Box className="details-group">
                                        <p className="details-label">Fuel Type</p>
                                        <p className="details-value">{car?.specifications?.fuel_type}</p>
                                    </Box>
                                    <Box className="details-group">
                                        <p className="details-label">Engine</p>
                                        <p className="details-value">{car?.specifications?.engine_cc} CC</p>
                                    </Box>
                                    <Box className="details-group">
                                        <p className="details-label">Torque</p>
                                        <p className="details-value">{car?.specifications?.torque}</p>
                                    </Box>
                                    <Box className="details-group">
                                        <p className="details-label">Acceleration</p>
                                        <p className="details-value">{car?.specifications?.acceleration}</p>
                                    </Box>
                                    <Box className="details-group">
                                        <p className="details-label">Top Speed</p>
                                        <p className="details-value">{car?.specifications?.top_speed}</p>
                                    </Box>
                                    <Box className="details-group">
                                        <p className="details-label">Variants</p>
                                        {
                                            car?.specifications?.variant.map((vari: string) => {
                                                return (
                                                    <p className="details-value">
                                                        {vari}
                                                    </p>
                                                );
                                            })
                                        }
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid className="divider" container>
                                <Grid className="details-img" item>
                                    <img className="details-img-real" src={car?.exterior?.image} alt=""></img>
                                </Grid>
                                <Grid className="desc" item>
                                    <Box className="grid-head">
                                        <span>Exteriors</span>
                                    </Box>
                                    <Box className="car-color" style={{ backgroundColor: car?.exterior?.color }}>

                                    </Box>
                                    <Box className="details-group">
                                        <p className="details-label">Length</p>
                                        <p className="details-value">{car?.exterior?.length}</p>
                                    </Box>
                                    <Box className="details-group">
                                        <p className="details-label">Width</p>
                                        <p className="details-value">{car?.exterior?.width}</p>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid className="divider" container>
                                <Grid className="details-img" item>
                                    <img className="details-img-real" src={car?.interior?.image1} alt=""></img><br />
                                    <img className="details-img-real" src={car?.interior?.image2} alt=""></img>
                                </Grid>
                                <Grid className="desc" item>
                                    <Box className="grid-head">
                                        <span>Interiror Finishes</span>
                                    </Box>
                                    <Box className="car-color" style={{ backgroundColor: car?.interior?.color }}>

                                    </Box>
                                    <Box className="details-value">
                                        <ul>
                                            {
                                                car?.interior?.text.map((interiorPoint: string) => {
                                                    return (
                                                        <p>
                                                            {interiorPoint}
                                                        </p>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box >
                        <Box id="btn-con">
                            <Button id="purchase" variant="contained" size="large" onClick={() => navigate("/booking?id=" + queryParams.get('id'))}> Submit</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box   >
    );
}

export default CarDetails;