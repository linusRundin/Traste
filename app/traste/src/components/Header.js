import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import logo from '../assets/traste_logo.png';
import name from '../assets/traste_name.png';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import {Colors} from '../assets/Colors';

/**
 * The main header for the app. Used to navigate the app.
 * @param {goBackHandler} props Contains the handler for navigating back
 * in the document.
 * @return {AppBar} with logo and title.
 */
function Header({goBackHandler}) {
  return (
    <AppBar
      data-testid='header'
      position='sticky'
      sx={{backgroundColor: Colors.trasteNavyBlue}}
    >
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <KeyboardBackspaceIcon fontSize='large' onClick={goBackHandler} />
        <img src={name} alt='traste name' style={{height: '25px'}} />
        <img src={logo} alt='traste logo' style={{height: '40px'}} />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  goBackHandler: PropTypes.func.isRequired,
};

export default Header;
