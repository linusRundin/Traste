/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import MenuPage from './screens/MenuPage';
import {Container, Stack, Snackbar, Alert} from '@mui/material';
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import ReportPage from './screens/ReportPage';
import Header from './components/Header';
import {isExpired} from 'react-jwt';
import PropTypes from 'prop-types';

import {Colors} from './assets/Colors';

import axios from 'axios';
import HistoryPage from './screens/HistoryPage';
import LoginPage from './screens/LoginPage';

/**
 * Main file for controling the flow of the app.
 * @return {Container} with paths to the different screens.
 */
function App() {
  const outData = new FormData();

  const history = useNavigate();
  const [open, setOpen] = useState();
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success');
  const [sx, setSx] = useState({});

  const [dockerImage, setDockerImage] = useState();
  // const [wasteImage, setWasteImage] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const openSnackBar = (message, severity, sx) => {
    setOpen(true);
    setMessage(message);
    setSeverity(severity);

    if (sx !== undefined) { // Not required to input sx.
      setSx(sx);
    }
  };

  const Private = ({Component, snackBarHandler: openSnackBar}) => {
    const expired = isExpired(localStorage.getItem('token'));
    console.log(isExpired(localStorage.getItem('token')));
    return expired ? <Navigate to="/login" /> :
    <Component snackBarHandler={openSnackBar}/>;
  };
  Private.propTypes = {
    Component: PropTypes.func.isRequired,
    snackBarHandler: PropTypes.func,
  };

  /**
   * Function to return to the previous page via routing.
   */
  function goBack() {
    history(-1);
  }


  return (

    <Stack

      sx={{height: '100vh', display: 'flex', flexDirection: 'column',
        bgcolor: Colors.trasteGreen, marginLeft: 0, marginRight: 0, padding: 0,
      }}
    >
      <Header goBackHandler={goBack} />

      <Snackbar
        open={open}
        onClose={handleClose}
        key={1}
        autoHideDuration={6000}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        sx={{marginTop: '7vh'}}>

        <Alert
          severity={severity}
          sx={sx}>
          {message}
        </Alert>
      </Snackbar>

      <Routes>
        <Route
          exact path="/"
          element={<Private Component={MenuPage}/>}
        />
        <Route
          path="/report"
          element={<Private Component={ReportPage}
            snackBarHandler={openSnackBar}/>}
        />
        <Route
          path="/history"
          element={<Private Component={HistoryPage}/>}
        />
        <Route
          path="/login"
          element={<LoginPage snackBarHandler={openSnackBar}/>}
        />
      </Routes>
    </Stack>
  );
}

export default App;
