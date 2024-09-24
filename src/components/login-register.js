import React, { useState } from 'react';
import { Box, TextField, Card, Stack, CardMedia, CardContent, Typography, CardActions, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';


const LoginRegister = ({ isLogin = false, onAction }) => {
  console.log("=====", isLogin)
  const [isLoginFlow, setIsLoginFlow] = useState(isLogin);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassowrd] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({ countryCode: '', phoneNumber: '' });

  const handleChange = (event) => {
    setOrganizer(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({ countryCode: '', phoneNumber: '' });

    // Validate country code (must be a number and typically 1-4 digits)
    if (!/^\+?[1-9]\d{0,3}$/.test(countryCode)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        countryCode: 'Invalid country code. Example: +1, +44, etc.',
      }));
      return;
    }

    // Validate phone number (basic validation for 6-14 digits)
    if (!/^\d{6,14}$/.test(phoneNumber)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        phoneNumber: 'Invalid phone number. It should be between 6 and 14 digits.',
      }));
      return;
    }

    // If both fields are valid
    alert(`Phone number submitted: ${countryCode} ${phoneNumber}`);
  };

  const changeContext = () => {
    setIsLoginFlow(!isLoginFlow)
  }

  return <div>
    <Box
      component="form"
      noValidate
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      autoComplete="off">
      <Card variant="outlined" sx={{ width: 400 }}>
        <CardMedia
          sx={{ height: 200, backgroundImage: "url('https://images.stockcake.com/public/0/2/1/021f09e2-2c5c-4c67-839e-c178563b887f_large/vibrant-festival-night-stockcake.jpg')" }}
          title="green iguana"
        />
        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
            {isLoginFlow ? "Login" : "Register"}
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Stack spacing={2}>
              {!isLoginFlow && <TextField
                required
                id="outlined-required"
                label="Full Name"
                value={fullname}
                fullWidth
              />}
              {!isLoginFlow && <Stack direction="row" spacing={2}>
                {/* Country Code Input */}
                <TextField
                  label="Code"
                  variant="outlined"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  error={!!errors.countryCode}
                  helperText={errors.countryCode}
                  InputProps={{
                    startAdornment: <Typography sx={{ marginRight: '8px' }}>+</Typography>,
                  }}
                  required
                  sx={{ width: '30%' }}
                />

                {/* Phone Number Input */}
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  sx={{ width: '70%' }}
                  required
                />
              </Stack>}

              {!isLoginFlow && <FormControl fullWidth variant="outlined" required>
                <InputLabel id="dropdown-label">Organizer</InputLabel>
                <Select
                  labelId="dropdown-label"
                  value={organizer}
                  onChange={handleChange}
                  label="Organizer"
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>}

              <TextField
                required
                id="outlined-required"
                label="Email Address"
                value={email}
                fullWidth
              />
              <TextField
                required
                id="outlined-required"
                label="Password"
                value={password}
                type='password'
                fullWidth
              />
              {!isLoginFlow && <TextField
                required
                id="outlined-required"
                label="Confirm Password"
                type='password'
                value={confirmPassword}
                fullWidth
              />}
            </Stack>
          </form>
        </CardContent>
        <CardActions>
          {!isLoginFlow && <Button
            variant="text"
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={changeContext}
          >
            Already have account
          </Button>}
          {isLoginFlow && <Button size="large">Login</Button>}
          {isLoginFlow && <Button
            variant="text"
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={changeContext}
          >
            Create account
          </Button>}
          {!isLoginFlow && <Button size="large">Register</Button>}
        </CardActions>
      </Card>
    </Box>
  </div>

};

export default LoginRegister;