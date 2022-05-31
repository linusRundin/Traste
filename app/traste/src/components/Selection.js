import React from 'react';
import PropTypes from 'prop-types';
import {TextField, MenuItem} from '@mui/material';

/**
 * Custom TextField for displaying a selectionbox with different alternatives.
 * @param {*} label Name of field.
 * @param {*} value Starting value.
 * @param {*} onChange Handler.
 * @param {*} error What will be shown for the error.
 * @param {*} data A list of data to be displayed.
 * @return {TextField} Rendred field.
 */
function Selection({label, value, onChange, error, data}) {
  return (
    <TextField
      select
      label={label}
      value={value}
      fullWidth
      onChange={onChange}
      sx={{
        marginTop: '15px',
        backgroundColor: 'rgba(255,255,255,0.3)',
      }}
      inputProps={{'data-testid': 'selectionfield'}}
      error={!!error}
    >
      {
        /** Placeholder if there´s no data available */
        data !== undefined ? (
          data.map((option) => (
            <MenuItem
              key={option.id} value={option.label}>
              {option.label}
            </MenuItem>
          ))
        ) : (
          <MenuItem key={0}>No data</MenuItem>
        )
      }
    </TextField>
  );
}


Selection.defaultProps = {
  error: false,
};

Selection.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.any.isRequired,
  data: PropTypes.array,
};

export default Selection;
