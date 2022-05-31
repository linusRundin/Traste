import React from 'react';
import {Modal} from '@mui/material';
import PropTypes from 'prop-types';

/**
 * A modal containg an image
 * @param {string} picture: the image being showed
 * @param {func} closeHandler: handles the closing of the modal
 * @param {bool} isOpen: a bool determining
 * if the modal should be open or closed
 * @return {*} Modal
 */
function ImageModal({picture, closeHandler, isOpen}) {
  return (
    <Modal
      open={isOpen}
      onClose={closeHandler}
      style={{display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', marginTop: '10vh'}}
      data-testid = 'imageModal'
    >
      <img src={picture} style={{maxWidth: '800px'}}
        alt="Firestore Photo" width={'100%'}
        onClick={closeHandler}/>
    </Modal>);
}

ImageModal.propTypes = {
  picture: PropTypes.string.isRequired,
  closeHandler: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ImageModal;
