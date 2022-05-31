import React from 'react';
import {Container, Paper, Button} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {loginAPI} from '../api/trasteApi.js';
import {successSx, warningSx, errorSx} from '../assets/Constants';
import PropTypes from 'prop-types';
import {Colors} from '../assets/Colors.js';
import {useNavigate} from 'react-router-dom';
import bcrypt from 'bcryptjs';
import logo from '../assets/login_logo.png';

/**
 *
 *
 * @return {*} lol
 */
function LoginPage({snackBarHandler}) {
  const salt = '$2a$10$CwTycUXWue0Thq9StjUM0u';
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const loginCallback = () => {
    login();
  };

  /**
   * The login function itself
   */
  async function login() {
    const hashedPassword = bcrypt.hashSync(values.password, salt);
    const res = await loginAPI
        .post('', {'password': hashedPassword}).catch((e) => {
          console.log(e);
          if (e.response.status === 401) {
            snackBarHandler(
                'The password is not correct, ' +
                'please check that you have the correct password.',
                'warning', warningSx,
            );
          } else {
            snackBarHandler(
                'An error occurred, please try again later.',
                'error', errorSx,
            );
          }
        });
    if (res && res.status === 200) {
      snackBarHandler(
          'Successfully logged in.',
          'success', successSx,
      ); // dubbelkolla path till token från res.
      localStorage.setItem('token', res.data.accessToken);
      navigate('/');
      location.reload();
    }
  }

  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container
      sx={{flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', width: '100vw'}}
    >
      <Paper elevation={0}
        sx={{display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          width: '85vw', maxWidth: '400px', padding: '20px',
          backgroundColor: 'rgba(255,255,255,0.4)'}}>
        <img src={logo} alt='traste logo'
          style={{width: '80vw', maxWidth: '400px'}} />

        <FormControl sx={{m: 1, width: '80vw', marginTop: '2vh',
          marginBottom: '2vh', maxWidth: '400px'}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            sx={{backgroundColor: 'rgba(255,255,255,0.3)', maxWidth: '400px'}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button variant="contained"
          onClick={loginCallback}
          sx={{'width': '80vw', 'maxWidth': '400px',
            'backgroundColor': Colors.trasteNavyBlue,
            ':hover': {backgroundColor: Colors.trastePurple}}}
        >Log in
        </Button>
      </Paper>
    </Container>
  );
};

LoginPage.propTypes = {
  snackBarHandler: PropTypes.any.isRequired,
};
export default LoginPage;
