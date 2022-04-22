import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import "./Booking.scss";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCar } from "../../store/reducers/carReducer";
import { useNavigate } from "react-router-dom";

function Booking(): JSX.Element {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formState, setFormState] = useState({ nameValid: true, phoneValid: true});

    const car = useSelector((state: any) => state.carReducer);
    const queryParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        if (queryParams.get('id') === null) navigate("/");
        else dispatch(getCar(queryParams.get('id')));
    }, [dispatch]);

    let nameChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        let name: string = event.target.value;
        let re = new RegExp("\^[a-zA-Z ]\*\$");
        if (re.test(name)) setFormState({ ...formState, nameValid: true });
        else setFormState({ ...formState, nameValid: false });
    }

    let phoneChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        let phone: string = event.target.value;
        let re = new RegExp("(^$)|([0-9]{10}$)");
        if (re.test(phone)) setFormState({ ...formState, phoneValid: true });
        else setFormState({ ...formState, phoneValid: false });
    }

    return (
        <Box>
            <Box style={{ height: "5rem" }}></Box>
            <Box className="main-body">
                <Box className="white-back">
                    <Box className="sub-main-body">
                        <Grid container id="car-form-grid">
                            <Grid id="container-details-car" item>
                                <Box className="form-car-details">
                                    <Box className="head">
                                        Car <span id="heavy">Details</span>
                                    </Box>
                                    <img id="profile-img" src={car?.specifications?.image} alt="" />
                                    <p id="car-name">{car?.specifications?.name}</p>
                                    <p className="car-att">
                                        Fuel type<br />
                                        <span className="car-att-value">{car?.specifications?.fuel_type}</span>
                                    </p>
                                    <p className="car-att">
                                        Engine<br />
                                        <span className="car-att-value">{car?.specifications?.engine_cc}</span>
                                    </p>
                                    <p id="details-link">View Details</p>
                                </Box>
                            </Grid>
                            <Grid id="container-form-car" item>
                                <Box className="form-car-details">
                                    <Box className="head">
                                        Booking <span id="heavy">Details</span>
                                    </Box>
                                    <Box>
                                        <Box>
                                            <TextField
                                                error={!formState.nameValid}
                                                label="Name"
                                                {...!formState.nameValid && { helperText: "Name contains only alphabets." }}
                                                variant="filled"
                                                placeholder="Enter your Name..."
                                                margin="normal"
                                                fullWidth
                                                onChange={(event) => nameChangeHandler(event)}
                                            />
                                        </Box>
                                        <Box >
                                            <TextField
                                                error={!formState.phoneValid}
                                                fullWidth
                                                label="Contact Number"
                                                {...!formState.phoneValid && { helperText: "Please enter valid Number" }}
                                                placeholder="+91 8649736210..."
                                                variant="filled"
                                                margin="normal"
                                                onChange={(event) => phoneChangeHandler(event)}
                                            />
                                        </Box>
                                        <FormControl fullWidth>
                                            <InputLabel>City</InputLabel>
                                            <Select
                                                placeholder="Select a City"
                                                margin="dense"
                                                variant="filled"
                                            >
                                                <MenuItem value="0">Delhi</MenuItem>
                                                <MenuItem value="1">Banglore</MenuItem>
                                                <MenuItem value="2">Mumbai</MenuItem>
                                                <MenuItem value="3">Hyderabad</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControlLabel control={<Checkbox />} label="I accept the Terms and conditions" />
                                        <p id="condition">
                                            <span id="condition-head">Terms and conditions:</span><br />
                                            *Terms and conditions apply. All offers are from dealers. Please get in touch with your nearest dealer for detailed terms and <br />
                                            conditions. All taxes are additional. Offer valid till February 15, 2022 and is subject to change without prior notice.<br />
                                            Calculations for the following are for a specific tenure mileage and finance amount.
                                        </p>
                                        <Button id="submit" variant="contained" size="large" onClick={() => navigate("/booking-confirmation")}> Submit</Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Booking;