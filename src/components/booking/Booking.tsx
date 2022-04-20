import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import "./Booking.scss";
import { ChangeEvent, useState } from "react";

function Booking(): JSX.Element {

    const [formState, setFormState] = useState({nameValid: true, phoneValid: true});
    
    let nameChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => { 
        let name: string = event.target.value;
        let re = new RegExp("\^[a-zA-Z ]\*\$");
        if(re.test(name)) setFormState({...formState, nameValid: true});
        else setFormState({...formState, nameValid: false});
    }

    let phoneChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => { 
        let phone: string = event.target.value;
        let re = new RegExp("(^$)|([0-9]{10}$)");
        if(re.test(phone)) setFormState({...formState, phoneValid: true});
        else setFormState({...formState, phoneValid: false});
    }

    return (
        <Box className="main-body">
            <Box className="white-back">
                <Box className="sub-main-body">
                    <Grid container id="car-form-grid">
                        <Grid id="container-details-car" item>
                            <Box className="form-car-details">
                                <Box className="head">
                                    Car <span id="heavy">Details</span>
                                </Box>
                                {/* <img src={car} alt=""/> */}
                                <p id="car-name">BMWX5</p>
                                <p className="car-att">
                                    Fuel type<br/>
                                    <span className="car-att-value">Petrol and Deisel</span>
                                </p>
                                <p className="car-att">
                                    Engine<br/>
                                    <span className="car-att-value">2993 to 2998C</span>
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
                                            {...!formState.nameValid && {helperText:"Name contains only alphabets."}}
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
                                            {...!formState.phoneValid && {helperText:"Please enter valid Number"}}
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
                                            <MenuItem>Delhi</MenuItem>
                                            <MenuItem>Banglore</MenuItem>
                                            <MenuItem>Mumbai</MenuItem>
                                            <MenuItem>Hyderabad</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControlLabel control={<Checkbox />} label="I accept the Terms and conditions" />
                                    <p id="condition">
                                    <span id="condition-head">Terms and conditions:</span><br/>
                                    *Terms and conditions apply. All offers are from dealers. Please get in touch with your nearest dealer for detailed terms and <br/>
                                    conditions. All taxes are additional. Offer valid till February 15, 2022 and is subject to change without prior notice.<br/>
                                    Calculations for the following are for a specific tenure mileage and finance amount. 
                                    </p>
                                    <Button id="submit" variant="contained" size="large"> Submit</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default Booking;