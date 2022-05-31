import React from 'react';
import {Container, Box, Typography} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {useNavigate} from 'react-router-dom';
import {Colors} from '../assets/Colors';

/**
 * Menu page that contains "Add report"-button and "Show history"-button.
 * @return {Container} The page with the two buttons.
 */
function MenuPage() {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/report');
  };
  return (
    <Container
      disableGutters={true}
      sx={{flex: 1, display: 'flex', flexDirection: 'column'}}
    >
      <Box
        sx={{
          backgroundColor: Colors.trasteDarkPurple,
          color: 'white',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={routeChange}
      >
        <Typography variant="h4">New Report</Typography>
        <AddCircleOutlineIcon sx={{color: 'white', fontSize: 60}} />
      </Box>
      <Box
        sx={{
          backgroundColor: Colors.trastePurple,
          color: 'white',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={()=>{
          navigate('/history');
        }}
      >
        <Typography variant="h4">Show History</Typography>
        <MenuOpenIcon sx={{color: 'white', fontSize: 60}} />
      </Box>
    </Container>
  );
}
export default MenuPage;
