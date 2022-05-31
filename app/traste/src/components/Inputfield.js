import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@mui/material';
import {Colors} from '../assets/Colors';

/**
 * Custom TextField used for different data in the RenderPage.
 * @param {*} label Name of field.
 * @param {*} value Starting value.
 * @param {*} onChange Handler.
 * @param {*} error What will be shown for the error.
 * @param {*} type What type of values. Usally number or text.
 * @param {*} sx Styling.
 * @return {TextField} Rendered field.
 */
function Inputfield({label, value, onChange, error, type, sx}) {
  return (
    <TextField
      label={label}
      variant='outlined'
      fullWidth
      sx={sx}
      value={value}
      type={type}
      onChange={onChange}
      inputProps={{'data-testid': 'inputfield'}}
      error={!!error}
    />
  );
}

Inputfield.defaultProps = {
  error: false,
  type: 'text',
  sx: {'& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: Colors.trasteTeal}},
  'marginTop': '15px',
  'backgroundColor': 'rgba(255,255,255,0.3)',
  },
};

Inputfield.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default Inputfield;
