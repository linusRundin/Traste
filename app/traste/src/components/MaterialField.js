import React from 'react';
import PropTypes from 'prop-types';
import {Colors} from '../assets/Colors';

import {TextField, InputAdornment} from '@mui/material';

/**
 * Custom TextField for displaying a procentage for a specified material.
 * @param {*} label Name of field.
 * @param {*} value Starting value.
 * @param {*} onChange Handler.
 * @param {*} error What will be shown for the error.
 * @return {TextField} Rendred field.
 */
function MaterialField({label, value, onChange, error}) {
  return (
    <TextField
      fullWidth
      label={label}
      InputProps={{
        endAdornment: (
          <InputAdornment position='start' disableTypography={true}>
            %
          </InputAdornment>
        ),
      }}
      variant='outlined'
      type='number'
      onFocus={(event) => {
        event.target.select();
      }}
      onBlur={(evt) => {
        if (evt.target.value === '' || evt.target.value < 0) {
          onChange(0);
        }
      }}
      value={value}
      onChange={(e) => {
        let tmpval = e.target.value;
        if (isNaN(parseInt(e.target.value, 10))) {
          tmpval = '';
        } else {
          tmpval = parseInt(tmpval, 10);
        }
        onChange(tmpval);
      }}
      sx={{
        backgroundColor: Colors.transparentWhite,
      }}
      inputProps={{
        'style': {textAlign: 'right', fontSize: 16},
        'data-testid': 'materialfield',
      }}
      error={!!error}
    />
  );
}

MaterialField.defaultProps = {
  error: false,
};

MaterialField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.any.isRequired,
};

export default MaterialField;
